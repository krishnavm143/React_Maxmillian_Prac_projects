import React from 'react'
import Card from '../UI/Card'
// import Card from './Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem = ({ title, amount, date }) => {

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2 className=''>{title}</h2>
        <div className='expense-item__price'>₹ {amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem