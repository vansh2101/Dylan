import { Link } from 'react-router-dom'
import '../styles/Account.css'
const Register = () => {
  return (
    <>
    <div className='main'>
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
        </>
  )
}

export default Register
