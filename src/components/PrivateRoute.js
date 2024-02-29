import React from "react";
import {Route, useNavigate} from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => {
return <Route {...rest} render={(props) => {
    const navigate = useNavigate()
    if (localStorage.getItem('token')){
        return(<Component {...props}/>)
    } else {
        return navigate('/login')
    }
}}/>
} 
export default PrivateRoute