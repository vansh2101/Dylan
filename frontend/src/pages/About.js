import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Promotional.css'
import about from '../static/about.png'
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='about'>
        <div className="dylan">
            <div className="heading">
            <h1 className='gradient'>ABOUT US</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
        </div>
        <div>
        <img src={about} className="line" />
        </div>
    </div>
    </>
  )
}

export default Homepage
