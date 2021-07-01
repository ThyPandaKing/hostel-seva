import React, {useEffect} from 'react';
import {useState} from 'react';
import {Dropdown, Modal, Button} from 'react-bootstrap';

export const EditScheduleData = ({
  handleItemEdit,
  modalVisibility,
  setModalVisibility,
}) => {
  const [day, setDay] = useState ('');
  const [meal, setMeal] = useState ('');
  const [food, setFood] = useState ('');
  const [warning, setWarning] = useState ({
    visible: false,
    msg: '',
  });

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
              <Dropdown.Item onClick={() => setDay ('Monday')}>
                Monday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Tuesday')}>
                Tuesday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Wednesday')}>
                Wednesday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Thursday')}>
                Thursday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Friday')}>
                Friday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Saturday')}>
                Saturday
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDay ('Sunday')}>
                Sunday
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-3">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              {!meal ? 'Meal' : meal}

            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setMeal ('BreakFast')}>
                Break Fast
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMeal ('Lunch')}>
                Lunch
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMeal ('Snack')}>
                Snack
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setMeal ('Dinner')}>
                Dinner
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

        </div>
        <div className="input-group mb-2">
          <textarea
            className="form-control"
            aria-label="With textarea"
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
