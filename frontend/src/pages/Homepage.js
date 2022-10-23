import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Promotional.css'
import records from '../static/records.jpg'
import records2 from '../static/records2.png'
import line from '../static/line.png'
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <div className="dylan">
            <div className="heading">
            <h1>The Dylan</h1>
            <h1 className='gradient'>Experience.</h1>
            </div>
            <div className='flexi'>
            <h3>Affiliated by:</h3>
            <img src={records} className="img1" />
            <img src={records2} className="img2" />
            </div>
            <p>A once-in-a-fucking-lifetime experience for all aspiring billionaires to come and start a revolution. </p>
            <p className='italic'>“Three days of partying, sucking, and fucking on a plot of land so far out, Nevada barely wants it.”</p>
        </div>
        <img src={line} className="line" />
    </div>
    </>
  )
}

export default Homepage
