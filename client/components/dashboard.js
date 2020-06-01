import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/cfd8a9df-f5fb-46c7-b649-68e1941290e5">Go To Profile </Link>
      <Link to="/dashboard/main">Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
