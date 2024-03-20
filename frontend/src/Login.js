import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  useEffect(() => {
    if (!errors.email && !errors.password) {
      axios.post('http://localhost:8081/login', { ...values })
        .then((res) => {
          if (res.data === "Success") {
            navigate('/home');
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [errors]);

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="bg-white p-3 rounded w-1/4">
        <h2 className="flex items-center justify-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
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
            <strong>Log in</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/signup" className="border border-gray-400 bg-gray-100 text-black rounded-full px-4 py-2 w-full mt-2 block text-center">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
