import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AboutSite = () => {
  return (
    <div className="m-5 p-3">
      <Card className="text-center bg-light">
        <Card.Body>
          <Card.Title>Mess Management</Card.Title>
          <br />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Card border="secondary" style={{width: '18rem'}}>
              <Card.Header><strong>Waste Information</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  Get information about the wasted food on that particular day and  week.
                  A realization of how much we waste everyday might improve the situation.
                  <strong> Admins</strong> can add this information everyday.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary" style={{width: '18rem'}}>
              <Card.Header><strong>Schedule</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  It is very easy to forget the location of pdf we download as mess menu and
                  sometime we even use last year's menu. So with our website
                  {' '}
                  <strong>Admins</strong>
                  {' '}
                  can
                  {' '}
                  easily update mess
                  menu and for users it will be very convenient to check latest menu.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary" style={{width: '18rem'}}>
              <Card.Header><strong>Extras</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  We all love eating extra food we get in mess, so now you can order that
                  {' '}
                  from your room, also
                  {' '}
                  <strong>Mess stuff</strong>
                  {' '}
                  can update that menu everyday.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <br />
          <Button variant="dark">
            <Link to="/mess" className="text-light">Checkout Mess</Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">For Mess</Card.Footer>
      </Card>

      <br />
      <Card className="text-center bg-light">

        <Card.Body>
          <Card.Title>Canteen Management</Card.Title>
          <br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card border="secondary" style={{width: '25rem'}}>
              <Card.Header><strong>Mess Order</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  We all love eating Canteen food, so now you can order that
                  {' '}
                  from your room, also
                  {' '}
                  <strong>Canteen Owner</strong>
                  {' '}
                  can update that menu everyday. So that we don't have to make hopes of eating something
                  which is not available and also keep budget ready every time.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <br />
          <Button variant="dark">
            <Link to="/canteen" className="text-light">Checkout Canteen</Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">For Canteen</Card.Footer>
      </Card>

      <br />
      <Card className="text-center bg-light">

        <Card.Body>
          <Card.Title>Send Complaints</Card.Title>
          <br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card border="secondary" style={{width: '25rem'}}>
              <Card.Header><strong>Complaints</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  We often forget how important feedback from students is
                  and also is our feedback being used of not, now we can have some transparency
                  in complaints/feedback as well as we can show our support for some complaint
                  {' '}
                  complaints can be of any type, ranging from
                  {' '}
                  <strong>Mess</strong>
                  {' '}
                  ,
                  {' '}
                  <strong>Canteen </strong>
                  or even some
                  {' '}
                  <strong>Hostel Affairs</strong>
                  {' '}
                  like wi-fi not working.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <br />
          <Button variant="dark">
            <Link to="/complaints" className="text-light">
              Checkout Complaints
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">For Complaint</Card.Footer>
      </Card>
    </div>
  );
};

export default AboutSite;
