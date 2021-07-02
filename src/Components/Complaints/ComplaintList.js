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
      <h1
        className="text-dark display-3"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        Complaint List
      </h1>

      <hr />

      <ComplaintFilters setSelectedOption={setSelectedOption} />
      <hr />
      {!loading
        ? list.length > 0
            ? list.map (data => <ComplaintCard key={data._id} data={data} />)
            : <h2 className="display-5">no items 🙂</h2>
        : <h2 className="display-5">Loading....</h2>}
    </div>
  );
};

export default ComplaintList;
