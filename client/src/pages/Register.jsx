import React, { useState } from "react";

const Register = () => {

    const [user , setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: undefined
    })

    const handleInput = (e) => {
        let name =  e.target.name
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
    e.preventDefault();
    const response  = fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    }
  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="" alt="picture" width="500" height="500" />
            </div>
            {/* Registration form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />

              <form action={handleSubmit}>
                <div>
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    placeholder="Enter your username"
                    autoComplete="off"
                    onChange={handleInput}
                    required
                  />

                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    placeholder="Enter your username"
                    autoComplete="off"
                    onChange={handleInput}
                    required
                  />

                  <label htmlFor="password">password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={user.password}
                    placeholder="Enter your password"
                    autoComplete="off"
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="Enter your number"
                    autoComplete="off"
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
