import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to='/'> Home </NavLink>
        <Link to='/aboutus'> About </Link>
        <Link to={'/history'}>History</Link>
    </nav>
  )
}

export default Navbar