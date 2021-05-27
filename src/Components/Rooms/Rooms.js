const Rooms = () => {
  return (
    <div className="p-2 container-lg">
      {/* Announcements can be used for other pages as well*/}
      <div className="Announcements container">
        <h2>Announcements</h2>
        <hr />
      </div>
      <br />
      {/* Request for cleaning/In-room Equipment */}
      <div className="Request container">
        <h2>Request for Cleaning/In-room Equipment </h2>
        <hr />
        {/* Request can be made into a component */}
        <div className="container-sm request-form">
          <div className="d-flex">
            <input type="number" placeholder="Room number" />
            <select class="form-control w-50 mx-5">
              <option>Some Request</option>
              <option>Lights not working</option>
              <option>Extra chairs</option>
            </select>
          </div>
          <button className="btn btn-primary my-3" type="submit">Submit</button>
        </div>
      </div>
      <br />
      <div className="Request container">
        <h2>Request for Floor</h2>
        <hr />
        {/* Request can be made into a component */}
        <div className="container-sm request-form">
          <div className="d-flex">
            <input type="number" placeholder="Floor" />
            <select class="form-control w-50 mx-5">
              <option>Issue/Request</option>
              <option>Lights not working</option>
              <option>Common Room</option>
              <option>Wifi Not working</option>
              <option>Bathroom Issues</option>
            </select>
          </div>
          <button className="btn btn-primary my-3" type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
