import React, {useState} from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../styles/Promotional.css";
import records from "../static/records.jpg";
import records2 from "../static/records2.png";
import line from "../static/line.png";
import about from "../static/about.png";
import headphones from "../static/headphones.png";
import card from "../static/card.png";
import party from "../static/party.png";
import logo from "../static/logo.png";
import service1 from "../static/service1.png";
import service2 from "../static/service2.png";
import service3 from "../static/service3.png";
import { AiFillPlayCircle, AiOutlineRight } from "react-icons/ai";

const Homepage = () => {

  const [start, setStart] = useState([-1, false])

  const play = (id) => {
    if(!start[1]){
      document.getElementById(id).play()
      setStart([id,true])
    }
    else{
      document.getElementById(id).pause()
      setStart([-1, false])
    }
  }

  return (
    <main>
      <Navbar />
      <div className="home" id="home">
        <div className="dylan">
          <div className="heading">
            <h1>The Dylan</h1>
            <h1>
              <span className="gradient big">Experience.</span>
            </h1>
          </div>
          <div className="flexi">
            <h3>Affiliated by:</h3>
            <img src={records} className="img1" />
            <img src={records2} className="img2" />
          </div>
          <br />
          <p>
            A once-in-a-fucking-lifetime experience for all aspiring
            billionaires to come and start a revolution.{" "}
          </p>
          <br />
          <p className="italic">
            “Three days of partying, sucking, and fucking on a plot of land so
            far out, Nevada barely wants it.”
          </p>
        </div>

        <img src={logo} id="logo" />
      </div>

      <img src={line} className="line" id="about" />

      <div className="about">
        <div className="dylan abt">
          <h1>
            <span className="gradient">ABOUT US</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui{" "}
          </p>
        </div>
        <div>
          <img src={about} className="line" />
        </div>
      </div>

      <img src={line} className="line" id="service" />

      <div className="services">
        <div className="ourprocess">
          <h1>
            <span className="gradient">Services we Bring</span>
          </h1>

          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="service-container">
          <div className="service">
            <img src={service1} />
            <AiOutlineRight
              style={{ position: "absolute", top: "7%", right: "7%" }}
              size={30}
            />
          </div>

          <div className="service">
            <img src={service2} />
            <AiOutlineRight
              style={{ position: "absolute", top: "7%", right: "7%" }}
              size={30}
            />
          </div>

          <div className="service">
            <img src={service3} />
            <AiOutlineRight
              style={{ position: "absolute", top: "7%", right: "7%" }}
              size={30}
            />
          </div>
        </div>
      </div>

      <div id="process" style={{ height: 50, visibility: "hidden" }}></div>

      <div className="process">
        <div className="ourprocess">
          <h1>
            <span className="gradient">OUR PROCESS</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui{" "}
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={headphones} alt="" />
            <p>Choose a service</p>
          </div>
          <div className="card">
            <img src={card} alt="" />
            <p>Make a payment</p>
          </div>
          <div className="card">
            <img src={party} alt="" />
            <p>Enjoy your event</p>
          </div>
        </div>
      </div>

      <img src={line} className="line" id="mixes" />

      <div className="mixes">
        <div className="mymixes">
          <h1>
            <span className="gradient">My mixes</span>
          </h1>
        </div>
        <div className="box">
          <Card text={'Never Sleep'} user={'Nav, Dylan'} onClick={() => play('beat1')} pause={start[0] == 'beat1' ? true: false}/>
          <Card text={'Seedhe Maut'} user={'Nav, Dylan'} onClick={() => play('beat2')} pause={start[0] == 'beat2' ? true: false}/>
          <Card text={'Shorty'} user={'Nav, Dylan'} onClick={() => play('beat3')} pause={start[0] == 'beat3' ? true: false}/>
        </div>
        <div className="hidden">
        <audio id="beat1" controls loop>
          <source src={"audio/neversleep.mp3"} type="audio/mp3" />
        </audio>

        <audio id="beat2" controls loop>
          <source src={"audio/seedhemaut.mp3"} type="audio/mp3" />
        </audio>

        <audio id="beat3" controls loop>
          <source src={"audio/shorty.mp3"} type="audio/mp3" />
        </audio>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
