const express = require ('express');
const router = express.Router ();
const MessMenu = require ('../models/messMenu');
const MessItem = require ('../models/messItem');
const FoodWaste = require ('../models/foodWaste');

router.use (express.json ());

router.get ('/', (req, res) => {
  MessMenu.find ({})
    .sort ({priority: 1})
    .then (menu => res.json (menu))
    .catch (err => console.log ('from mess.js ' + err));
});

router.post ('/', (req, res) => {
  const {day, BreakFast, Lunch, Snack, Dinner, priority} = req.body;
  console.log ('entry');
  const newMenu = new MessMenu ({
    day,
    BreakFast,
    Lunch,
    Snack,
    Dinner,
    priority,
  });

  newMenu
    .save ()
    .then (menu => res.json (menu))
    .catch (err => console.log (err));
});

router.put ('/:id', (req, res) => {
  const {meal, food} = req.body;
  const id = req.params.id;

  MessMenu.findByIdAndUpdate (
    id,
    {[meal]: food},
    {new: true},
    (err, result) => {
      if (err) {
        console.log (err);
      } else {
        console.log ('updated : ', result);
        res.send (result);
      }
    }
  );
});

router.get ('/extras', (req, res) => {
  MessItem.find ({})
    .then (MessItemList => res.json (MessItemList))
    .catch (err => console.log (err));
});

router.post ('/extras/remove', (req, res) => {
  const {id} = req.body;
  MessItem.findByIdAndDelete (id, (err, docs) => {
    if (err) {
      console.log (err);
    } else {
      console.log ('Deleted : ', docs);
      res.send (docs);
    }
  });
});

router.post ('/extras/add', (req, res) => {
  const {dishName, cost} = req.body;
  const newMessItem = new MessItem ({
    name: dishName,
    price: cost,
  });
  newMessItem
    .save ()
    .then (item => res.json (item))
    .catch (err => console.log (err));
});

router.put ('/extras/edit', (req, res) => {
  const {id, name, price} = req.body;
  console.log (name, id, price);

  MessItem.findByIdAndUpdate (
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

router.get ('/foodWaste', (req, res) => {
  console.log ('entry');
  FoodWaste.find ({})
    .limit (7)
    .sort ({date: -1})
    .then (waste => res.json (waste))
    .catch (err => console.log ('from mess.js ' + err));
});

router.post ('/foodWaste', (req, res) => {
  const {waste} = req.body;
  console.log ('entry');
  const newWaste = new FoodWaste ({
    waste,
  });

  newWaste
    .save ()
    .then (waste => {
      res.json (waste);
      console.log (waste);
    })
    .catch (err => console.log (err));
});

module.exports = router;
