import React from 'react'
import Card from '../UI/Card'
// import Card from './Card'
import ExpenseItem from './ExpenseItem'

import './Expenses.css'
const Expenses = ({items}) => {
  return (
    <Card className='expenses'>
    {items.map(expense=><ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  )
}

export default Expenses