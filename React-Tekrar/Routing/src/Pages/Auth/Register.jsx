import React from 'react'

function Register() {
  return (
    <div>
        <h1>Kayıt Ol</h1>
        
        <label htmlFor="email"> Email </label>
        <input id='email' />

        <label htmlFor="password"> Şifre </label>
        <input id='password' />
    </div>
  )
}

export default Register