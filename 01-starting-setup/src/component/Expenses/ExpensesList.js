import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpenseList = (props) => {
    if (props.list.length === 0) {
        return <h2 className="expenses-list__fallback">
            Found No Expenses
        </h2>
    }

    return (
        <ul className="expenses-list">
            {props.list.map(expense => <ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
}

export default ExpenseList