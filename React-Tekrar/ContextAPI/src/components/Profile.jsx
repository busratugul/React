import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user, setUser } = useContext(UserContext)
  const [button, setButton] = useState('Kişiyi Göster')
  //console.log(data)

  const handleLogin = () => {
    if (button === 'Kişiyi Göster') {
      setTimeout(() => {
        setUser({
          id: 1,
          username: 'bsrtgl',
          bio: 'lorem ipsum dolor',
        })
      }, 1500)
      setButton('Kişiyi Gizle')
    } else {
      setButton('Kişiyi Göster')
      setUser()
    }
  }
  return (
    <div>
      <h1>Profile</h1>
      <code>{JSON.stringify(user)}</code>
      <button onClick={handleLogin}>{button}</button>
    </div>
  )
}

export default Profile
