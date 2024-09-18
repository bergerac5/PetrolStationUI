import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import './style/Profile.css'
import ProfileHeader from './ProfileHeader'
function Profile() {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className="userProfile">
        <div className="userDetail">
          <BiUserCircle className='proflePicture'/>
          <div className="userInfo">
            <div className="info">
              <h3>User Id:</h3>
              <h3>User Name:</h3>
              <h3>User Role:</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
