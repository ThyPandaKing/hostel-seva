import React from 'react';
import {Modal} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const WasteModal = ({modalVisibility, setModalVisibility, add}) => {
  const [waste, setWaste] = useState ('');
  const [warning, setWarning] = useState ({
    visible: false,
    msg: '',
  });

  const handleAdd = () => {
    try {
      if (waste === '') {
        setWarning ({
          msg: '* fill waste %',
          visible: true,
        });
        return;
      }

      const wasteNumber = Number (waste);

      if (wasteNumber < 0) {
        setWarning ({
          msg: '* fill only positive number',
          visible: true,
        });
        return;
      }
      setModalVisibility (false);
      setWaste ('');

      add (wasteNumber);
    } catch (e) {
      setWarning ({
        msg: '* fill only as number',
        visible: true,
      });
    }
  };

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
          setWaste ('');
        }}
      >
        <Modal.Title>Add Waste</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-danger">{warning.visible && warning.msg}</p>

        <div className="input-group my-2">
          <input
            className="form-control mx-1"
            placeholder="Waste %age"
            type="Number"
            onChange={e => setWaste (e.target.value)}
            value={waste}
          />

        </div>
        <button
          className="btn btn-primary float-right mx-2"
          onClick={handleAdd}
        >
          Add
        </button>
      </Modal.Body>

    </Modal>
  );
};

export default WasteModal;
