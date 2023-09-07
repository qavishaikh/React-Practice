import React, { useState } from 'react'
import './Form.css'

const FormValidate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitedData, setSubmitedData] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if(!name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if(!email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if(!password.trim()) {
      newErrors.password = "Password is Required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit =(event) => {
    event.preventDefault();

    if (validateForm()){
      const submitedData = {
        name,
        email,
        password,
      };
      setSubmitedData(submitedData);
      console.log("Form Submited", submitedData);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {
        submitedData && (
          <div>
            <h2>Submeted data</h2>
            <p>Name: {submitedData.name}</p>
            <p>Email: {submitedData.email}</p>
            <p>Password: {submitedData.password}</p>
          </div>
        )
      }
    </>
  );
}

export default FormValidate
