import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render () {
    const { id, title, completed } = this.props.todo
    return (
      <div className='list-group-item'>
        <div className='d-flex justify-content-between mb-3'>
          <input
            style={checkboxStyle}
            type='checkbox'
            onChange={this.props.toggleComplete.bind(this, id)}
            checked={completed}
          />
          <h4 style={this.getStyle()}>{title}</h4>
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
  todo: PropTypes.object.isRequired
}

const checkboxStyle = {
  margin: '12px',
  padding: '0'
}

const btnStyle = {
  textAlign: 'right'
}

export default TodoItem
