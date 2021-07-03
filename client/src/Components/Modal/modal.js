import {Button, Modal} from 'react-bootstrap';

const ShowModal = ({popup, setPopup}) => {
  return (
    <div>
      <Modal
        show={popup.visible}
        onHide={() => setPopup ({visible: false})}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{popup.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {popup.msg}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setPopup ({visible: false})}
          >
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowModal;
