import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [userData, setUserData] = useState(null); // Use a userData state to store submitted data

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    // Create an object with the submitted data
    const userData = {
      name: name,
      phoneNumber: number,
      age: age,
    };
    setUserData(userData); // Store the data in the state

    // Clear input fields after submitting
    setName("");
    setNumber("");
    setAge("");
  };

  return (
    <div>
      <h1>User Info Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <br />
        <label>
          Phone Number:
          
          <input type="number" value={number} onChange={handleNumberChange} />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div>
          <h2>User's Data</h2>
          <p>Name: {userData.name}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
