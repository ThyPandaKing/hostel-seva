const Mess = () => {
  return (
    <div class="p-2">
      {/* Waste-o-meter */}
      <div className ="waste-o-meter" class="container p-2  ">
        <h2>Waste-o-meter</h2>
        <hr></hr>
        <div class="progress m-3" style={{height:"25px"}}>
          <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width:"10%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p class="m-3 font-monospace">some info regarding the bar</p>
      </div>
      <br></br>
      {/* Schedule */}
      <div class="container p-2   ">
        <h2>Schedule</h2>
        <hr></hr>
        <button class="btn btn-primary">Show-Schedule</button>
      </div>
      <br></br>
      {/* Mess Food  */}
      <div class="container  ">
        <h2>Extras</h2>
        <hr></hr>
        <div class="container   overflow-y-scroll">
          <div class="d-flex p-2 justify-content-around bg-secondary rounded">
            <div class="p-2 text-white text-bold"><strong>Something Delicious</strong></div>
            <button class="btn btn-primary">I want this</button>
          </div>
        </div> 
      </div>
      <br></br>
      {/* Complaint / Review */}
      <div class="container p-2">
        <div class="d-flex mx-5">
          <div class="p-2 border">Complaints</div>
          <div class="p-2 border">Review</div>
        </div>
        <div className="input-block mx-5 border border-5 p-2">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
          </div> 
          <div class="input-group mb-3">
            
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div> 
        </div>
      </div>

    </div>
  )
};

export default Mess;
