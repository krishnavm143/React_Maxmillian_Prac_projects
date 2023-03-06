import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
// import Card from './Card'


import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpenseList from './ExpensesList'
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear)
    console.log(selectedyear)
  }
  const filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === filteredYear)
  // let expenseContent = <p>No Expense Found</p>

  
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* {expenseContent} */}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList list={filteredExpenses}/>
    </Card>
  )
}

export default Expenses