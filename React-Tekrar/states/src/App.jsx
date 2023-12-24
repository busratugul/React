import React, { useState } from 'react'
import InputState from './inputState'

function App() {
  const [name, setName] = useState('Busra!')
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['Lili', 'Lulu'])
  const [address, setAddress] = useState({
    title: 'Kağıthane',
    zip: 54543,
  })

  //console.log(name, age)
  return (
    <div>
      <h1> Merhaba {name} </h1>
      <button onClick={() => setName('Onur!')}>Click Name</button>

      <h2>{age}</h2>
      <button onClick={() => setAge(28)}>Click Age</button>

      <hr />
      <h2>Friends</h2>

      {friends.map((friend, idx) => (
        <div key={idx}> {friend} </div>
      ))}
      <button onClick={() => setFriends(['Onur', ...friends])}>
        Add New Friend
      </button>

      <hr />
      <h2>Address</h2>
      <div>
        {address.title}/{address.zip}
      </div>
      <button
        onClick={() => setAddress({...address, title: 'Ankara'})}
      >Add New Address</button>
      < InputState/>
    </div>

  )
}

export default App
