import ComplaintData from './ComplaintData';
import ComplaintCard from './ComplaintCard';
import {useEffect, useState} from 'react';

const ComplaintList = () => {
  const [List, setList] = useState ([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/complaints")
    .then(res => res.json())
    .then(data => {
      setList(data);
      setLoading(false);
    })
    .catch(err => console.log(err))
  },[])

  const AddLikes = id => {
    const newComplaints = List.map (data => {
      if (data._id === id) {
        data.likes++;
      }
      return data;
    });

    setList (newComplaints);
  };
  const AddDislikes = id => {
    console.log(id)
    const newComplaints = List.map (data => {
      if (data._id === id) {
        data.dislikes++;
      }
      return data;
    });

    setList (newComplaints);
  };

  return (
    <div className="m-2 p-10 bg-highlight">
      {
        !loading?
         List.map(data => (
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
