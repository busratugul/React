import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      /* .then((data) => {
        setUsers(data)
        setIsLoading(false)
      }) */
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts/5')
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, [show])

  return (
    <div>
      <h1>USERS</h1>
      {isLoading && <div>...Loading</div>}
      {users.map((user, idx) => (
        <div key={idx}> {`Name : ${user.name}`}</div>
      ))}

      <button onClick={() => setShow(!show)}>Show Posts </button>
      {show && <p> {posts.body} </p>}
    </div>
  )
}

export default Users
