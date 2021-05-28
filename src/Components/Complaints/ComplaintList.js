import ComplaintData from './ComplaintData';
import ComplaintCard from './ComplaintCard';
import {useState} from 'react';

const ComplaintList = () => {
  const [List, setList] = useState (ComplaintData);

  const AddLikes = id => {
    const newComplaints = List.map (data => {
      if (data.id === id) {
        data.Likes++;
      }
      return data;
    });

    setList (newComplaints);
  };
  const AddDisLikes = id => {
    const newComplaints = List.map (data => {
      if (data.id === id) {
        data.DisLikes++;
      }
      return data;
    });

    setList (newComplaints);
  };

  return (
    <div className="m-2 p-10">

      {List
        ? List.map (data => (
            <ComplaintCard
              key={data.id}
              {...data}
              AddLikes={AddLikes}
              AddDisLikes={AddDisLikes}
            />
          ))
        : <div>
            <h1>No Complaints , what a bless !!</h1>
          </div>}
    </div>
  );
};

export default ComplaintList;
