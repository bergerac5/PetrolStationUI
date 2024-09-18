import React from 'react'
import AdminContent from './AdminContent'
import Profile from './Profile'
import Navbar from './Navbar'
import '../styles/NavBar.css'
import '../styles/DashBoard.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import User from './User';
import Inventory from './Inventory';
import Sales from './Sales'
import Transaction from './Transaction'
import Logout from './Logout'
import Pumps from './Pumps'
import UpdateUser from './UpdateUser'
import CreateInv from './CreateInv'
import UpdateInv from './UpdateInv'
//import UserService from './service/UserService'

function AdminDashBoard() {
  //const isAdminOnly = UserService.adminOnly;
  return (
    <Router>
      <div className='dashBoard'>
        <Navbar />

        <div className="Admindash--content">
          <Routes>
            <Route path='/' element={<AdminContent />}> </Route>
            <Route path='/user' element={<User />}> </Route>
            <Route path='/inventory' element={<Inventory />}> </Route>
            <Route path='/pump' element={<Pumps />}> </Route>
            <Route path='/sales' element={<Sales />}> </Route>
            <Route path='/transaction' element={<Transaction />}> </Route>
            <Route path='/logout' element={<Logout />}> </Route>
            <Route path='/update-user/:userId' element={<UpdateUser />}> </Route>
            <Route path='/createInventory' element={<CreateInv/> }/>
            <Route path='/updateInv/:fuelId' element={<UpdateInv /> }/>
          </Routes>
          {<Profile></Profile>}
        </div>


      </div>
    </Router>

    
  )
}

export default AdminDashBoard
