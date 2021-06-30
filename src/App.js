import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/Navigation/Navbar';
import Home from './Components/Home/Home';
import Mess from './Components/Mess/Mess';
import Canteen from './Components/Canteen/Canteen';
import Footer from './Components/Footer/Footer';
import ComplaintList from './Components/Complaints/ComplaintList';
import GoToHome from './Components/GoToHome';
import SignIn from './Components/SignUp/SignIn';
import PrivateRoute from './Components/PrivateRoute';

function App () {
  return (
    <Router>
      <PrivateRoute>
        <NavBar />
      </PrivateRoute>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path="/mess">
          <Mess />
        </PrivateRoute>
        <PrivateRoute exact path="/canteen">
          <Canteen />
        </PrivateRoute>
        <PrivateRoute exact path="/complaints">
          <ComplaintList />
        </PrivateRoute>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/*">
          <GoToHome />
        </Route>
      </Switch>
      <PrivateRoute>
        <Footer />
      </PrivateRoute>
    </Router>
  );
}

export default App;
