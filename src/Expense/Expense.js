import React from 'react';

export const Expense = ({ amount, date, deleteExpense, id }) => {
  return (
    <article>
      <h2 contentEditable={true}>{amount}</h2>
      <h3 contentEditable={true}>{date}</h3>
      <button onClick={() => deleteExpense(id)}>Delete</button>
    </article>
  )
}