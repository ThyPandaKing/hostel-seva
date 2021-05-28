import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">Hostel Seva</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="Navbar">
            <Link to="/mess">Mess</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/canteen">Canteen</Link>
            <Link to="/complaints">Complaints List</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
