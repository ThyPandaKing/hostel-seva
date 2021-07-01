
import React from "react"   
import {Modal} from "react-bootstrap";
import {useState} from "react";
export const EditItemModal = ({
    modalVisibility, 
    setModalVisibility,
    MessItemList,
    setMessItemList,
    add
}) => {
    const [dish, setDish] = useState("");
    const [cost, setCost] = useState(0);
    const handleAdd = () =>{
        setDish("");
        setCost("");
        add(dish,cost);
    }

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
                setDish ('');
                setCost ('');
            }}
        >
            <Modal.Title>Edit</Modal.Title>
        </Modal.Header>   

        <Modal.Body>
            <div className="input-group my-2">
                <input className="form-control mx-1" placeholder="Name of the dish" onChange={(e) => setDish(e.target.value)} value={dish}/>
                <input type="Number" className="form-control mx-1" placeholder="Cost" onChange={(e) => setCost(e.target.value)} value={cost}/>        
            </div>
            <button className="btn btn-primary float-right mx-2" onClick={handleAdd}>Add</button>
        </Modal.Body>

      </Modal>
    )
}