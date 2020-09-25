import React, { Component } from 'react';

export class AccountForm extends Component {
  constructor() {
    super();
    this.state ={
      title: '',
      color: '',
      icon: '',
      type: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitAccount = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Date.now(),
      ...this.state
    }
    this.props.addAccount(newAccount)
    this.setState({ title: '', color: '', icon: '', type: ''})
  }

  render() {
    return (
        <form>
          <input 
            type="text" 
            placeholder='Title' 
            value={this.state.title} 
            onChange={this.handleChange}
            name='title'
            />
          <input 
            type="color" 
            placeholder='Color' 
            value={this.state.color} 
            onChange={this.handleChange} 
            name='color'
            />
            <input 
            type="text" 
            placeholder='Type of account' 
            value={this.state.type} 
            onChange={this.handleChange}
            name='type'
            />
          <button onClick={this.submitAccount}>Add Account</button>
        </form>
    )
  }
}