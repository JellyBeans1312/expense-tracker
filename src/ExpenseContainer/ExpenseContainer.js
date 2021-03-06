import React from 'react';
import { Expense } from '../Expense/Expense'
export const ExpenseContainer = ({ expenses, deleteExpense }) => {
  const expense = expenses.map(expense => {
    return <Expense amount={expense.amount} date={expense.date} accountId={expense.accountId} categoryId={expense.id} id={expense.id} key={expense.id} deleteExpense={deleteExpense}/>
  })
  return expense
}