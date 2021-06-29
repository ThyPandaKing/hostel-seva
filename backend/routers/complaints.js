var express = require ('express');
var router = express.Router ();
let Complaint = require ('../models/complaints');

router.use (express.json ());

router.get ('/', (req, res) => {
  Complaint.find ({})
    .then (complaint => res.json (complaint))
    .catch (err => console.log ('from complaint.js ' + err));
});

router.post ('/check', async (req, res) => {
  try {
    const {userId, complaintId} = req.body;

    await Complaint.findById (complaintId)
      .then (resp => {
        
        if (resp) {
          const LikeId = resp.likes.find (likeId => likeId === userId);

          if (LikeId) {
            return res.send ('success');
          }
          const dislikeId = resp.dislikes.find (dislikeId => dislikeId === userId);

          if (dislikeId) {
            return res.send ('danger');
          }
          return res.send ('secondary');
        } else {
          return res.send ('secondary');
        }
      })
      .catch (err => console.log (err));
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

router.post ('/addComplaint', (req, res) => {
  const {complaint} = req.body;
  console.log ('entry');
  console.log (complaint);
  const newComplaint = new Complaint ({
    title: complaint.title,
    content: complaint.content,
    from: complaint.from,
    to: complaint.to,
    likes: complaint.likes,
    dislikes: complaint.dislikes,
  });

  newComplaint
    .save ()
    .then (complaint => res.json (complaint))
    .catch (err => console.log (err));
});

router.put ('/addLike', async (req, res) => {
  try {
    const {userId, complaintId} = req.body;

    let newListLike, newListDislike;

    await Complaint.findById (complaintId)
      .then (resp => {
        newListLike = resp.likes.filter (idd => idd !== userId);
        newListDislike = resp.dislikes.filter (idd => idd !== userId);
      })
      .catch (err => console.log (err));

    newListLike.push (userId);
    console.log (newListLike);
    console.log (newListDislike);

    await Complaint.findByIdAndUpdate (
      complaintId,
      {
        likes: newListLike,
        dislikes: newListDislike,
      },
      {new: true},
      (err, result) => {
        if (err) {
          console.log (err);
        } else {
          console.log ('updated : ', result);
        }
      }
    );

    res.send ('ook');
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

router.put ('/addDisLike', async (req, res) => {
  try {
    const {userId, complaintId} = req.body;

    let newListLike, newListDislike;

    await Complaint.findById (complaintId)
      .then (resp => {
        newListLike = resp.likes.filter (idd => idd !== userId);
        newListDislike = resp.dislikes.filter (idd => idd !== userId);
      })
      .catch (err => console.log (err));

    newListDislike.push (userId);
    console.log (newListLike);
    console.log (newListDislike);

    await Complaint.findByIdAndUpdate (
      complaintId,
      {
        likes: newListLike,
        dislikes: newListDislike,
      },
      {new: true},
      (err, result) => {
        if (err) {
          console.log (err);
        } else {
          console.log ('updated : ', result);
        }
      }
    );

    res.send ('ook');
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

module.exports = router;
