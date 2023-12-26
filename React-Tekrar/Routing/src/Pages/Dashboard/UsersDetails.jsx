import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

function UsersDetails() {
  // const params = useParams()
  //console.log(params.id)
  const location = useLocation()
  console.log(location)
  const { id } = useParams()
  const [user, setUser] = useState(location.state)

  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com${location.pathname}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.log('error'))
    }
  }, [id, user])

  return (
    <div>
      <h1>Kullanıcı Detayları</h1>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) + 1}`}> Sonraki Kullanıcı </Link>
    </div>
  )
}

export default UsersDetails
