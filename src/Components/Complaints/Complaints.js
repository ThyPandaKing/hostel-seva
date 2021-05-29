import {Button} from 'react-bootstrap';
import {useState} from 'react';
import ComplaintData from './ComplaintData';

const Complaints = ({from_User}) => {
  const [title, setTitle] = useState ('');
  const [complaint, setComplaint] = useState ('');
  const [fromUser, setFromUser] = useState (from_User);
  const [toAdmin, setToAdmin] = useState ('General Sec');

  const initialState = () => {
    setFromUser (from_User);
    setToAdmin ('');
    setTitle ('');
    setComplaint ('');
  };

  const AddPost = () => {
    if (!(title && complaint && fromUser && toAdmin)) {
      return;
    }

    ComplaintData.push ({
      title,
      complaint,
      fromUser,
      toAdmin,
      Likes: 0,
      DisLikes: 0,
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
        <div className="input-group mb-2">
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={complaint}
            onChange={e => setComplaint (e.target.value)}
          />
        </div>
        <h6 className="m-2">From : {fromUser}</h6>

        <div className="d-flex m-2 d-inline">
          <div className="my-auto">To : </div>
          <select
            className="form-control w-25 mx-2 p-0"
            onChange={e => setToAdmin (e.target.value)}
          >
            <option selected>General Sec</option>
            <option>Hostel Sec</option>
            <option>Mess Sec</option>
          </select>
          <Button variant="primary" onClick={AddPost} className="ml-auto">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
