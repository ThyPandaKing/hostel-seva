import Schedule from './Schedule';
import Complaints from '../Complaints/Complaints';
import './mess.css';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import ExtraCard from './ExtraCard';
import useCart from '../CartStuff/useCart';
import ShowItems from '../CartStuff/ShowItems';

const Mess = () => {
  const [foodWaste, setFoodWaste] = useState ('30');
  const [MessItemList, setMessItemList] = useState ([
    {
      id: 0,
      name: 'aalo ki sabzi',
      price: 100,
    },
    {
      id: 1,
      name: 'balle balle',
      price: 20,
    },
  ]);
  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: MessItemList,
    Cart: [],
  });

  //  When we fetch data from mess backend, we will use this setFoodWaste variable too

  return (
    <div className="p-2 container-lg">
      {/* Waste-o-meter */}
      <div className="waste-o-meter container p-2 ">
        <h2>Waste-o-meter</h2>
        <hr />
        <div className="progress m-3" style={{height: '25px'}}>
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            style={{width: `${foodWaste}%`}}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4 className="m-3 font-monospace">
          {foodWaste}% of Food Wasted Today
        </h4>
      </div>
      <br />
      <Schedule />
      <br />
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
        <h2>Extras</h2>
        <hr />
        {MessItemList.map (item => (
          <ExtraCard key={item.id} {...item} AddItemToCart={AddItemToCart} />
        ))}
      </div>
      <br />

      {/* Complaint
        
        from which user to which user... now in mess it will from user to admin

        */}

      <Complaints from_User="Aditya" />
    </div>
  );
};

export default Mess;
