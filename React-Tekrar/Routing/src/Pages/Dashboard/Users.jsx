import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error'))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`} state={user}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
