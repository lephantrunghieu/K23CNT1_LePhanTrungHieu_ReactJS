import React from 'react'
import {Link} from 'react-router-dom'
import LpthHome from './LpthHome'

export default function LpthNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='/lpth-list-user' >List User</Link> |
        <Link to='/lpth-create-user' >Create User</Link>
    </nav>
  )
}
