import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/Content.css'
import Card from './Card'
function AdminContent() {
  return (
    <div className="content">
      <ContentHeader></ContentHeader>
      <Card />
    </div>
  )
}

export default AdminContent
