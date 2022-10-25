import { Link } from 'react-router-dom'
import '../styles/Components.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          dylan
        </div>
        <ul>
          <li><a href='#about'>About us</a></li>
          <li><a href='#'>My mixes</a></li>
          <li><a href='#'>The experience</a></li>
          <li><a href='#'>Contacts</a></li>
          <Link to='/login'><button>Community</button></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
