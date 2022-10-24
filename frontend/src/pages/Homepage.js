import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Promotional.css'
import records from '../static/records.jpg'
import records2 from '../static/records2.png'
import line from '../static/line.png'
import about from '../static/about.png'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <div className="dylan">
            <div className="heading">
            <h1>The Dylan</h1>
            <h1><span className='gradient big'>Experience.</span></h1>
            </div>
            <div className='flexi'>
            <h3>Affiliated by:</h3>
            <img src={records} className="img1" />
            <img src={records2} className="img2" />
            </div>
            <br />
            <p>A once-in-a-fucking-lifetime experience for all aspiring billionaires to come and start a revolution. </p>
            <br />
            <p className='italic'>“Three days of partying, sucking, and fucking on a plot of land so far out, Nevada barely wants it.”</p>
        </div>
    </div>

    <img src={line} className="line" />

    <div className='about'>
        <div className="dylan abt">
            <h1><span className='gradient'>ABOUT US</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
        </div>
        <div>
          <img src={about} className="line" />
        </div>
    </div>

    <img src={line} className="line" />
    </>
  )
}

export default Homepage
