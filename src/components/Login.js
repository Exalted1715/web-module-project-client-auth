import React, {useState} from 'react'

const Login = () => {
    const [cred, setCred] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        setCred({
            ...cred,
        })
    }

    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} id="username"/>
          </div>
          <div>
          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} type="password" id="password"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }

  export default Login;