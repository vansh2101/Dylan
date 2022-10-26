import { Link } from 'react-router-dom'
import '../styles/Account.css'
import logo from '../static/logo.png';

const Login = () => {
  return (
    <>
    <main>
    <div className='main'>
      <Link to='/'><img src={logo} className='mylogo' /></Link>
        <div className="form">
            <h1>Login Now<span className='gradient'>.</span></h1>
            <p className='account-text'>Not a Member? <Link to='/register'>Sign Up</Link></p>
            <form action="">
                <input type="email" placeholder='Enter your email address'/>
                <input type="password" placeholder='Password'/>
                <a href='#'>Forgot Password?</a><br />
                <button className="account">Log in</button>
            </form>
        </div>          
        </div>
        </main>
        </>
  )
}

export default Login
