import React from "react";
import '../styles/Components.css'
import { AiFillPlayCircle } from "react-icons/ai";

function Card() {
  return (
    <div className="sbox">
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
  );
}

export default Card;
