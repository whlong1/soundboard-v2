import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <h1>soun<span className="redOverlay">db</span>oard</h1>
      </Link>
    </header>
  )
}

export default Nav