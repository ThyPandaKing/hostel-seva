import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Home';
import Mess from './Mess';
import Canteen from './Canteen';
import Sports from './Sports';
import Rooms from './Rooms';
import WashingMachine from './Washing-machine';

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
      </div>
    </Router>
  );
}

export default App;
