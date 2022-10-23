import '../styles/Account.css'
import bg from '../static/account-bg.png'
const Register = () => {
  return (
    <>
    <div className='main'>
        <div className="form">
            <h1>Login Now.</h1>
            <p className='account-text'>Not a Member? <label>Log in</label></p>
            <div className="form">
            <form action="">
                <input type="email" placeholder='Enter your email address'/>
                <input type="password" placeholder='Password'/>
                <button className="account">Log in</button>
            </form>
            </div>
        </div>          
        </div>
        </>
  )
}

export default Register
