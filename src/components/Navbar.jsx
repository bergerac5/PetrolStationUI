import React from 'react';
import {BiHome, BiBookAlt, BiUser, BiSolidReport, BiStats, BiTask, BiBook, BiLogOut} from 'react-icons/bi';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
//import UserService from './service/UserService';
function Navbar() {
    
    //const isAdmin = UserService.isAdmin();
  return (
    <div className='menu'>
      
      <div className="logo">
        <BiBookAlt  className="logo-icon"/>
        <h2>SP Station</h2>
      </div>
      { <div className="menu--list">
        <Link to='/' className="item">
            <BiHome  className="icon"/>
            DashBoard
        </Link>
        <Link to='/user' className="item">
            <BiUser  className="icon"/>
            Users
        </Link>
        <Link to='/inventory' className="item">
            <BiTask className="icon"/>
            Inventory
        </Link>
        <Link to='/pump' className="item">
            <BiStats className="logo-icon"/>
            Pump
        </Link>
        <Link to='/sales' className="item">
            <BiSolidReport className="icon"/>
            SalesTransaction
        </Link>
        <Link to='/transaction' className="item" >
            <BiBook className="icon"/>
            Transaction
        </Link>
        <Link to='/logout' className="item-log">
            <BiLogOut className="icon"/>
            Logout
        </Link>
                
      </div>}
    </div>
  )
}

export default Navbar
