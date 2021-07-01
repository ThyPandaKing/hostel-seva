const express = require ('express');
const router = express.Router ();
const MessMenu = require ('../models/messMenu');

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

module.exports = router;
