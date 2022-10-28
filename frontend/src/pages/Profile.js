import React from 'react';
import Menu from "../components/Menu";
import '../styles/Profile.css';
import profile from '../static/profile.png'
import { MdModeEdit } from 'react-icons/md';
import { AiFillPlayCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
function Profile() {
  return (
    <>
        <div className='split'>
            <Menu highlight={'profile'} />

            <div className='container'>
            <div className="profile">
          <div className="picture">
            <img src={profile} alt="" />
          </div>
          <div className="information">
            <div className="button">
            <h1>NsheChadha</h1>
            <button className='edit'><MdModeEdit size={15}/> Edit Profile</button>
            </div>
            <div className="follow">
              <p className='color'>02 audios</p>
              <p className='color'>69 followers</p>
              <p className='color'>20 following</p>
            </div>
          </div>
        </div>
        <div className="recently">
          <h2>Recently added</h2>
          <div className="flexbox">
          <div className="sboxnew">
      <div className="player">
        <div className="column">
          <p>Demons Protected By angels </p>
          <p>Nav, Dylan</p>
        </div>
        <div className="play">
          <AiFillPlayCircle
            size={35}
            style={{ cursor: "pointer" }}
            color="#C5C5C5"
          />
        </div>
      </div>
    </div>
    <div className="sboxnew">
      <div className="player">
        <div className="column">
          <p>Demons Protected By angels </p>
          <p>Nav, Dylan</p>
        </div>
        <div className="play">
          <AiFillPlayCircle
            size={35}
            style={{ cursor: "pointer" }}
            color="#C5C5C5"
          />
        </div>
      </div>
    </div>
    <div className="sboxnew">
      <div className="player">
        <div className="column">
          <p>Demons Protected By angels </p>
          <p>Nav, Dylan</p>
        </div>
        <div className="play">
          <AiFillPlayCircle
            size={35}
            style={{ cursor: "pointer" }}
            color="#C5C5C5"
          />
        </div>
      </div>
    </div>
    <div className="add">
      <BsPlusCircle size={50} color="#9E9E9E"/>
    </div>
      </div>
        </div>
            </div>
        </div>
       
    </>
  )
}

export default Profile