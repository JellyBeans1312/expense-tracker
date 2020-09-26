import React from 'react';
import { Account } from '../Account/Account'

export const AccountContainer = ({ accounts }) => {
  const account = accounts.map(account => {
    return <Account title={account.title} color={account.date} icon={account.icon} key={account.id} />
  })
  return account
}