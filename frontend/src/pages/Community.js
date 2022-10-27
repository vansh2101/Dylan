import logo from '../static/logo.png'
import '../styles/Community.css'
import pfp from '../static/pfp.png'
import { AiFillPlayCircle } from 'react-icons/ai';
const Community = () => {
  return (
    <>
    <div className="flexbox">
        <div className="navbar">
            <div className="logo"><img src={logo} alt="" />
            </div>
            <div className='ul'>
            <li><a href='#about'>About us</a></li>
          <li><a href='#'>Our Services</a></li>
          <li><a href='#process'>Our Process</a></li>
          <li><a href='#mixes'>My Mixes</a></li>
            </div>
        </div>
        <div className="profile">
            <div className="searchbar">
                <input type="text" placeholder='Search'/>
            </div>
            <div className="pfp">
                <img src={pfp} alt="" />
            </div>
        </div>
    </div>
    <div className="grid">
      <div className="sbox4">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
      <div className="grid2">
        <h1>Create tracks with <span className='gradient'>Groovy</span></h1>
        <p className='color'>Discover the best beats,create them, upload them!</p>
        <button>Launch Groovy</button>
      </div>
      <div className="sbox4">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
    </div>
    <div className="boxnew">
          <div className="sbox4 width">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
          <div className="sbox4 width">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
          <div className="sbox4 width">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
          <div className="sbox4 width">
            <div className='player'>
            <div className="column">
              <p>Demons Protected By angels </p>
              <p className='color'>Nav, Dylan</p>
            </div>
            <div className="play">
              <AiFillPlayCircle size={40}/>
            </div>   
                     </div>

          </div>
        </div>
    </>
  )
}

export default Community
