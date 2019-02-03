import React, { Component } from 'react'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Go to sleep',
        completed: true
      },
      {
        id: 2,
        title: 'Have dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Drink tea',
        completed: false
      }
    ]
  }
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(e => {
        if (e.id === id) {
          e.completed = !e.completed
        }
        return e
      })
    })
  }
  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(e => e.id !== id)
    })
  }

  addTodo = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
