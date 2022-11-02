import React from 'react'
import {RiInstagramFill, RiFacebookFill, RiTwitterFill, RiMailFill} from 'react-icons/ri'
import {FaDiscord} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <>
    <div className="max">
    <footer>
        <div className="newsletter">
            <div className="text">
                <h2>Sign in for the newsletter</h2>
                <p className='color'>Sign up to get the latest Dylan Experience and his new tracks in your inboxes. </p>
            </div>
            <div className="buttons">
                <input type="email" placeholder='Your email address'/>
                <button>Join Now</button>
            </div>
            <div className='flexbox'>
                <RiInstagramFill size={30} />
                <RiFacebookFill size={30} />
                <RiTwitterFill size={30} />
                <FaDiscord size={30} />
                <HiMail size={30} />
            </div>
        </div>
        <div className="links">
            <div className="homies">
                <div className="special">
                <h3>Home</h3>
                </div>
                <ul>
                    <li>About</li>
                    <li>Services we bring</li>
                    <li>Our process</li>
                    <li>Discography</li>
                    <li>Aayanily3k</li>
                </ul>
            </div>
            <div className="homies">
                <h3>My account</h3>
                <ul>
                    <li>My profile</li>
                    <li>My collections</li>
                    <li>My favorites</li>
                    <li>My settings</li>
                    <li>Recently added</li>
                </ul>
            </div>
            <div className="homies">
                <h3>Groovy</h3>
                <ul>
                    <li>My profile</li>
                    <li>Search</li>
                    <li>Explore</li>
                    <li>Settings</li>
                    <li>More</li>
                </ul>
            </div>
        </div>
</footer>
</div>
    </>
  )
}

export default Footer
