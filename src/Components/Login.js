import "./Login.css";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {useState} from "react";
const axios = require("axios");

function Login() {
    const [name,setName] = useState("");
    const [emailid, setEmailid] = useState("");
    const [password,setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    function handleSubmit(){
        console.log(name,emailid,password)
        axios.post("/login",{
            name,
            emailid,
            password
        })        
        .then(res => {
            sessionStorage.setItem('user',res.data.name)
            setAuth(true);
        })
        .catch(err => console.log(err));
      }
    if(auth || sessionStorage.getItem("user")) return <Redirect to="/" />
    return (
        <div class="container-sm cnt">
            <div class="form-group">
                <label >Name</label>
                <input type="textk" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmailid(e.target.value)} value={emailid}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            {/* <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;