import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Promotional.css'
import records from '../static/records.jpg'
import records2 from '../static/records2.png'
import line from '../static/line.png'
import about from '../static/about.png'
import headphones from '../static/headphones.png'
import card from '../static/card.png'
import party from '../static/party.png'
import logo from '../static/logo.png'
import { AiFillPlayCircle } from 'react-icons/ai';
const Homepage = () => {
  return (
    <main>
    <Navbar/>
    <div className='home' id='home'>
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

        <img src={logo} id='logo' />
    </div>

    <img src={line} className="line" id='about' />

    <div className='about'>
        <div className="dylan abt">
            <h1><span className='gradient'>ABOUT US</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
        </div>
        <div>
          <img src={about} className="line" />
        </div>
    </div>

    <img src={line} className="line" id='process' />

    <div className="process">
    <div className="ourprocess">
            <h1><span className='gradient'>OUR PROCESS</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={headphones} alt="" />
            <p>Choose a service</p>
          </div>
          <div className="card">
            <img src={card} alt="" />
            <p>Make a payment</p>
          </div>
          <div className="card">
            <img src={[party]} alt="" />
            <p>Enjoy your event</p>
          </div>
        </div>
    </div>

    <img src={line} className="line" id='mixes' />

    <div className="mixes">
    <div className="mymixes">
            <h1><span className='gradient'>My mixes</span></h1>
        </div>
        <div className="box">
          <div className="sbox">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
          <div className="sbox2">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
          <div className="sbox3">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
        </div>
    </div>
    </main>
  )
}

export default Homepage
