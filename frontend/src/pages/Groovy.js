import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Groovy.css";
import Menu from "../components/Menu";
import {FaRecordVinyl, FaVolumeDown} from 'react-icons/fa'
import { BsStopwatchFill } from "react-icons/bs";
import {RiSoundModuleFill} from "react-icons/ri";

function Groovy() {
  const [started, setStarted] = useState(false);
  const [sec, setSec] = useState(0);
  const [audio, setAudio] = useState({});
  let ms = 0;
  let s = 0;
  const [status, setStatus] = useState({
    beat1: false,
    beat2: false,
    beat3: false,
    beat4: false,
    piano: false,
    strings: false,
    mbira: false,
    pad: false,
    keys: false,
    synth: false,
    flute: false,
    synth1: false,
    strings1: false,
    bass: false,
    brass: false,
    bass1: false,
  });

  const [groups, setGroups] = useState({
    red: null,
    green: null,
    bluish: null,
    purple: null,
    yellow: null,
    brown: null,
    blue: null,
    pink: null,
  });

  const timer = () => {
    ms++;

    if (ms == 100) {
      ms = 0;
      s = s + 1;
      setSec(s);
    }
  };

  const play = (id, col) => {
    console.log(id);

    if (!started) {
      setInterval(timer, 10);
      setStarted(true);
    }

    let st = status;
    let aud = audio;
    let grp = groups;

    if (!status[id]) {
      if (grp[col]) {
        st[grp[col]] = false;
        document.getElementById(grp[col]).pause();
        document.getElementById(grp[col]).load();
        document.getElementById(grp[col] + "-tile").style.opacity = 0.5;
      }
      st[id] = true;
      grp[col] = id;
      document.getElementById(id).play();
      document.getElementById(id + "-tile").style.opacity = 1;
      aud[sec] = { track: id, status: true };
    } else {
      st[id] = false;
      grp[col] = null;
      document.getElementById(id).pause();
      document.getElementById(id).load();
      document.getElementById(id + "-tile").style.opacity = 0.5;
      aud[sec] = { track: id, status: false };
    }

    setGroups(grp);
    setStatus(st);
    setAudio(aud);

    console.log(audio);
  };

  return (
    <>
      <div className="split">
        <Menu highlight={'groovy'} />

        <div className="container">
          <div className="banner">
            <h1>
              Discover the best beats
              <br />
              create them, upload them!!
            </h1>

            <div className="flex">
              <Link to='/community'><button>Explore</button></Link>
              <Link to='/groovy'><button>Create</button></Link>
            </div>
          </div>

          <div className="groovy">
            <h1>My Groovy</h1>

            <div className="pad">
              <div className="tile-container">
                <div
                  className="tile red"
                  id="beat1-tile"
                  onClick={() => play("beat1", "red")}
                >
                  <RiSoundModuleFill size={27} id='beat1-icon'/>
                  <div className="metronome hidden" id="beat1-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat2-tile"
                  onClick={() => play("beat2", "red")}
                >
                  <RiSoundModuleFill size={27} id='beat2-icon'/>
                  <div className="metronome hidden" id="beat2-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat3-tile"
                  onClick={() => play("beat3", "red")}
                >
                  <RiSoundModuleFill size={27} id='beat3-icon'/>
                  <div className="metronome hidden" id="beat3-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat4-tile"
                  onClick={() => play("beat4", "red")}
                >
                  <RiSoundModuleFill size={27} id='beat4-icon'/>
                  <div className="metronome hidden" id="beat4-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  beat
                </div>
              </div>

              <div className="tile-container">
                <div
                  className="tile green"
                  id="piano-tile"
                  onClick={() => play("piano", "green")}
                >
                  <RiSoundModuleFill size={27} id='piano-icon'/>
                  <div className="metronome hidden" id="piano-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  piano
                </div>
                <div
                  className="tile green"
                  id="strings-tile"
                  onClick={() => play("strings", "green")}
                >
                  <RiSoundModuleFill size={27} id='strings-icon'/>
                  <div className="metronome hidden" id="strings-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  strings
                </div>
                <div
                  className="tile green"
                  id="mbira-tile"
                  onClick={() => play("mbira", "green")}
                >
                  <RiSoundModuleFill size={27} id='mbira-icon'/>
                  <div className="metronome hidden" id="mbira-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  mbira
                </div>
                <div
                  className="tile green"
                  id="pad-tile"
                  onClick={() => play("pad", "green")}
                >
                  <RiSoundModuleFill size={27} id='pad-icon'/>
                  <div className="metronome hidden" id="pad-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  pad
                </div>
              </div>

              <div className="tile-container">
                <div
                  className="tile bluish"
                  id="keys-tile"
                  onClick={() => play("keys", "bluish")}
                >
                  <RiSoundModuleFill size={27} id='keys-icon'/>
                  <div className="metronome hidden" id="keys-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  keys
                </div>
                <div
                  className="tile bluish"
                  id="synth-tile"
                  onClick={() => play("synth", "bluish")}
                >
                  <RiSoundModuleFill size={27} id='synth-icon'/>
                  <div className="metronome hidden" id="synth-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  synth
                </div>
                <div
                  className="tile bluish"
                  id="flute-tile"
                  onClick={() => play("flute", "bluish")}
                >
                  <RiSoundModuleFill size={27} id='flute-icon'/>
                  <div className="metronome hidden" id="flute-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  flute
                </div>
                <div
                  className="tile bluish"
                  id="synth1-tile"
                  onClick={() => play("synth1", "bluish")}
                >
                  <RiSoundModuleFill size={27} id='synth1-icon'/>
                  <div className="metronome hidden" id="synth1-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  synth
                </div>
              </div>

              <div className="tile-container">
                <div
                  className="tile purple"
                  id="strings1-tile"
                  onClick={() => play("strings1", "purple")}
                >
                  <RiSoundModuleFill size={27} id='strings1-icon'/>
                  <div className="metronome hidden" id="strings1-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  strings
                </div>
                <div
                  className="tile purple"
                  id="bass-tile"
                  onClick={() => play("bass", "purple")}
                >
                  <RiSoundModuleFill size={27} id='bass-icon'/>
                  <div className="metronome hidden" id="bass-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  bass
                </div>
                <div
                  className="tile purple"
                  id="brass-tile"
                  onClick={() => play("brass", "purple")}
                >
                  <RiSoundModuleFill size={27} id='brass-icon'/>
                  <div className="metronome hidden" id="brass-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  brass
                </div>
                <div
                  className="tile purple"
                  id="bass1-tile"
                  onClick={() => play("bass1", "purple")}
                >
                  <RiSoundModuleFill size={27} id='bass1-icon'/>
                  <div className="metronome hidden" id="bass1-metronome">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                  </div>
                  bass
                </div>
              </div>

              <div className="tile-container">
                <div className="tile yellow"></div>
                <div className="tile yellow"></div>
                <div className="tile yellow"></div>
                <div className="tile yellow"></div>
              </div>

              <div className="tile-container">
                <div className="tile brown"></div>
                <div className="tile brown"></div>
                <div className="tile brown"></div>
                <div className="tile brown"></div>
              </div>

              <div className="tile-container">
                <div className="tile blue"></div>
                <div className="tile blue"></div>
                <div className="tile blue"></div>
                <div className="tile blue"></div>
              </div>

              <div className="tile-container">
                <div className="tile pink"></div>
                <div className="tile pink"></div>
                <div className="tile pink"></div>
                <div className="tile pink"></div>
              </div>
            </div>

            <div className="btns">
              <div className="volume">
                <FaVolumeDown size={25} color='#848484' />
                <input type="range" defaultValue={50} max={100} min={0} />
              </div>

              <div className="record">
                <FaRecordVinyl size={40} />
                <br />
                Record
              </div>

              <div className="timer">
                <BsStopwatchFill size={25} color='#848484' />
                00:00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden">
        <audio id="beat1" controls loop>
          <source src={"audio/beat1.wav"} type="audio/wav" />
        </audio>

        <audio id="beat2" controls loop>
          <source src={"audio/beat2.wav"} type="audio/wav" />
        </audio>

        <audio id="beat3" controls loop>
          <source src={"audio/beat3.wav"} type="audio/wav" />
        </audio>

        <audio id="beat4" controls loop>
          <source src={"audio/beat4.wav"} type="audio/wav" />
        </audio>

        <audio id="piano" controls loop>
          <source src={"audio/piano.wav"} type="audio/wav" />
        </audio>

        <audio id="strings" controls loop>
          <source src={"audio/strings.wav"} type="audio/wav" />
        </audio>

        <audio id="mbira" controls loop>
          <source src={"audio/mbira.wav"} type="audio/wav" />
        </audio>

        <audio id="pad" controls loop>
          <source src={"audio/pad.wav"} type="audio/wav" />
        </audio>

        <audio id="keys" controls loop>
          <source src={"audio/keys.wav"} type="audio/wav" />
        </audio>

        <audio id="synth" controls loop>
          <source src={"audio/synth.wav"} type="audio/wav" />
        </audio>

        <audio id="flute" controls loop>
          <source src={"audio/flute.wav"} type="audio/wav" />
        </audio>

        <audio id="synth1" controls loop>
          <source src={"audio/synth1.wav"} type="audio/wav" />
        </audio>

        <audio id="strings1" controls loop>
          <source src={"audio/strings1.wav"} type="audio/wav" />
        </audio>

        <audio id="bass" controls loop>
          <source src={"audio/bass.wav"} type="audio/wav" />
        </audio>

        <audio id="brass" controls loop>
          <source src={"audio/brass.wav"} type="audio/wav" />
        </audio>

        <audio id="bass1" controls loop>
          <source src={"audio/bass1.wav"} type="audio/wav" />
        </audio>
      </div>
    </>
  );
}

export default Groovy;
