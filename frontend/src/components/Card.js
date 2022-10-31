import React, {useState} from "react";
import '../styles/Components.css'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsPlusCircle, BsPlusSquareFill } from "react-icons/bs";
import music from '../static/music.gif'

function Card({text, user, id, onClick, modalOnClick, img, pause=false, audio=false, player=true}) {

  return (
    <div className="sbox" id={id} onClick={id=='add' ? onClick : () => {}}>
      <img src={img} />
      {id? <BsPlusCircle size={50} color="#9E9E9E" /> : <></>}
      {audio? <BsPlusSquareFill className="addpost" onClick={modalOnClick} />: <></>}
      <div className="player"  style={player? {}: {display: 'none'}}>
        <div className="column">
          <p>{text}</p>
          <p>{user}</p>
        </div>
        <div className="play">
          {pause? 
          <AiFillPauseCircle
            size={35}
            style={{ cursor: "pointer" }}
            color="#C5C5C5"
            onClick={onClick}
          />:
          <AiFillPlayCircle
            size={35}
            style={{ cursor: "pointer" }}
            color="#C5C5C5"
            onClick={onClick}
          />
          }
        </div>
      </div>

      {pause? 
      <div className="music-play">
        <img src={music} />
      </div>
      : 
      <></>
      }
    </div>
  );
}

export default Card;
