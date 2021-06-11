import ComplaintData from './ComplaintData';
import ComplaintCard from './ComplaintCard';
import {useEffect, useState} from 'react';
const axios = require("axios")
const ComplaintList = () => {
  const [list, setList] = useState ([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    axios.get("/complaints")
    .then(res => {
      setList(res.data);
      setLoading(false);    
    })
    .catch(err => console.log(err))
  },[])

  const AddLikes = id => {
    var user = sessionStorage.getItem("user")
    const newComplaints = list.map (data => {
      if (data._id === id) {
        if(data.likes.includes(user)){
          var indx = data.likes.indexOf(user);
          data.likes.splice(indx,1);
        }
        else{
          data.likes.push(user);
        }
        if(data.dislikes.includes(user)){
          var indx = data.dislikes.indexOf(user);
          data.dislikes.splice(indx,1);
        }
      }
      return data;
    });
    setList (newComplaints);
  };
  const AddDislikes = id => {
    var user = sessionStorage.getItem("user");
    const newComplaints = list.map (data => {
      if (data._id === id) {
        if(data.dislikes.includes(user)){
          var indx = data.likes.indexOf(user);
          data.dislikes.splice(indx,1);
        }
        else{
          data.dislikes.push(user);
        }
        if(data.likes.includes(user)){
          var indx = data.dislikes.indexOf(user);
          data.likes.splice(indx,1);
        }
      }
      return data;
    });

    setList (newComplaints);
  };

  return (
    <div className="m-2 p-10 bg-highlight">
      {
        !loading?
         list.map(data => (
            <ComplaintCard
              key={data._id}
              id={data._id}
              data={data}
              AddLikes={AddLikes}
              AddDislikes={AddDislikes}
            />
          )):
        <h1>Loading....</h1>
        }
    </div>
  );
};

export default ComplaintList;
