import { Link } from 'react-router-dom'
import '../styles/Account.css'
import bg from '../static/account-bg.png'

const Login = () => {
  return (
    <>
    <div className='main'>
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
        </>
  )
}

export default Login
