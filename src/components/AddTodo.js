import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      <form className='input-group lg-3' onSubmit={this.addTodo}>
        <div className='input-group input-group-lg'>
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

AddTodo.prototypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
