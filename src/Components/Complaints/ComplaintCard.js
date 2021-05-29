import {Card, Button} from 'react-bootstrap';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';

const ComplaintCard = (props) => {
  var from = props.data.from;
  var to = props.data.to;
  var title = props.data.title;
  var content = props.data.content;
  var likes = props.data.likes;
  var dislikes = props.data.likes;
  var id = props.id;
  var AddLikes = props.AddLikes;
  var AddDislikes = props.AddDislikes;
  return (
    <div>
      <Card className="m-3 p-3">
        <Card.Header as="h5">{from} to {to} </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
          <div>
            <Button
              variant="success"
              onClick={() => {
                AddLikes (id);
              }}
              className="m-2"
            >
              {likes}
              <AiFillLike style={{marginLeft: '5px', marginBottom: '5px'}} />
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                AddDislikes (id);
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
