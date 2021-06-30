import {useState} from 'react';
import {MessData, MessTimings} from './ScheduleData';
import {Table, Card} from 'react-bootstrap';
import {EditScheduleData} from './EditScheduleData';


const Schedule = () => {
  const [isScheduleShowing, setIsScheduleShowing] = useState (false);
  const [scheduleData, setScheduleData] = useState (MessData);

  /*
    1. Design can be added later, though not needed,
    2. Dynamic Data change by admin, (backend stuff)

  */

  const handleScheduleClick = () => {
    setIsScheduleShowing (!isScheduleShowing);
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
      <EditScheduleData scheduleData={scheduleData} setScheduleData={setScheduleData} close={setIsScheduleShowing}/>
      {isScheduleShowing? 
        <button className="btn btn-danger m-2 float-right" data-bs-toggle="modal" data-bs-target="#EditScheduleModal">
          {"Edit"}
        </button> 
        : null
      }
      

      {isScheduleShowing
        ? <div>
            {' '}<Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Break Fast</th>
                  <th>Lunch</th>
                  <th>Snacks</th>
                  <th>Dinner</th>
                </tr>
              </thead>
              <thead>
                {scheduleData.map (item => {
                  return (
                    <tr key={item.Day} style={{fontSize: '0.7rem'}}>
                      <td>{item.Day}</td>
                      <td >
                        {item.BreakFast}
                      </td>
                      <td >
                        {item.Lunch}
                      </td>
                      <td >
                        {item.Snacks}
                      </td>
                      <td >
                          {item.Dinner}
                      </td>
                    </tr>
                  );
                })}
              </thead>
            </Table>
          </div>
        : <div />}
    </div>
  );
};

export default Schedule;
