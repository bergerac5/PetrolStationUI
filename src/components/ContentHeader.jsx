import React from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi'

function ContentHeader() {
  return (
    <div className="contentHeader">
      <h1 className="headerTittle">Admin DashBoard</h1>
      <div className="headerActivity">
        <div className="searchBox">
            <input type="text" placeholder="Search anything here..."/>
            <BiSearch className='icon'></BiSearch>
        </div>
        <div className="notify">
            <BiNotification className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
