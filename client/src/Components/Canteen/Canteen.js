import CanteenMenu from './CanteenMenu';
import {useState, useEffect} from 'react';
import Complaints from '../Complaints/Complaints';
import ShowItems from '../CartStuff/ShowItems';
import {Button} from 'react-bootstrap';
import useCart from '../CartStuff/useCart';
import './canteen.css';
import {BillModal} from '../BillModal/BillModal';
import axios from 'axios';
import EditMenuModal from './EditMenuModal';
import {AiFillPlusCircle} from 'react-icons/ai';

const Canteen = () => {
  const [CanteenItemList, setCanteenItemList] = useState ([]);
  const [editing, setEditing] = useState (false);
  const [editModalVisibility, setEditModalVisibility] = useState (false);
  const [isCurrentUserAllowed, setIsCurrentUserAllowed] = useState (false);

  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: CanteenItemList,
    Cart: [],
  });

  const [menuSearch, setMenuSearch] = useState ('');

  useEffect (() => {
    const user = JSON.parse (sessionStorage.getItem ('user'));

    if (user.isAdmin) {
      setIsCurrentUserAllowed (true);
    }

    axios
      .get ('http://localhost:3001/canteen')
      .then (res => setCanteenItemList (res.data))
      .catch (err => console.log (err));
  }, []);

  const handleAdd = async (name, price) => {
    await axios
      .post ('http://localhost:3001/canteen/add', {
        name,
        price,
      })
      .then (res => console.log (res))
      .catch (err => console.log (err));
    await axios
      .get ('http://localhost:3001/canteen')
      .then (res => setCanteenItemList (res.data))
      .catch (err => console.log (err));

    setEditModalVisibility (false);
  };

  const handleRemove = id => {
    axios
      .post ('http://localhost:3001/canteen/remove', {
        id,
      })
      .then (res => console.log ('success'))
      .catch (err => console.log (err));

    const newItems = CanteenItemList.filter (item => item._id !== id);

    setCanteenItemList (newItems);
  };

  const handleEdit = (name, price, id) => {
    console.log (id, name, price);
    axios
      .put ('http://localhost:3001/canteen/edit', {
        id,
        name,
        price,
      })
      .then (res => console.log ('success'))
      .catch (err => console.log (err));

    const newItems = CanteenItemList.map (item => {
      if (item._id !== id) return item;

      item.price = price;
      item.name = name;

      return item;
    });

    setCanteenItemList (newItems);
  };

  const handleEditorSave = () => {
    if (isCurrentUserAllowed) {
      setEditing (!editing);
    }
  };

  return (
    <div className="container">
      <h1
        className="text-dark display-3"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        Canteen
      </h1>
      <hr />

      <h1 className="text-dark display-6 m-2">
        {' '}
        {totalPrice === 0 ? '' : `Total Price ${totalPrice}`}
        {' '}

      </h1>
      {cart.length !== 0 &&
        <div>
          <ShowItems
            cart={cart}
            AddItemToCart={AddItemToCart}
            RemoveItemFromCart={RemoveItemFromCart}
          />
          <div className="m-4">
            <BillModal Cart={cart} TotalPrice={totalPrice} />
          </div>
        </div>}
      <div className="container">
        <EditMenuModal
          modalVisibility={editModalVisibility}
          setModalVisibility={setEditModalVisibility}
          add={handleAdd}
          initialData={{dish: '', cost: 0}}
        />
        <h1 className="text-dark display-5 m-4">
          Menu
        </h1>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {isCurrentUserAllowed
            ? <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  handleEditorSave ();
                }}
              >
                {!editing ? 'Edit' : 'Done'}
              </button>
            : <div />}
          {!editing
            ? <input
                id="menuInput"
                type="text"
                placeholder="Search"
                className="p-1"
                onChange={e => {
                  setMenuSearch (e.target.value);
                }}
                value={menuSearch}
              />
            : <Button
                variant="success"
                style={{padding: '0.3rem', margin: '0.1rem'}}
                onClick={() => setEditModalVisibility (true)}
              >
                <AiFillPlusCircle />
              </Button>}
        </div>

        <hr />

        <div className="bd-highlight overflow-y-scroll menu">

          {CanteenItemList.filter (item =>
            item.name.toLowerCase ().includes (menuSearch.toLowerCase ())
          ).map (item => (
            <CanteenMenu
              key={item._id}
              {...item}
              AddItemToCart={AddItemToCart}
              editing={editing}
              remove={handleRemove}
              edit={handleEdit}
            />
          ))}
        </div>
      </div>

      <br />
      <Complaints
        from_User={JSON.parse (sessionStorage.getItem ('user')).name}
      />
    </div>
  );
};

export default Canteen;
