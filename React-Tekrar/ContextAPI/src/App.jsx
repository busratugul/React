import React, { useContext } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import ThemeContext from './context/ThemeContext'
import Profile from './components/Profile'

function App() {
  const { theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={`App ${theme}`}>
      <Header />
      <hr />
      <Button>
        <h1>Merhaba</h1>
        <h4>Ben butonun childrenıyım</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          non facere sit odio inventore ut quasi earum voluptates distinctio
          vel?
        </p>
      </Button>
      <Profile/>
    </div>
  )
}

export default App
