import React from 'react'
import {BiEdit} from 'react-icons/bi'
function ProfileHeader() {
  return (
    <div className='profileHeader'>
        <h2 className="headerTitle">Profile</h2>
        <div className="edit">
            <BiEdit className='icon'/>
        </div>
    </div>
  )
}

export default ProfileHeader