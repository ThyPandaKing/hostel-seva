import {Card, Button} from 'react-bootstrap';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';

const ComplaintCard = ({
  title,
  fromUser,
  toAdmin,
  complaint,
  Likes,
  AddLikes,
  DisLikes,
  AddDisLikes,
  id,
}) => {
  return (
    <div>
      <Card className="m-3 p-3">
        <Card.Header as="h5">{fromUser} to {toAdmin} </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {complaint}
          </Card.Text>
          <div>
            <Button
              variant="success"
              onClick={() => {
                AddLikes (id);
              }}
              className="m-2"
            >
              {Likes}
              <AiFillLike style={{marginLeft: '5px', marginBottom: '5px'}} />
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                AddDisLikes (id);
              }}
              className="m-2"
            >
              {DisLikes}
              <AiFillDislike style={{marginLeft: '5px', marginBottom: '5px'}} />
            </Button>
          </div>
        </Card.Body>

      </Card>

    </div>
  );
};

export default ComplaintCard;
