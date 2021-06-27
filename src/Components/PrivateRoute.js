import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { useState, useEffect} from "react";

function PrivateRoute({children, ...rest}){
    return (
        <Route {...rest} render={() =>{
            return sessionStorage.getItem("user") == null
            ? <Redirect to="/login" />
            : children
        }} />
    )
}

export default PrivateRoute;
