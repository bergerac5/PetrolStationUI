import React from 'react'
import { BiSolidReport, BiTask, BiUserCheck } from 'react-icons/bi'

const courses =[
    {
        title: 'Users',
        icon: <BiUserCheck />,
        amount: '10,000,000'
    },
    {
        title: 'Sales',
        icon: <BiSolidReport />,
        amount: '10,000,000,000'
    },
    {
      title: 'Transaction',
      icon: <BiTask />,
      amount: '15,000,000,000'  
    }
];
function Card() {
  return (
    <div className='cardContainer'>
      {
        courses.map((item) => (
            <div className="card">
                <div className="cardCover">{item.icon}</div>
                <div className="cardTitle">
                    <h2>{item.title}</h2>
                    <p>{item.amount}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Card
