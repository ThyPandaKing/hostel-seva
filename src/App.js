import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home/Home';
import Mess from './Components/Mess/Mess';
import Canteen from './Components/Canteen/Canteen';
import Sports from './Components/Sports/Sports';
import Rooms from './Components/Rooms/Rooms';
import WashingMachine from './Components/WashingMachine/Washing-machine';
import Footer from './Components/Footer';

function App () {
  return (
    <Router>
      <div>

        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mess">
            <Mess />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/sports">
            <Sports />
          </Route>
          <Route exact path="/washing-machine">
            <WashingMachine />
          </Route>
          <Route exact path="/canteen">
            <Canteen />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
