import '../styles/Account.css'
import bg from '../static/account-bg.png'
const Register = () => {
  return (
    <>
    <div className='main'>
        <div className="form">
            <h1>Create an Account.</h1>
            <p className='account-text'>Aleardy a Member? <label>Log in</label></p>
            <div className="form">
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Enter your email address'/>
                <input type="password" placeholder='Password'/>
                <button className="account">Create Account</button>
            </form>
            </div>
        </div>          
        </div>
        </>
  )
}

export default Register
