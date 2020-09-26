import React from 'react';

export const Category = ({ title, color, deleteCategory, id}) => {
  return (
    <article color={color}>
      <h2>{title}</h2>
      <button onClick={() => deleteCategory(id)}>Delete</button>
    </article>
  )
}