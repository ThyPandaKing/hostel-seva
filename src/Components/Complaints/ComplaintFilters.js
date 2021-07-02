import {Dropdown} from 'react-bootstrap';
import {IoMdOptions} from 'react-icons/io';

const ComplaintFilters = ({setSelectedOption}) => {
  return (
    <div
      className="bg-light"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '3%',
      }}
    >

      <h1 className="display-5">Filters</h1>

      <Dropdown className="m-3">
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{
            width: '200%',
          }}
        >
          <IoMdOptions />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => setSelectedOption ('reverse-time-sort')}
          >
            Recently Added
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedOption ('user-list')}>
            Added by you
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedOption ('user-likes')}>
            Liked by you
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedOption ('user-dislikes')}>
            Disliked by you
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedOption ('time-sort')}>
            Last Added
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export default ComplaintFilters;
