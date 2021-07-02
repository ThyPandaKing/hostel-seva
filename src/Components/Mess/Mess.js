import Schedule from './Schedule';
import Complaints from '../Complaints/Complaints';
import './mess.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ExtraCard from './ExtraCard';
import useCart from '../CartStuff/useCart';
import MessWaste from './messWaste';
import ShowItems from '../CartStuff/ShowItems';
import {BillModal} from '../BillModal/BillModal';
import EditItemModal from './EditItemModal';
import {AiFillPlusCircle} from 'react-icons/ai';
import {Button} from 'react-bootstrap';

const Mess = () => {
  const [foodWaste, setFoodWaste] = useState ([]);
  const [editing, setEditing] = useState (false);
  const [editModalVisibility, setEditModalVisibility] = useState (false);
  const [MessItemList, setMessItemList] = useState ([]);
  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: MessItemList,
    Cart: [],
  });
  const [menuSearch, setMenuSearch] = useState ('');
  const [isCurrentUserAllowed, setIsCurrentUserAllowed] = useState (false);

  useEffect (() => {
    const user = JSON.parse (sessionStorage.getItem ('user'));

    if (user.isAdmin) {
      setIsCurrentUserAllowed (true);
    }

    axios
      .get ('http://localhost:3001/mess/extras')
      .then (res => setMessItemList (res.data))
      .catch (err => console.log (err));

    axios
      .get ('http://localhost:3001/mess/foodWaste')
      .then (res => {
        setFoodWaste (res.data);
      })
      .catch (err => console.log (err));
  }, []);

  const addFoodWaste = waste => {
    axios
      .post ('http://localhost:3001/mess/foodWaste', {waste})
      .then (res => {
        window.location.reload ();
      })
      .catch (err => console.log (err));
  };

  const handleRemove = id => {
    axios
      .post ('http://localhost:3001/mess/extras/remove', {
        id,
      })
      .then (res => console.log ('success'))
      .catch (err => console.log (err));

    const newItems = MessItemList.filter (item => item._id !== id);

    setMessItemList (newItems);
  };

  const handleEdit = (name, price, id) => {
    console.log (id, name, price);
    axios
      .put ('http://localhost:3001/mess/extras/edit', {
        id,
        name,
        price,
      })
      .then (res => console.log ('success'))
      .catch (err => console.log (err));

    const newItems = MessItemList.map (item => {
      if (item._id !== id) return item;

      item.price = price;
      item.name = name;

      return item;
    });

    setMessItemList (newItems);
  };

  const handleAdd = async (dishName, cost) => {
    await axios
      .post ('http://localhost:3001/mess/extras/add', {
        dishName,
        cost,
      })
      .then (res => console.log (res))
      .catch (err => console.log (err));
    await axios
      .get ('http://localhost:3001/mess/extras')
      .then (res => setMessItemList (res.data))
      .catch (err => console.log (err));

    setEditModalVisibility (false);
  };

  // TODO
  const handleEditorSave = () => {
    if (isCurrentUserAllowed) setEditing (!editing);
  };

  //  When we fetch data from mess backend, we will use this setFoodWaste variable too

  return (
    <div className="p-2 container-lg">
      <h1
        className="text-dark display-3"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        Mess
      </h1>

      <hr />

      {foodWaste[0]
        ? <MessWaste
            foodWaste={foodWaste}
            addFoodWaste={addFoodWaste}
            isCurrentUserAllowed={isCurrentUserAllowed}
          />
        : ''}

      <br />
      <Schedule isCurrentUserAllowed={isCurrentUserAllowed} />
      <br />

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
        <EditItemModal
          modalVisibility={editModalVisibility}
          setModalVisibility={setEditModalVisibility}
          add={handleAdd}
          initialData={{dish: '', cost: 0}}
        />
        <h1 className="text-dark display-5">
          Extra
        </h1>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {isCurrentUserAllowed
            ? <Button
                variant="danger"
                onClick={() => {
                  handleEditorSave ();
                }}
              >
                {!editing ? 'Edit' : 'Done'}
              </Button>
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
          {MessItemList.filter (item =>
            item.name.toLowerCase ().includes (menuSearch.toLowerCase ())
          ).map (item => (
            <ExtraCard
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

      <hr />

      <Complaints
        from_User={JSON.parse (sessionStorage.getItem ('user')).name}
      />
    </div>
  );
};

export default Mess;
