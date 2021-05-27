import {Button} from 'react-bootstrap';
import {useState} from 'react';
import ComplaintData from './ComplaintData';

const Complaints = ({from_User, to_Admin}) => {
  const [title, setTitle] = useState ('');
  const [complaint, setComplaint] = useState ('');
  const [fromUser, setFromUser] = useState (from_User);
  const [toAdmin, setToAdmin] = useState (to_Admin);

  const initialState = () => {
    setFromUser (from_User);
    setToAdmin (to_Admin);
    setTitle ('');
    setComplaint ('');
  };

  const AddPost = () => {
    ComplaintData.push ({
      title,
      complaint,
      fromUser,
      toAdmin,
      Likes: 0,
      id: new Date ().getTime ().toString (),
    });

    initialState ();
  };

  return (
    <div className="container p-2">
      <div className="d-flex mx-2">
        <div className="complaint p-2 bd-highlight border border-bottom-0 rounded-top">
          Complaint
        </div>

      </div>
      <div className="input-block mx-2 p-2 bd-highlight border-0">
        <div className="input-group mb-3 my-1">
          <span className="input-group-text" id="basic-addon1">Title</span>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={title}
            onChange={e => setTitle (e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={complaint}
            onChange={e => setComplaint (e.target.value)}
          />
        </div>
        <h6>From : {fromUser}</h6>
        <h6>To : {toAdmin}</h6>
        <Button variant="primary" onClick={AddPost}>Post</Button>
      </div>
    </div>
  );
};

export default Complaints;
