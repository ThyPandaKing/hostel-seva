import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      style={{backgroundColor: '#343a40', marginBottom: 0}}
      className="page-footer font-small"
    >

      <div className="container">

        <div className="row text-center d-flex justify-content-center pt-1 mb-1">

          <div className="col-md-2 mb-1">
            <h6 className="text-uppercase font-weight-bold">
              <Link
                to="/about-us"
                style={{color: 'white', textDecoration: 'underline'}}
              >
                About us
              </Link>
            </h6>
          </div>

        </div>
        <hr className="rgba-white-light" />

        <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

          <div
            className="col-md-8 col-12 mt-1"
            style={{
              color: 'aliceblue',
            }}
          >
            <p>
              Feel Free To Contribute{' here :  '} <a
                href="https://github.com/PandaKing9660/hostel-seva"
                style={{
                  color: 'aliceblue',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                repository link
              </a>
            </p>
          </div>

        </div>

      </div>
      <div
        className="footer-copyright text-center py-1"
        style={{
          color: 'aliceblue',
        }}
      >
        Made For : {' '}
        <a
          href="https://iittp.ac.in/"
          style={{textDecoration: 'underline', color: 'aliceblue'}}
        >
          IIT Tirupati
        </a>
      </div>

    </footer>
  );
};

export default Footer;
