import {Card, Button} from 'react-bootstrap';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
import axios from 'axios';
import {useEffect, useState} from 'react';

const ComplaintCard = props => {
  const user = JSON.parse (sessionStorage.getItem ('user'));

  const [likes, setLike] = useState (props.data.likes.length);

  const [dislikes, setDislike] = useState (props.data.dislikes.length);

  const {from, to, title, content, _id} = props.data;
  const [userStatus, setUserStatus] = useState ('');

  useEffect (
    () => {
      axios
        .post (`http://localhost:3001/complaints/check`, {
          userId: user._id,
          complaintId: _id,
        })
        .then (res => {
          setUserStatus (res.data);
        })
        .catch (err => console.log (err));
    },
    [user._id, _id]
  );

  const AddLikes = (userId, complaintId) => {
    if (userStatus === 'success') {
      return;
    }

    axios
      .put ('http://localhost:3001/complaints/addLike', {userId, complaintId})
      .then (res => {
        console.log (res.data);
        setLike (likes + 1);
        if (userStatus === 'danger') {
          setDislike (dislikes - 1);
        }

        setUserStatus ('success');
      });
  };
  const AddDislikes = (userId, complaintId) => {
    if (userStatus === 'danger') {
      return;
    }

    axios
      .put ('http://localhost:3001/complaints/addDisLike', {
        userId,
        complaintId,
      })
      .then (res => {
        console.log (res.data);
        setDislike (dislikes + 1);
        if (userStatus === 'success') {
          setLike (likes - 1);
        }

        setUserStatus ('danger');
      });
  };

  return (
    <div>
      <Card className={`m-3 p-3 border border-${userStatus}`}>
        <Card.Header as="h5" className="bg-dark text-white">
          {from} to {to}{' '}
        </Card.Header>
        <Card.Body className="bg-secondary text-white">
          <Card.Title className="text-center font-weight-bold">
            <u>{title}</u>
          </Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
          <div>
            <Button
              variant="success"
              onClick={() => {
                AddLikes (user._id, _id);
              }}
              className="m-2"
            >
              {likes}
              <AiFillLike style={{marginLeft: '5px', marginBottom: '5px'}} />
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                AddDislikes (user._id, _id);
              }}
              className="m-2"
            >
              {dislikes}
              <AiFillDislike style={{marginLeft: '5px', marginBottom: '5px'}} />
            </Button>

          </div>
        </Card.Body>

      </Card>

    </div>
  );
};

export default ComplaintCard;
