import {useState} from 'react';

const useCart = ({ItemList, Cart}) => {
  const [itemList, setItemList] = useState (ItemList);
  const [cart, setCart] = useState (Cart);
  const [totalPrice, setTotalPrice] = useState (0);

  // use effect will be implemented once we use backend ,
  // we will send url and then it will fetch data from that url.
  const AddItemToCart = id => {
    let inIt = false;
    let newTotal = totalPrice;
    const newCart = cart.map (item => {
      if (item.id === id) {
        inIt = true;
        item.times += 1;
        newTotal += item.price;
      }
      return item;
    });
    if (inIt) {
      setCart (newCart);
      setTotalPrice (newTotal);
    } else {
      const newItem = itemList.find (item => item.id === id);

      newItem.times = 1;
      newTotal += newItem.price;

      setCart ([...cart, newItem]);
      setTotalPrice (newTotal);
    }
  };

  const RemoveItemFromCart = id => {
    let newTotal = totalPrice;
    const newCart = cart.filter (item => {
      if (item.id === id) {
        item.times -= 1;
        newTotal -= item.price;
      }
      return item.times !== 0;
    });

    setCart (newCart);
    setTotalPrice (newTotal);
  };

  return [cart, totalPrice, AddItemToCart, RemoveItemFromCart];
};

export default useCart;
