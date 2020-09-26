import React, { Component } from 'react';
import { ExpenseForm } from '../ExpenseForm/ExpenseForm';
import { AccountForm } from '../AccountForm/AccountForm';
import { CategoryForm } from '../CategoryForm/CategoryForm';
import { ExpenseContainer } from '../ExpenseContainer/ExpenseContainer';
import './App.scss';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { AccountContainer } from '../AccountContainer/AccountContainer'

export class App extends Component {
    constructor() {
      super();
      this.state = {  
        expenses: [
          {id: 1, amount: 500, date: '1/20/20', accountId: 2, categoryId: 3},
          {id: 2, amount: 130, date: '1/21/20', accountId: 1, categoryId: 2},
          {id: 3, amount: 280, date: '1/24/20', accountId: 3, categoryId:1 }
        ],
        accounts: [
          {id: 1, title: 'Bank of America', color: 'red', icon: '', type: 'bank account'},
          {id: 2, title: 'Envista', color: 'cyan', icon: '', type: 'credit'},
          {id: 3, title: 'US Bank', color: 'blue', icon: '', type: 'credit'}
        ],
        categories: [
          {id: 1, title: 'entertainment', color: 'green', icon: ''},
          {id: 2, title: 'groceries', color: 'yellow', icon: ''},
          {id: 3, title: 'mortgage', color: 'red', icon: ''}
        ]
      };
    }
  
    addExpense = (newExpense) => {
      this.setState({ expenses: [...this.state.expenses, newExpense]})
    }
    addAccount = (newAccount) => {
      this.setState({ accounts: [...this.state.accounts, newAccount]})
    }
    addCategory = (newCategory) => {
      this.setState({ categories: [...this.state.categories, newCategory]})
    }
    deleteExpense = id => {
      const filteredExpenses = this.state.expenses.filter(expense => expense.id !== id)
      this.setState({ expenses: filteredExpenses})
    }
    deleteAccount = id => {
      const filteredAccount = this.state.accounts.filter(account => account.id !== id)
      this.setState({ accounts: filteredAccount})
    }
    deleteCategory = id => {
      const filteredCategory = this.state.categories.filter(category => category.id !== id)
      console.log(filteredCategory)
      this.setState({ categories: filteredCategory})
    }
  
    render() {
      return (
        <div>
          <h1>Expense Tracker</h1>
          <ExpenseForm addExpense={this.addExpense}/> 
          <AccountForm addAccount={this.addAccount} />
          <CategoryForm addCategory={this.addCategory} />
          <ExpenseContainer expenses={this.state.expenses} deleteExpense={this.deleteExpense}/>
          <AccountContainer accounts={this.state.accounts} deleteAccount={this.deleteAccount}/>
          <CategoryContainer categories={this.state.categories} deleteCategory={this.deleteCategory}/>
        </div>
      )
    }
}

