import Schedule from './Schedule';
import Complaints from '../Complaints/Complaints';
import './mess.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import ExtraCard from './ExtraCard';
import useCart from '../CartStuff/useCart';
import ShowItems from '../CartStuff/ShowItems';
import {BillModal} from '../BillModal/BillModal';
import {EditItemModal} from './EditItemModal';
const Mess = () => {
  const [foodWaste, setFoodWaste] = useState ('30');
  const [editing, setEditing] = useState(false)
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [MessItemList, setMessItemList] = useState ([]);
  const [cart, totalPrice, AddItemToCart, RemoveItemFromCart] = useCart ({
    ItemList: MessItemList,
    Cart: [],
  });
  const [menuSearch, setMenuSearch] = useState ('');


  useEffect(() => {
    axios
    .get ('http://localhost:3001/mess/extras')
    .then (res => setMessItemList (res.data))
    .catch (err => console.log (err));
  },[])


  const handleRemove = (dishName) =>{
    let newMessItemList = MessItemList.filter( item => {
      return item.name != dishName;
    })
    setMessItemList(newMessItemList);
    axios.post("http://localhost:3001/mess/extras/remove",{
      dishName
    }).then((res) => console.log("success"))
    .catch((err) => console.log(err))
  }
  const handleAdd = (dishName, cost) =>{
    if(MessItemList.some(item => item.name == dishName)){
        // do somthing
    }
    else{
      let newMessItem = {
        name: dishName,
        price: cost,
        quantity: 1000
      }
      MessItemList.push(newMessItem);
      setMessItemList(MessItemList);
      axios.post("http://localhost:3001/mess/extras/add", {
          dishName,
          cost
      }).then(res => console.log(res))
      .catch(err => console.log(err))
    }
    setEditModalVisibility(false);
  }

  // TODO
  const handleEditorSave = () =>{
    setEditing(!editing);



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
            <BillModal Cart={cart} TotalPrice={totalPrice} />
          </div>
        </div>}

      <div className="container">
        <EditItemModal 
          modalVisibility = {editModalVisibility}
          setModalVisibility = {setEditModalVisibility}
          MessItemList = {MessItemList}
          setMessItemList = {setMessItemList}
          add = {handleAdd}
        />
        <div className="d-flex justify-content-between">
          <h3>Extras</h3>
          <div className="d-flex">
            <button className="btn btn-danger mx-2" 
                    onClick={() => {handleEditorSave()}}

            >{!editing? "Edit": "Done"}</button>
            {!editing ? 
              <input
                id="menuInput"
                type="text"
                placeholder="Search"
                className="p-1"
                onChange={(e) => {
                  setMenuSearch (e.target.value);
                }}
                value={menuSearch}
              />:
              <button className="my-auto bg-success mx-2 text-white"  style={{border: "none", borderRadius: "100%"}} onClick={() => setEditModalVisibility(true)}>+</button>
            }
          </div>
        </div>
        <hr />
        {MessItemList.filter (item =>
          item.name.toLowerCase ().includes (menuSearch.toLowerCase ())
        ).map (item => (
          <ExtraCard key={item.id} {...item} AddItemToCart={AddItemToCart} editing={editing} MessItemList={MessItemList} setMessItemList={setMessItemList} remove={handleRemove}/>
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
