import { Link } from 'react-router-dom'
import '../styles/Account.css'
import logo from '../static/logo.png';

const Register = () => {
  return (
    <main>
    <div className='main'>
      <Link to='/'><img src={logo} className='mylogo' /></Link>
        <div className="form">
            <h1>Create a new Account<span className='gradient'>.</span></h1>
            <p className='account-text'>Aleardy a Member? <Link to='/login'>Log in</Link></p>
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Enter your email address'/>
                <input type="password" placeholder='Password'/>
                <button className="account">Create Account</button>
            </form>
          </div>          
        </div>
        </main>
  )
}

export default Register
