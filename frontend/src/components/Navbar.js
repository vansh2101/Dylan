import '../styles/Components.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          dylan
        </div>
        <ul>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>My mixes</a></li>
          <li><a href='#'>The experience</a></li>
          <li><a href='#'>Contacts</a></li>
          <button>Community</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
