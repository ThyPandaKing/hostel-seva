import ComplaintCard from './ComplaintCard';
import {useEffect, useState} from 'react';
const axios = require ('axios');

const ComplaintList = () => {
  const [list, setList] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    axios
      .get ('http://localhost:3001/complaints')
      .then (res => {
        setList (res.data);
        setLoading (false);
      })
      .catch (err => console.log (err));
  }, []);

 

  return (
    <div className="m-2 p-10 bg-highlight">
      {!loading
        ? list.map (data => (
            <ComplaintCard
              key={data._id}
              data={data}
            />
          ))
        : <h1>Loading....</h1>}
    </div>
  );
};

export default ComplaintList;
