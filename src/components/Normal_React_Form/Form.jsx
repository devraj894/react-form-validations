import "../styles/styles.css";

import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const isValidate = (currFormData) => {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;

    if (currFormData.username.length === 0) {
      errors.username = 'Username is required'
    }

    if (currFormData.email.length === 0) {
      errors.email = 'Email is required'
    } else if (!regex.test(currFormData.email)) {
      errors.email = 'Invalid Email'
    }

    if (currFormData.password.length === 0) {
      errors.password = 'Password is required'
    } else if (currFormData.password.length < 7) {
      errors.password = 'Password must contain atleast 7 characters'
    }

    return errors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = isValidate(formData);
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert('succefully submited')
      setFormData({username: "", email: "", password: ""})
    }
  }

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>

        <div className="ui-form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          {errors.username && <p>{errors.username}</p>}
          </div>


          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button type="submit" className="button">Submit</button>

        </div>
      </form>
    </div>
  );
}

export default Form;