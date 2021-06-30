import React from "react";
import {useState} from "react";

export const EditScheduleData = ({scheduleData, setScheduleData, close}) => {
    let dayIndex = {
        "Monday" : 0,
        "Tuesday" : 1,
        "Wednesday" : 2,
        "Thursday" : 3,
        "Friday" : 4,
        "Saturday" : 5,
        "Sunday": 6
    }
    const [day, setDay] = useState("");
    const [meal, setMeal] = useState("");
    const [valid, setValid] = useState(false);
    const [changedMenu, setChangedMenu] = useState("");
    const handleChange = () => {
        let day = document.getElementById("day").value;
        let meal = document.getElementById("meal").value;
        setDay(day);
        setMeal(meal);
        let days = ["monday","tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        let meals = ["breakfast", "lunch", "snacks", "dinner"];
        let dayx = day.toLowerCase();
        let mealx = meal.toLowerCase();
        if(days.includes(dayx) && meals.includes(mealx)){
            setChangedMenu(scheduleData[dayIndex[day]][meal])
            setValid(true);
        }
        else{
            setValid(false);
        }
    }

    const handleSave = () =>{
        let tempScheduleData = scheduleData;
        tempScheduleData[dayIndex[day]][meal] = changedMenu;
        setScheduleData(tempScheduleData);
        close(false);
    }
    return (
        <div className="modal fade text-dark" id="EditScheduleModal" tabindex="-1" aria-labelledby="EditScheduleModalLabel" aria-hidden="true">  
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EditScheduleModalLabel">Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mx-5">
                        {/* onClic  k = {() => setScheduleData(tempScheduleData)} */}
                        <div className="input-group">
                            <input className="form-control" id="day" placeholder="Day" onChange={handleChange} value={day}/>
                            <input className="form-control" id="meal" placeholder="Meal - breakfast, lunch .." onChange={handleChange} value={meal}/>
                        </div>
                        {   !valid?
                            <div className="text-danger">Please Enter Valid Details</div>
                            :
                            <div className="text-danger">
                                <textarea 
                                style={{width: "100%", height: "120px",resize: "none"}}
                                value={changedMenu}
                                onChange={(e) => setChangedMenu(e.target.value)}
                                >
                                </textarea>
                            </div>
                        }
                        <button className="btn  btn-secondary float-right mt-3"  data-bs-dismiss="modal" onClick={handleSave}> Save </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}


