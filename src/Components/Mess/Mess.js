import Schedule from './Schedule';
import Complaints from './Complaints';
import './mess.css';
const Mess = () => {
  return (
    <div className="p-2">
      {/* Waste-o-meter */}
      <div className="waste-o-meter container p-2  ">
        <h2>Waste-o-meter</h2>
        <hr />
        <div className="progress m-3" style={{height: '25px'}}>
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            style={{width: '10%'}}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <p className="m-3 font-monospace">some info regarding the bar</p>
      </div>
      <br />
      <Schedule />
      <br />
      {/* Mess Food  */}
      <div className="container  ">
        <h2>Extras</h2>
        <hr />
        <div className="container">
          <div className="d-flex p-2 justify-content-around bg-secondary rounded">
            <div className="p-2 text-white text-bold">
              <strong>Something Delicious</strong>
            </div>
            <button className="btn btn-primary">I want this</button>
          </div>
        </div>
      </div>
      <br />
      {/* Complaint / Review */}
      <Complaints />
    </div>
  );
};

export default Mess;
