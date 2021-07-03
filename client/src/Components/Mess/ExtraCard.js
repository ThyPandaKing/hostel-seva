import {useState} from 'react';
import {AiFillMinusSquare, AiFillEdit} from 'react-icons/ai';
import {Button} from 'react-bootstrap';
import EditItemModal from './EditItemModal';

const ExtraCard = ({
  name,
  _id,
  price,
  AddItemToCart,
  editing,
  remove,
  edit,
}) => {
  const [editModalVisibility, setEditModalVisibility] = useState (false);

  return (
    <div className="d-flex p-2 justify-content-between bg-secondary rounded m-2">
      <EditItemModal
        modalVisibility={editModalVisibility}
        setModalVisibility={setEditModalVisibility}
        add={edit}
        initialData={{dish: name, cost: price, id: _id}}
      />

      <div className="p-2 text-white text-bold">
        <strong>{name}</strong>

      </div>
      <div className="d-flex justify-content-between">
        <div className="p-2 text-white">
          <strong>{price}{' '}Rs.</strong>

        </div>

        {editing
          ? <div>
              <Button
                variant="danger"
                style={{padding: '0.3rem', margin: '0.1rem'}}
                onClick={() => remove (_id)}
              >
                <AiFillMinusSquare />
              </Button>
              <Button
                variant="info"
                style={{padding: '0.3rem', margin: '0.1rem'}}
                onClick={() => setEditModalVisibility (true)}
              >
                <AiFillEdit />
              </Button>
            </div>
          : <Button variant="primary" onClick={() => AddItemToCart (_id)}>
              I want this
            </Button>}
      </div>
    </div>
  );
};

export default ExtraCard;
