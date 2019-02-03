import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='jumbotron text-center'>
      <h1>To-Do List</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  )
}

const linkStyle = {
  margin: '16px',
  borderBottom: '1px solid'
}
