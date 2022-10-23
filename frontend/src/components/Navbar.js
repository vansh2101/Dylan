import {Route , Routes} from 'react-router-dom'
import '../styles/Components.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          dylan
        </div>
        <ul>
          <li>About us</li>
          <li>My mixes</li>
          <li>The experience</li>
          <li>Contacts</li>
          <button>Community</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
