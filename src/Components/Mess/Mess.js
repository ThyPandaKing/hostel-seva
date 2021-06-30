import Schedule from './Schedule';
import Complaints from '../Complaints/Complaints';
import './mess.css';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import ExtraCard from './ExtraCard';
import useCart from '../CartStuff/useCart';
import ShowItems from '../CartStuff/ShowItems';
import { BillModal } from '../BillModal/BillModal';
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
  const [menuSearch, setMenuSearch] = useState ('');

  function handleChange () {
    var change = document.getElementById ('menuInput').value;
    setMenuSearch (change);
  }

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
          <div className="m-4">
            <BillModal Cart={cart} TotalPrice={totalPrice}/>
          </div>
        </div>}

      <div className="container">
        <div className="d-flex justify-content-between">
          <h3>Extras</h3>
          <input
            id="menuInput"
            type="text"
            placeholder="Search"
            className="p-1"
            onChange={() => {
              handleChange ();
            }}
            value={menuSearch}
          />
        </div>
        <hr />
        {MessItemList.filter (item =>
          item.name.toLowerCase ().includes (menuSearch.toLowerCase ())
        ).map (item => (
          <ExtraCard key={item.id} {...item} AddItemToCart={AddItemToCart} />
        ))}
      </div>

      <hr />

      <Complaints
        from_User={JSON.parse (sessionStorage.getItem ('user')).name}
      />
    </div>
  );
};

export default Mess;
