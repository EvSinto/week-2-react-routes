import React from 'react'

// import Head from './head'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Link to="/dashboard">Go Ro Root </Link>
      <Link to="/dashboard/main">Go Ro Main </Link>
      <div id="title">Profile</div>
      <div id="username">{user}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
