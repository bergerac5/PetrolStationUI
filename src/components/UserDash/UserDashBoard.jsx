import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './Profile';

import './style/DashBoard.css';
//import UserService from '../service/UserService';
import Transactions from './Transactions';
import Logouts from './Logouts';
import LoginRegister from '../LoginRegister';
function UserDashBoard() {
    // const userOnly = UserService.userOnly();
  return (
      <Router>
           <div className='dashBoard'>
              <Navbar />
              <div className="Admindash--content">
                  <Routes>
                      <Route path='/Usertransaction' element={<Transactions />} />
                  </Routes>
                  <Routes>
                      <Route path='/Userlogout' element={<Logouts />} />
                  </Routes>
                 
                  <Profile></Profile>
              </div>
          </div>
      </Router>
      
    )
}

export default UserDashBoard
