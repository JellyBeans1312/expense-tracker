import React, { Component } from 'react';

export class CategoryForm extends Component {
  constructor() {
    super();
    this.state ={
      title: '',
      color: '',
      icon: '',
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      id: Date.now(),
      ...this.state
    }
    this.props.addCategory(newCategory)
    this.setState({ title: '', color: '', icon: ''})
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
          <button onClick={this.submitCategory}>Add Category</button>
        </form>
    )
  }
}