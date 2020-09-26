import React from 'react';

export const Expense = ({ amount, date }) => {
  return (
    <article>
      <h2>{amount}</h2>
      <h3>{date}</h3>
    </article>
  )
}