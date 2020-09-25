import React, { Component } from 'react';

export class ExpenseForm extends Component {
  constructor() {
    super()
    this.state ={
      amount: '',
      date: '',
      accountId: '',
      categoryId: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...this.state
    }
    this.props.addExpense(newExpense)
    this.setState({ amount: '', date: '', accountId: '', categoryId: ''})
  }

  render() {
    return (
        <form>
          <input 
            type="text" 
            placeholder='Amount' 
            value={this.state.amount} 
            onChange={this.handleChange}
            name='amount'
            />
          <input 
            type="date" 
            placeholder='Date' 
            value={this.state.date} 
            onChange={this.handleChange} 
            name='date'
            />
          <button onClick={this.submitExpense}>Add Expense</button>
        </form>
    )
  }
}