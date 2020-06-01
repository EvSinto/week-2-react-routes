import React from 'react'

// import Head from './head'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/cfd8a9df-f5fb-46c7-b649-68e1941290e5">Go To Profile </Link>
      <Link to="/dashboard">Go To Root </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
