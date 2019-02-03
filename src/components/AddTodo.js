import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  addTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
  render () {
    return (
      <form className='form-inline' onSubmit={this.addTodo}>
        <div className='input-group mb-2 mr-sm-2'>
          <input
            type='text'
            className='form-control'
            placeholder='Add todo...'
            name='title'
            value={this.state.title}
            onChange={this.onChange}
          />
          <div className='input-group-prepend'>
            <input type='submit' value='add' className='btn btn-primary' />
          </div>
        </div>
      </form>
    )
  }
}

export default AddTodo
