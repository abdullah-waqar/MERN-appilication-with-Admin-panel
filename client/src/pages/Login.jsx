import React, { useState } from 'react'



const Login = () => {
  const [userlogin , setUserLogin] = useState({
  email: "",
  password: ""
})

const handleChange = (e) => {
  setUserLogin({
    ...userlogin,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  console.log(userlogin);
  setUserLogin({
    email: "",
    password: ""
  })
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