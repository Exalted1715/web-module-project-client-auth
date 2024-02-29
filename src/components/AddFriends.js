import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const AddFriends = () => {
    const navigate = useNavigate()  
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends',form, {
            headers: {
                authorization: token
            }
        })
        .then(response => {
           
            navigate('/friends')
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (<div>
        <h2>Add Friends</h2>
        <form onSubmit={handleSubmit}>

            <div>
            <label htmlFor="username">Username:</label>
            <input onChange={handleChange} name="name" id="name"/>
            </div>

            <div>
            <label htmlFor="Age">Age:</label>
            <input onChange={handleChange} name="age" id="age"/>
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input onChange={handleChange} name="email" id="email"/>
            </div>
        <button>Submit</button>
        </form>
    </div>
    );
  }

  export default AddFriends;