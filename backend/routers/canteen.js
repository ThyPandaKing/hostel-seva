const express = require ('express');
const router = express.Router ();
const CanteenMenu = require ('../models/canteenMenu');

router.use (express.json ());

router.get ('/', (req, res) => {
  CanteenMenu.find ({})
    .then (menu => res.json (menu))
    .catch (err => console.log ('from canteen.js ' + err));
});

router.post ('/remove', (req, res) => {
  const {id} = req.body;
  CanteenMenu.findByIdAndDelete (id, (err, docs) => {
    if (err) {
      console.log (err);
    } else {
      console.log ('Deleted : ', docs);
      res.send (docs);
    }
  });
});

router.post ('/add', (req, res) => {
  const {name, price} = req.body;
  const newCanteenItem = new CanteenMenu ({
    name: name,
    price: price,
  });
  newCanteenItem
    .save ()
    .then (item => res.json (item))
    .catch (err => console.log (err));
});

router.put ('/edit', (req, res) => {
  const {id, name, price} = req.body;
  console.log (name, id, price);

  CanteenMenu.findByIdAndUpdate (
    id,
    {name: name, price: Number (price)},
    {new: true},
    (err, docs) => {
      if (err) {
        console.log (err);
      } else {
        console.log ('Updated : ', docs);
        res.send (docs);
      }
    }
  );
});

module.exports = router;
