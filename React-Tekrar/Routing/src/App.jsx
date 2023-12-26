import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Dashboard/Home'
import Users from './Pages/Dashboard/Users'
import Contact from './Pages/Dashboard/Contact'
import UsersDetails from './Pages/Dashboard/UsersDetails'
import Login from './Pages/Auth/Login'
import DasboardLayout from './Layout/Dashboard/DasboardLayout'
import AuthLayout from './Layout/Auth/AuthLayout'
import './App.css'
import Register from './Pages/Auth/Register'
import NotFound from './NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DasboardLayout />}>
            <Route index element={<Home />} />
       {/*  <Route path="users" element={<Users />} /> */}
            <Route path="users/:id" element={<UsersDetails />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
