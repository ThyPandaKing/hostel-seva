import {Button} from 'react-bootstrap';
import {Card, ListGroup} from 'react-bootstrap';
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';

const ShowItems = ({cart, AddItemToCart, RemoveItemFromCart}) => {
  return (
    <div className="container">
      <Card style={{width: 'auto'}}>
        <ListGroup variant="flush">
          {cart.map (item => (
            <ListGroup.Item
              key={item.id}
              style={{display: 'flex', justifyContent: 'space-between'}}
            >
              <p>{item.times} {item.name} for {item.times * item.price}</p>
              <div>
                <Button
                  variant="success"
                  style={{padding: '0.3rem', margin: '0.1rem'}}
                  onClick={() => AddItemToCart (item.id)}
                >
                  <AiFillPlusCircle />
                </Button>

                <Button
                  variant="danger"
                  style={{padding: '0.3rem', margin: '0.1rem'}}
                  onClick={() => RemoveItemFromCart (item.id)}
                >
                  <AiFillMinusCircle />
                </Button>
              </div>
            </ListGroup.Item>
          ))}

        </ListGroup>
      </Card>
    </div>
  );
};

export default ShowItems;
