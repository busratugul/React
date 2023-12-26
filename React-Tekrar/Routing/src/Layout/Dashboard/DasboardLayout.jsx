import React from 'react'
import Menu from '../../components/Menu'
import { Outlet } from 'react-router-dom'
import './style.css'

function DasboardLayout() {
  return (
    <div>
        <Menu/>
        <div id='content'>
    <Outlet/>

    DASHBOARD
        </div>
    </div>
  )
}

export default DasboardLayout