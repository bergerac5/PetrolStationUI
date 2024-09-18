import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from './service/UserService';

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userPhone: '',
    userAddress: '',
    username: '',
    userEmail: '',
    userRole: ''
  });

  useEffect(() => {
    fetchUserDataById(userId); // Pass the userId to fetchUserDataById
  }, [userId]); // Whenever there is a change in userId, run this

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      const { firstName, lastName, userPhone, userAddress, username, userEmail, userRole} = response.ourUsers;
      setUserData({ firstName, lastName, userPhone, userAddress, username, userEmail, userRole });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await UserService.updateUser(userId, userData);
      // Redirect to profile page or display a success message
      navigate("/transaction");
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Update User</h2>
      <form >
        <div className="form-group">
          <label>FirstName</label>
          <input
            type="text"
            name="name"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>LastName</label>
          <input
            type="text"
            name="name"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>UserPhone</label>
          <input
            type="text"
            name="UserPhone"
            value={userData.userPhone}
            onChange={handleInputChange}
          />
        </div>        
        <div className="form-group">
          <label>UserAddress</label>
          <input
            type="text"
            name="city"
            value={userData.userAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            name="city"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>UserEmail</label>
          <input
            type="text"
            name="city"
            value={userData.userEmail}
            onChange={handleInputChange}
          />
        </div>        
        <div className="form-group">
          <label>UserAddress</label>
          <input
            type="text"
            name="city"
            value={userData.userRole}
            onChange={handleInputChange}
          />
        </div>        
        <button onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
