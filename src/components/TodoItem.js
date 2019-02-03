import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '6px',
      textAlign: 'center'
    }
  }
  render () {
    const { id, title, completed } = this.props.todo
    return (
      <div className='list-group-item'>
        <div className='d-flex justify-content-between align-items-center'>
          <input
            style={checkboxStyle}
            type='checkbox'
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={completed}
          />
          <h5 style={this.getStyle()}>{title}</h5>
          <button
            type='button'
            className='btn btn-danger btn-sm'
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            del
          </button>
        </div>
      </div>
    )
  }
}

TodoItem.prototypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const checkboxStyle = {
  margin: '12px',
  padding: '0'
}

const btnStyle = {
  textAlign: 'right'
}

export default TodoItem
