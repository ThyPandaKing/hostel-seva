import React from 'react';
import {Modal} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const EditItemModal = ({
  modalVisibility,
  setModalVisibility,
  add,
  initialData,
}) => {
  const [dish, setDish] = useState (initialData.dish);
  const [cost, setCost] = useState (initialData.cost);
  const [warning, setWarning] = useState ({
    visible: false,
    msg: '',
  });

  const handleAdd = () => {
    if (dish === '') {
      setWarning ({
        msg: '* fill dish name',
        visible: true,
      });
      return;
    }
    if (cost <= 0) {
      setWarning ({
        msg: '* Positive cost only',
        visible: true,
      });
      return;
    }

    setModalVisibility (false);
    if (initialData.id) {
      add (dish, cost, initialData.id);
    } else {
      setDish ('');
      setCost ('');
      add (dish, cost);
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
          if (!initialData.id) {
            setDish ('');
            setCost ('');
          }
        }}
      >
        <Modal.Title>{!initialData.id ? 'Add' : 'Edit'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-danger">{warning.visible && warning.msg}</p>

        <div className="input-group my-2">
          <input
            className="form-control mx-1"
            placeholder="Name of the dish"
            onChange={e => setDish (e.target.value)}
            value={dish}
          />
          <input
            className="form-control mx-1"
            placeholder="Cost"
            type="Number"
            onChange={e => setCost (e.target.value)}
            value={cost}
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

export default EditItemModal;
