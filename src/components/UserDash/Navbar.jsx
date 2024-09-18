import React from 'react'
import { Link } from 'react-router-dom';
import {BiHome, BiBookAlt, BiBook, BiLogOut} from 'react-icons/bi';
import'./style/Navbar.css'
// import UserService from '../service/UserService';
function Navbar() {
  //const isUser = UserService.isUser()
  return (
    <div className='menu'>
      
      <div className="logo">
        <BiBookAlt  className="logo-icon"/>
        <h2>SP Station</h2>
      </div>
       <div className="menu--list">
        <Link to='/' className="item">
            <BiHome  className="icon"/>
            DashBoard
        </Link>
       
        <Link to='/Usertransaction' className="item" >
            <BiBook className="icon"/>
            Transaction
        </Link>
        <Link to='/Userlogout' className="item-log">
            <BiLogOut className="icon"/>
            Logout
        </Link>
                
      </div>
    </div>
  )
}

export default Navbar
