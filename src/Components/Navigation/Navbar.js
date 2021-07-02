import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Logout from '../SignUp/LogOut';

const NavBar = () => {
  const user = JSON.parse (sessionStorage.getItem ('user'));

  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/">Bhojan Seva</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="Navbar" style={{width: '85%'}}>
            <Link to="/mess">Mess</Link>
            <Link to="/canteen">Canteen</Link>
            <Link to="/complaints">Complaints List</Link>

          </Nav>

          <Navbar.Text style={{width: '18%'}}>
            {'hello, ' + user.name}
          </Navbar.Text>
          <Logout />

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
