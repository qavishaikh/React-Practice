import React, { useState } from 'react';

function AdmissionForm() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    age: '',
    qualification: '',
    city: '',
    district: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (11 digits required)';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 0) {
      newErrors.age = 'Invalid age';
    }

    if (!formData.qualification.trim()) {
      newErrors.qualification = 'Qualification is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit data to the server or perform other actions.
      console.log('Form is valid:', formData);

      // Reset the form fields after successful submission
      setFormData(initialFormData);
    } else {
      // Form has errors, update the state with the error messages.
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          {errors.qualification && <p className="error">{errors.qualification}</p>}
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          {errors.district && <p className="error">{errors.district}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
