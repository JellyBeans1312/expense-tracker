import React from 'react';
import { Account } from '../Account/Account'

export const AccountContainer = ({ accounts, deleteAccount }) => {
  const account = accounts.map(account => {
    return <Account title={account.title} color={account.date} icon={account.icon} key={account.id} id={account.id} deleteAccount={deleteAccount} />
  })
  return account
}