import { useState } from "react";
import './mess.css';

const Complaints = () => {
  const [toggle, setToggle] = useState("complaints");

  function change(option){
    var complaint =  document.getElementsByClassName("complaint")[0]
    var review = document.getElementsByClassName("review")[0]
     if(option == 'complaint'){
       complaint.classList.add("border");
       complaint.classList.add("bd-highlight");
       review.classList.remove("border");
       review.classList.remove("bd-highlight");
     }
     else {
      complaint.classList.remove("border");
      complaint.classList.remove("bd-highlight");
      review.classList.add("border");
      review.classList.add("bd-highlight");
     }
     setToggle(option)
  }

  return (
    <div className="container p-2">
      <div className="d-flex mx-2">
        <div className="complaint p-2 bd-highlight border border-bottom-0 rounded-top" onClick = {() => {change("complaint")}}>Complaint</div>
        <div className="review p-2 border-bottom-0 rounded-top" onClick = {() => {change("review")}}>Review</div>
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
          />
        </div>
        <div className="input-group mb-3">
          <textarea className="form-control" aria-label="With textarea" placeholder={toggle + "..."}/>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
