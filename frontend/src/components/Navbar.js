import { Link } from 'react-router-dom'
import '../styles/Components.css'
import logo from '../static/logo.png';
import pfp from '../static/pfp.png';
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = ({loggedIn=false}) => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Link to='/'><img src={logo} /></Link>
        </div>
        <ul style={loggedIn? {'width': '80%'} : {}}>
          <li><a href='/#about'>About us</a></li>
          <li><a href='/#service'>Our Services</a></li>
          <li><a href='/#process'>Our Process</a></li>
          <li><a href='/#mixes'>{loggedIn? 'Dylan\'s Mix': 'My Mixes'}</a></li>
          {!loggedIn?
          <Link to='/login'><button className='communityButton'>Community</button></Link>
          :
          <>
          <div className='searchbar'>
            <AiOutlineSearch size={25} color='#848484' id='search'/>
            <input type='text' placeholder='Search...' className='search' />
          </div>
          <div className='pfp'>
            <img src={pfp} />
          </div>
          </>
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
