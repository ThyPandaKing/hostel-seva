import ComplaintCard from './ComplaintCard';
import ComplaintFilters from './ComplaintFilters';
import {useState, useEffect} from 'react';
import axios from 'axios';

const ComplaintList = () => {
  const user = JSON.parse (sessionStorage.getItem ('user'));
  const [list, setList] = useState ([]);
  

  const [loading, setLoading] = useState (true);
  const [selectedOption, setSelectedOption] = useState ('reverse-time-sort');
  

  useEffect (
    () => {
      setLoading (true);
      axios
        .post (`http://localhost:3001/complaints/${selectedOption}`, {user})
        .then (res => {
          setList (res.data);
          setLoading (false);
        })
        .catch (err => console.log (err));
    },
    [selectedOption]
  );

  

  return (
    <div className="m-2 p-10 bg-highlight">
      <ComplaintFilters
        setSelectedOption={setSelectedOption}
      />
      {!loading
        ? list.map (data => <ComplaintCard key={data._id} data={data} />)
        : <h1>Loading....</h1>}
    </div>
  );
};

export default ComplaintList;
