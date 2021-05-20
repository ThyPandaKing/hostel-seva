const Complaints = () => {
  return (
    <div className="container p-2">
      <div className="d-flex mx-5">
        <div className="p-2 border">Complaints</div>
        <div className="p-2 border">Review</div>
      </div>
      <div className="input-block mx-5 border border-5 p-2">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">

          <textarea className="form-control" aria-label="With textarea" />
        </div>
      </div>
    </div>
  );
};

export default Complaints;
