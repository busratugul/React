import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function History() {
  return (
    <>
    <div>History</div>
    <ul>
        <li><Link to={"company"}>Our Companies</Link>
        </li>
        <li><Link to={"team"}>Team</Link></li>
    </ul>
    <Outlet/>
    </>
  )
}

export default History