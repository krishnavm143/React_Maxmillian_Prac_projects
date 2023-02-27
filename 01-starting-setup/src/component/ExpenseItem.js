import React from 'react'
import './ExpenseItem.css'
const ExpenseItem = () => {
  const expenseDate = new Date(2021, 10, 1)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 296.4
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2 className=''>{expenseTitle}</h2>
        <div className='expense-item__price'>Rs{expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem