import {Card, Button} from 'react-bootstrap';
import {AiFillLike} from 'react-icons/ai';

const ComplaintCard = ({
  title,
  fromUser,
  toAdmin,
  complaint,
  Likes,
  AddLikes,
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
          <Button
            variant="success"
            onClick={() => {
              AddLikes (id);
            }}
          >
            {Likes}
            <AiFillLike style={{marginLeft: '5px', marginBottom: '5px'}} />
          </Button>
        </Card.Body>

      </Card>

    </div>
  );
};

export default ComplaintCard;
