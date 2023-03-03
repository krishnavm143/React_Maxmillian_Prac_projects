import React, { useState } from 'react'
import Card from '../UI/Card'
// import Card from './Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem = ({ title, amount, date }) => {
  const [titleName, setTitleName] = useState(title)
  const clickHandler = () => {
    setTitleName('updated!')
    console.log('updated')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titleName}</h2>
        <div className='expense-item__price'>₹ {amount}</div>
        <button onClick={clickHandler}>Submit</button>
      </div>
    </Card>
  )
}

export default ExpenseItem