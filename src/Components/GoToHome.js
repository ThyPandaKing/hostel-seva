import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const GoToHome = () => {
  return (
    <div
      className="shadow p-3 mb-5 bg-white rounded"
      style={{textAlign: 'center'}}
    >

      Woops, Wrong link, go to{'  '}

      <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
        <Button variant="primary">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default GoToHome;
