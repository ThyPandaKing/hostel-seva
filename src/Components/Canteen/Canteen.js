import CanteenMenu from './CanteenMenu';
import {useState} from 'react';
import Complaints from '../Complaints/Complaints';
import ShowItems from '../CartStuff/ShowItems';
import {Button} from 'react-bootstrap';
import useCart from '../CartStuff/useCart';
import './canteen.css';
import { BillModal } from '../BillModal/BillModal'


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
    {
      id: 4,
      name: 'mix veg balle',
      price: 30,
    },
    {
      id: 5,
      name: 'mix veg balle',
      price: 30,
    },
  ]);

  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: CanteenItemList,
    Cart: [],
  });

  const [menuSearch, setMenuSearch] = useState ('');

  function handleChange () {
    var change = document.getElementById ('menuInput').value;
    setMenuSearch (change);
  }

  return (
    <div className="container">
      <h1>Canteen</h1>
      <hr />
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
          <h3>Menu</h3>
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
        <div className="bd-highlight overflow-y-scroll menu">
          {CanteenItemList.filter (item =>
            item.name.toLowerCase ().includes (menuSearch.toLowerCase ())
          ).map (item => (
            <CanteenMenu
              key={item.id}
              {...item}
              AddItemToCart={AddItemToCart}
            />
          ))}
        </div>
      </div>

      <br />
      <Complaints from_User={JSON.parse(sessionStorage.getItem('user')).name} />
    </div>
  );
};

export default Canteen;
