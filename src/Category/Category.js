import React from 'react';

export const Category = ({ title, color }) => {
  return (
    <article color={color}>
      <h2>{title}</h2>
    </article>
  )
}