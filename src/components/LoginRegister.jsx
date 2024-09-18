import React, { useState } from "react";
import "../styles/LoginRegister.css";
import { FaLock, FaUser, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiUser2Fill } from "react-icons/ri";
import UserService from "./service/UserService";
//import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const [action, setAction] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({});
 

  const registerLink = () => {
    setAction('');
  };

  const loginLink = () => {
    setAction('active');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await UserService.login(email, password);
      if (userData.token) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('userRole', userData.userRole);
        // if (userData.token && userData.userRole === 'ADMIN') {
        //   navigate('/adminDash');
        // } else {
        //   navigate('/userDash');
        // }
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred during login.');
      setTimeout(() => {
        setError('');
      }, 500);
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    userPhone: '',
    userAddress: '',
    userPassword: '',
    username: '',
    userRole: 'USER'
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.userEmail) errors.userEmail = 'Email is required';
    if (!formData.userPhone) errors.userPhone = 'Phone number is required';
    if (!formData.userAddress) errors.userAddress = 'Address is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.userPassword) errors.userPassword = 'Password is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const token = localStorage.getItem('token');
      await UserService.register(formData, token);
      setFormData({
        firstName: '',
        lastName: '',
        userEmail: '',
        userPhone: '',
        userAddress: '',
        userPassword: '',
        username: '',
        userRole: 'USER'
      });
      alert('Registration successful!');
    } catch (error) {
      console.log(error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className={`Wrapper ${action}`}>
      <div className="form-box login">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          {error && <span className="error-message">{error}</span>}
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <FaUser className="icon" />
            {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <FaUser className="icon" />
            {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
          </div>
          <div className="input-box">
            <input
              type="email"
              name="userEmail"
              placeholder="Email"
              value={formData.userEmail}
              onChange={handleInputChange}
              required
            />
            <MdOutlineEmail className="icon" />
            {formErrors.userEmail && <span className="error-message">{formErrors.userEmail}</span>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="userPhone"
              placeholder="Phone Number"
              value={formData.userPhone}
              onChange={handleInputChange}
              required
            />
            <FaPhone className="icon" />
            {formErrors.userPhone && <span className="error-message">{formErrors.userPhone}</span>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="userAddress"
              placeholder="Address"
              value={formData.userAddress}
              onChange={handleInputChange}
              required
            />
            <RiUser2Fill className="icon" />
            {formErrors.userAddress && <span className="error-message">{formErrors.userAddress}</span>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <RiUser2Fill className="icon" />
            {formErrors.username && <span className="error-message">{formErrors.username}</span>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="userPassword"
              placeholder="Password"
              value={formData.userPassword}
              onChange={handleInputChange}
              required
            />
            <FaLock className="icon" />
            {formErrors.userPassword && <span className="error-message">{formErrors.userPassword}</span>}
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <span className="error-message">{error}</span>}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdOutlineEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?
              <a href="" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
