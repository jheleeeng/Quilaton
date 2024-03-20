import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      !errors.first_name &&
      !errors.middle_name &&
      !errors.last_name &&
      !errors.email &&
      !errors.password
    ) {
      axios.post('http://localhost:8081/signup', { ...values })
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="bg-white p-3 rounded w-1/4">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="first_name"
              onChange={handleInput}
              className="form-input rounded-0"
            />
            {errors.first_name && <span className="text-red-500">{errors.first_name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="middle_name">
              <strong>Middle Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Middle Name"
              name="middle_name"
              onChange={handleInput}
              className="form-input rounded-0"
            />
            {errors.middle_name && <span className="text-red-500">{errors.middle_name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="last_name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              onChange={handleInput}
              className="form-input rounded-0"
            />
            {errors.last_name && <span className="text-red-500">{errors.last_name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-input rounded-0"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-input rounded-0"
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <button type="submit" className="bg-green-500 text-white rounded-full px-4 py-2 w-full mt-2">
            <strong>Sign Up</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/" className="border border-gray-400 bg-gray-100 text-black rounded-full px-4 py-2 w-full mt-2 block text-center">
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;