import React from 'react';
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiFillCompass,
    AiFillSetting,
    AiOutlineUser,
  } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import {FiLogOut} from 'react-icons/fi'
import logo from "../static/logo.png";
import { Link } from "react-router-dom";


function Menu({highlight}) {

  const logout = () => {
    localStorage.removeItem('user')
    window.location = '/'
  }

  return (
    <div className="menu">
          <Link to="/">
            <img src={logo} />
          </Link>

          <ul>
            <h3>Menu</h3>

            <Link to="/community">
              <li>
                <AiOutlineHome size={20} />
                <span>Home</span>
              </li>
            </Link>

            <Link to="/groovy" style={highlight=='groovy'? {opacity: 1} : {}}>
              <li>
                <BsDisc size={18} />
                <span>Groovy</span>
              </li>
            </Link>

            <Link to="/community">
              <li>
                <AiOutlineSearch size={20} />
                <span>Search</span>
              </li>
            </Link>

            <Link to="/community">
              <li>
                <AiFillCompass size={20} />
                <span>Explore</span>
              </li>
            </Link>

            {/* <Link to="/community">
              <li>
                <AiFillCompass size={20} />
                <span>Explore</span>
              </li>
            </Link> */}

            <hr />

            <Link to="/community">
              <li>
                <AiFillSetting size={20} />
                <span>Settings</span>
              </li>
            </Link>
            <Link to="/profile" style={highlight=='profile'? {opacity: 1} : {}}>
              <li>
                <AiOutlineUser size={20} />
                <span>Profile</span>
              </li>
            </Link>

            <Link to="" style={{color: '#CB303B', opacity: 1, position: 'absolute', bottom: 10, left: 47}} onClick={logout}>
              <li>
                <FiLogOut size={32} />
                <span>Logout</span>
              </li>
            </Link>
          </ul>
        </div>
  )
}

export default Menu