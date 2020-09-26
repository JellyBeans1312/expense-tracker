import React from 'react';

export const Account = ({ title, color, id, deleteAccount }) => {
  return (
    <article>
      <h2 contentEditable={true}>{title}</h2>
      <button onClick={() => deleteAccount(id)}>Delete Account</button>
    </article>
  )
}