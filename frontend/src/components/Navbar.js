import { Link } from 'react-router-dom'
import '../styles/Components.css'
import logo from '../static/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src={logo} />
        </div>
        <ul>
          <li><a href='#about'>About us</a></li>
          <li><a href='#'>Our Services</a></li>
          <li><a href='#process'>Our Process</a></li>
          <li><a href='#mixes'>My Mixes</a></li>
          <Link to='/login'><button>Community</button></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
