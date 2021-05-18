import './Navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <div className="links-navbar">

        <Link to="/mess">Mess</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/washing-machine">Washing Machine</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/canteen">Canteen</Link>
      </div>
    </div>
  );
};

export default NavBar;
