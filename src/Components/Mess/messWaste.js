import {useState} from 'react';
import {Button, Accordion, Card, ProgressBar} from 'react-bootstrap';
import WasteModal from './wasteModal';

const MessWaste = ({foodWaste, addFoodWaste, isCurrentUserAllowed}) => {
  const latestWaste = foodWaste[0].waste;
  const [modalVisibility, setModalVisibility] = useState (false);

  const chooseColor = waste => {
    if (waste <= 5) {
      return 'success';
    } else if (waste <= 30) {
      return 'info';
    } else if (waste <= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  return (
    <div className="waste-o-meter container p-2 ">
      <WasteModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        add={addFoodWaste}
      />
      <h1 className="text-dark display-5">
        Waste-O-Meter{' '}
      </h1>

      <hr />
      <ProgressBar
        now={latestWaste}
        striped
        variant={chooseColor (latestWaste)}
      />
      <h4 className="m-3 font-monospace">
        {latestWaste + '% of Food Wasted was wasted in recent update'}
      </h4>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
              Check Last {Math.min (foodWaste.length, 7)} days data{' '}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              {foodWaste.map (waste => {
                return (
                  <div
                    key={waste._id}
                    style={{
                      margin: '10px',
                      padding: '10px',
                      background: '#e9ecef',
                    }}
                  >
                    <ProgressBar
                      now={waste.waste}
                      striped
                      variant={chooseColor (waste.waste)}
                    />
                    <h6 className="m-3 font-monospace">
                      {waste.waste +
                        '% of Food Wasted on ' +
                        waste.date.slice (0, 10)}
                    </h6>
                  </div>
                );
              })}

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {isCurrentUserAllowed
        ? <Button
            variant="primary"
            className="m-3"
            onClick={() => setModalVisibility (true)}
          >
            {' '}Add new update{' '}
          </Button>
        : ''}
    </div>
  );
};

export default MessWaste;
