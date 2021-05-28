import CanteenMenu from './CanteenMenu';
import {useState} from 'react';
import Complaints from '../Complaints/Complaints';
import ShowItems from '../CartStuff/ShowItems';
import {Button} from 'react-bootstrap';
import useCart from '../CartStuff/useCart';

const Canteen = () => {
  const [CanteenItemList, setCanteenItemList] = useState ([
    {
      id: 1,
      name: 'aalo ki sabzi',
      price: 100,
    },
    {
      id: 2,
      name: 'balle balle',
      price: 20,
    },
    {
      id: 3,
      name: 'mix veg balle',
      price: 30,
    },
  ]);

  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: CanteenItemList,
    Cart: [],
  });

  return (
    <div className="container">
      <h1>Canteen</h1>
      <h3 className="m-2">
        {' '}
        {totalPrice === 0 ? '' : `Total Price ${totalPrice}`}
        {' '}
      </h3>
      {cart.length !== 0 &&
        <div>
          <ShowItems
            cart={cart}
            AddItemToCart={AddItemToCart}
            RemoveItemFromCart={RemoveItemFromCart}
          />
          <Button variant="primary" className="m-4">Order Send</Button>
        </div>}
      <div className="container">
        <h3>Menu</h3>
        <hr />
        {CanteenItemList.map (item => (
          <CanteenMenu key={item.id} {...item} AddItemToCart={AddItemToCart} />
        ))}
      </div>

      <Complaints from_User="Aditya" />
    </div>
  );
};

export default Canteen;
