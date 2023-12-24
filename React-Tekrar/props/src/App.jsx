import React from 'react'
import Props from './Props'

function App() {
  const friends = [
    {
      id: 1,
      name: 'onur',
    },
    {
      id: 2,
      name: 'lili',
    },
    {
      id: 3,
      name: 'lulu',
    },
  ]
  return (
    <div>
      <Props
        name="Busra"
        surname="tugul"
        isLoggedIn={true}
        age={18}
        friends={friends}
        adres={{
          title: 'Kağıthane',
          zip: 4755,
        }}
      />
    </div>
  )
}

export default App
