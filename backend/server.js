const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');
const body_parser = require ('body-parser');
const bcrypt = require ('bcrypt');
const config = require ('config');

app.use (body_parser.json ());
app.use (cors ());

const MONGO_DB_URI = config.get ('MONGO_DB_URI');

const User = require ('./models/user');

// app.use(cors)
// routers to handle different routes
const homeRouter = require ('./routers/home');
const messRouter = require ('./routers/mess');
const canteenRouter = require ('./routers/canteen');
const complaintsRouter = require ('./routers/complaints');

app.use ('/home', homeRouter);
app.use ('/canteen', canteenRouter);
app.use ('/mess', messRouter);
app.use ('/complaints', complaintsRouter);

const PORT = 3001;

app.post ('/register', async (req, res) => {
  try {
    const {email, name, password} = req.body;
    let isAdmin = false;

    if (!name || !email || !password) {
      return res.send ('Fill All the details');
    }

    if (!email.endsWith ('@iittp.ac.in')) {
      return res.send ('Only IIT Tirupati Domain allowed');
    }

    if (email === 'cs19b001@iittp.ac.in' || email === 'cs19b041@iitp.ac.in') {
      isAdmin = true;
    }

    const cryptPassword = await bcrypt.hash (password, 10);

    const newUser = await new User ({
      emailId: email,
      name: name,
      password: cryptPassword,
      isAdmin: isAdmin,
    });

    await newUser.save ().then (result => console.log (result)).catch (err => {
      console.log (err);
      res.send ('User Already Exists');
    });
  } catch (err) {
    console.log (err);
  }
  res.send ('done');
});

app.post ('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    console.log ('search start');
    const user = await User.find ({
      emailId: email,
    });
    if (user.length) {
      if (await bcrypt.compare (password, user[0].password)) {
        res.send ({
          msg: 'User Found',
          found: true,
          user: {
            name: user[0].name,
            _id: user[0]._id,
            emailId: user[0].emailId,
            isAdmin: user[0].isAdmin,
          },
        });
      } else {
        res.send ({
          msg: 'Wrong Password',
          found: false,
          user: null,
        });
      }
    } else {
      res.send ({
        msg: 'Invalid Email ID',
        found: false,
        user: null,
      });
    }
  } catch (error) {
    console.log (error);
    res.status (404).send ({
      msg: 'some error',
      found: false,
      user: null,
    });
  }
});

mongoose.connect (
  MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log ('connected to mongo_db');
    app.listen (PORT, () => console.log (`server running on port ${PORT}`));
  }
);
