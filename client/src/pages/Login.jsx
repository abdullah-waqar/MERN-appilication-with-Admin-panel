import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [userlogin , setUserLogin] = useState({
  email: "",
  password: ""
})

const navigate = useNavigate();

const handleChange = (e) => {
  setUserLogin({
    ...userlogin,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = async (e) => {
  
  console.log(userlogin);
  try{

  
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userlogin)
  })
    if(response.ok){
      setUserLogin({
        email: "",
        password: ""
      });
        navigate("/");
    } 
}

  catch (error) {
    console.error("Error during login:", error);
  }
}


  return (
    <section>
      <div className="container">
        <div className="login-image">
          <img src="" alt="Login image" />
        </div>

        <div className="login-form">
          <div>
            <form action={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={userlogin.email}
              onChange={handleChange}
              placeholder='Enter your email'
              autoComplete='off'
              required
             />

             <label htmlFor="password">Password</label>
             <input 
              type="password"
              id="password"
              name="password"
              value={userlogin.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
              required
             />
            <button type='submit' className='btn btn-primary'>Login</button>
             </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login