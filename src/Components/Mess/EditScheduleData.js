import React, {useEffect} from 'react';
import {useState} from 'react';
import {Dropdown, Modal, Button} from 'react-bootstrap';

let dayId = {
  "Monday": 0,
  "Tuesday": 1,
  "Wednesday": 2,
  "Thursday": 3,
  "Friday": 4,
  "Satday": 5,
  "Sunday": 6,
}

export const EditScheduleData = ({
  scheduleData,
  handleItemEdit,
  modalVisibility,
  setModalVisibility
}) => {
  const [day, setDay] = useState ('');
  const [meal, setMeal] = useState ('');
  const [food, setFood] = useState ('');
  const [warning, setWarning] = useState ({
    visible: false,
    msg: '',
  });
  const handleSetMeal = (mealType) => {
    setMeal(mealType);
    if(day!=''){
      setFood(scheduleData[dayId[day]][mealType])
    }
  }

  const handleSetDay = (dayType) => {
    setDay(dayType);
    if(meal!=""){
      setFood(scheduleData[dayId[dayType]][meal])
    }
  }



  useEffect (
    () => {
      setTimeout (() => {
        setWarning ({visible: false});
      }, 2000);

      return () => clearTimeout ();
    },
    [warning.msg]
  );

  return (
    <Modal
      show={modalVisibility}
      onHide={() => setModalVisibility (false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header
        closeButton
        onClick={() => {
          setDay ('');
          setFood ('');
          setMeal ('');
        }}
      >
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {warning.visible ? <p className="text-danger">{warning.msg}</p> : ''}

        <div style={{display: 'flex', justifyContent: 'space-around'}}>

          <Dropdown className="m-3">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              {!day ? 'Day' : day}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSetDay ('Monday')}>
                Monday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Tuesday')}>
                Tuesday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Wednesday')}>
                Wednesday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Thursday')}>
                Thursday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Friday')}>
                Friday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Saturday')}>
                Saturday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetDay ('Sunday')}>
                Sunday
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-3">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              {!meal ? 'Meal' : meal}

            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSetMeal ('BreakFast')}>
                Break Fast
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetMeal ('Lunch')}>
                Lunch
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetMeal ('Snack')}>
                Snack
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSetMeal ('Dinner')}>
                Dinner
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

        </div>
        <div className="input-group mb-2">
          <textarea
            className="form-control"
            aria-label="With textarea"
            style={{resize: "none", height: "120px"}}
            value={food}
            onChange={e => setFood (e.target.value)}
          />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            if (day === '') {
              
              setWarning ({
                visible: true,
                msg: '* select a Day',
              });

              return;
            }
            if (meal === '') {
              setWarning ({
                visible: true,
                msg: '* select a slot',
              });
              return;
            }
            if (food === '') {
              setWarning ({
                visible: true,
                msg: '* fill in changes',
              });
              return;
            }

            handleItemEdit (day, meal, food);
            setDay ('');
            setFood ('');
            setMeal ('');
            setModalVisibility (false);
          }}
        >
          Save
        </Button>

      </Modal.Footer>
    </Modal>
  );
};
