import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
      <div id="logo">
        {/* <img src="/logo.png"/> */}
        <h1>SODA</h1>
      </div>
      <div id="nav">
        <h3 className = 'nav'>Home</h3>
        <h3 className = 'nav'>Products</h3>
        <h3 className = 'nav'>Partners</h3>
        <h3 className = 'nav'>Developer</h3>
      </div>
      <div id="info">
      </div>

    </div>
  )
}

export default Navbar