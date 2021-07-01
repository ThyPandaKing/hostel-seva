import {useEffect, useState} from 'react';
import {MessTimings} from './ScheduleData';
import {Table, Card} from 'react-bootstrap';
import {EditScheduleData} from './EditScheduleData';

import axios from 'axios';

const Schedule = () => {
  const [isScheduleShowing, setIsScheduleShowing] = useState (false);
  const [scheduleData, setScheduleData] = useState ([]);
  const [modalVisibility, setModalVisibility] = useState (false);

  useEffect (() => {
    axios
      .get ('http://localhost:3001/mess')
      .then (res => setScheduleData (res.data))
      .catch (err => console.log (err));
  }, []);

  const handleScheduleClick = () => {
    setIsScheduleShowing (!isScheduleShowing);
  };

  const handleItemEdit = async (day, meal, food) => {
    let priority;

    switch (day) {
      case 'Monday':
        priority = 1;
        break;
      case 'Tuesday':
        priority = 2;
        break;
      case 'Wednesday':
        priority = 3;
        break;
      case 'Thursday':
        priority = 4;
        break;
      case 'Friday':
        priority = 5;
        break;
      case 'Saturday':
        priority = 6;
        break;
      default:
        priority = 7;
    }

    const id = scheduleData[priority - 1]._id;

    await axios
      .put (`http://localhost:3001/mess/${id}`, {meal, food})
      .then (res => console.log (res.data))
      .catch (err => console.log (err));

    await axios
      .get ('http://localhost:3001/mess')
      .then (res => setScheduleData (res.data))
      .catch (err => console.log (err));
  };

  return (
    <div className="container p-2">
      <h2>Schedule</h2>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {MessTimings.map (item => {
          return (
            <Card
              bg="light"
              style={{width: '10rem', marginBottom: '1rem'}}
              key={item.typeFood}
            >
              <Card.Header> {item.typeFood} </Card.Header>
              <Card.Body>
                <Card.Text>
                  Weekdays : <br />{item.Weekdays}
                </Card.Text>
                <Card.Text>
                  Weekends : <br /> {item.Weekends}
                </Card.Text>

              </Card.Body>
            </Card>
          );
        })}
      </div>
      <button className="btn btn-primary m-2" onClick={handleScheduleClick}>
        {!isScheduleShowing ? 'Show-Schedule' : 'Hide'}
      </button>
      <EditScheduleData
        scheduleData = {scheduleData}
        handleItemEdit={handleItemEdit}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
      {isScheduleShowing
        ? <button
            className="btn btn-primary m-2 float-right"
            onClick={() => setModalVisibility (true)}
          >
            {'Edit'}
          </button>
        : null}

      {isScheduleShowing
        ? <div>
            {' '}<Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th
                    style={{
                      wordWrap: 'break-word',
                      width: '150px',
                    }}
                  >
                    Day
                  </th>
                  <th
                    style={{
                      wordWrap: 'break-word',
                      width: '10px',
                    }}
                  >
                    Break Fast
                  </th>
                  <th
                    style={{
                      wordWrap: 'break-word',
                      width: '10px',
                    }}
                  >
                    Lunch
                  </th>
                  <th
                    style={{
                      wordWrap: 'break-word',
                      width: '10px',
                    }}
                  >
                    Snacks
                  </th>
                  <th
                    style={{
                      wordWrap: 'break-word',
                      width: '10px',
                    }}
                  >
                    Dinner
                  </th>
                </tr>
              </thead>
              <thead>
                {scheduleData.map (item => {
                  return (
                    <tr key={item._id} style={{fontSize: '0.7rem'}}>
                      <td>{item.day}</td>
                      <td>
                        {item.BreakFast}
                      </td>
                      <td>
                        {item.Lunch}
                      </td>
                      <td>
                        {item.Snack}
                      </td>
                      <td>
                        {item.Dinner}
                      </td>
                    </tr>
                  );
                })}
              </thead>
            </Table>
          </div>
        : <div />}

      {!isScheduleShowing
        ? ''
        : <button className="btn btn-primary m-2" onClick={handleScheduleClick}>
            {' '}{'Hide'}{' '}
          </button>}

    </div>
  );
};

export default Schedule;
