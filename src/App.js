import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { useState, useEffect} from "react";
import NavBar from './Components/Navbar';
import Home from './Components/Home/Home';
import Mess from './Components/Mess/Mess';
import Canteen from './Components/Canteen/Canteen';
import Sports from './Components/Sports/Sports';
import Footer from './Components/Footer';
import ComplaintList from './Components/Complaints/ComplaintList';
import GoToHome from './Components/GoToHome';
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";

function App () {
  const [user, setUser] = useState(sessionStorage.getItem('user'));
  
  return (
    <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/mess">
            <Mess />
          </PrivateRoute>
          <PrivateRoute exact path="/sports">
            <Sports />
          </PrivateRoute>
          <PrivateRoute exact path="/canteen">
            <Canteen />
          </PrivateRoute>
          <PrivateRoute exact path="/complaints">
            <ComplaintList />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/*">
            <GoToHome />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
