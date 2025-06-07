import React, { useState } from 'react'

const [userlogin , setUserLogin] = useState({
  email: "",
  password: ""
})

const handleSubmit = (e) => {

}

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="login-image">
          <img src="" alt="Login image" />
        </div>

        <div className="login-form">
          <div>
            <form >
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={userlogin.email}
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
              placeholder="Enter your password"
              autoComplete="off"
              required
             />
            {/* <button type='submit' className='btn btn-primary'>Login</button> */}
             </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login