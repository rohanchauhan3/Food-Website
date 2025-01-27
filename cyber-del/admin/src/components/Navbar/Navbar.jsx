import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <button onClick={() => setShowLogin(true)}>log-in</button>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
