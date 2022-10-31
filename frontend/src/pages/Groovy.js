import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Groovy.css";
import Menu from "../components/Menu";
import Card from "../components/Card";
import { FaRecordVinyl, FaVolumeDown, FaStop } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { RiSoundModuleFill } from "react-icons/ri";
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'

function Groovy() {
  if (!localStorage.getItem("groovyuser")) {
    window.location = "/login";
  }

  const [started, setStarted] = useState(false);
  const [inter, setInter] = useState();
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [audio, setAudio] = useState({});
  const [img, setImg] = useState('');

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
    beat5: false,
    beat6: false,
    beat7: false,
    beat8: false,
    synth2: false,
    whistle: false,
    choir: false,
    synth3: false,
    bass2: false,
    pad1: false,
    synth4: false,
    brass1: false,
    keys1: false,
    mallets: false,
    strings2: false,
    pluck: false,
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

    let m = min;
    if (ms == 100) {
      ms = 0;
      s = s + 1;

      if (s % 60 == 0) {
        m = m + 1;
        setMin(m);
      }
      setSec(s);
    }
  };

  const play = (id, col) => {
    console.log(id);

    let st = status;
    let aud = audio;
    let grp = groups;

    if (!status[id]) {
      if (grp[col]) {
        st[grp[col]] = false;
        document.getElementById(grp[col]).pause();
        document.getElementById(grp[col]).load();
        document.getElementById(grp[col] + "-icon").classList.remove("hidden");
        document
          .getElementById(grp[col] + "-metronome")
          .classList.add("hidden");
        const list = document.getElementsByClassName(grp[col] + "-circle");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("animation");
        }
        document.getElementById(grp[col] + "-tile").style.opacity = 0.5;
      }
      st[id] = true;
      grp[col] = id;
      document.getElementById(id).play();
      document.getElementById(id + "-icon").classList.add("hidden");
      document.getElementById(id + "-metronome").classList.remove("hidden");
      const list = document.getElementsByClassName(id + "-circle");
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add("animation");
      }
      document.getElementById(id + "-tile").style.opacity = 1;
      aud[String(sec)] = { track: id, status: true };
    } else {
      st[id] = false;
      grp[col] = null;
      document.getElementById(id).pause();
      document.getElementById(id).load();
      document.getElementById(id + "-icon").classList.remove("hidden");
      document.getElementById(id + "-metronome").classList.add("hidden");
      const list = document.getElementsByClassName(id + "-circle");
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("animation");
      }
      document.getElementById(id + "-tile").style.opacity = 0.5;
      aud[String(sec)] = { track: id, status: false };
    }

    if (started) {
      setGroups(grp);
      setStatus(st);
      setAudio(aud);
    }

    console.log(audio);
  };

  const record = () => {
    console.log("started");
    setStarted(true);
    setAudio({});
    const interval = setInterval(timer, 10);
    setInter(interval);
    document.getElementById("record").classList.add("hidden");
    document.getElementById("stop").classList.remove("hidden");
  };

  const stop = () => {
    console.log("stopped");

    let aud = audio;
    aud[String(sec)] = { track: "stop", status: false };
    setAudio(aud);

    setStarted(false);
    clearInterval(inter);
    s = 0;
    ms = 0;
    setSec(0);
    setMin(0);
    document.getElementById("record").classList.remove("hidden");
    document.getElementById("stop").classList.add("hidden");

    document.getElementById('modal').style.display = 'block'
  };

  const save = async (e) => {
    e.preventDefault();
    await upload(img)

    try{
      var url = await firebase.storage().ref().child(localStorage.getItem("groovyuser") + '-' + document.getElementById('title').value).getDownloadURL()
      }
    catch(e){
      console.log(e)
    }


    const data = {
      title: document.getElementById('title').value,
      audio: audio,
      id: localStorage.getItem("groovyuser"),
      img: url? url: null,
    };
    fetch("https://groovyapi.herokuapp.com/groovy/post/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    cancel()
  }

  const cancel = () => {
    document.getElementById('modal').style.display = 'none'
  }

  const select_pic = () => {
    document.getElementById("pic").click()
  }

  const display_pic = (event) => {
    if (event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]))
    }
  }

  const upload = async (uri) => {
    if (uri !== undefined){
      const response = await fetch(uri)
      const blob = await response.blob()

      let path = localStorage.getItem("groovyuser") + '-' + document.getElementById('title').value

      var ref = firebase.storage().ref().child(path)
      return ref.put(blob)
    }
  }

  return (
    <>
      <div className="split">
        <Menu highlight={"groovy"} />

        <div className="container center">
          <div className="banner">
            <h1>
              Discover the best beats
              <br />
              create them, upload them!!
            </h1>

            <div className="flex">
              <Link to="/community">
                <button className="communityButton">Explore</button>
              </Link>
              <Link to="/groovy">
                <button className="communityButton">Create</button>
              </Link>
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
                  <RiSoundModuleFill size={27} id="beat1-icon" />
                  <div className="metronome hidden" id="beat1-metronome">
                    <div className="circle beat1-circle" />
                    <div className="circle beat1-circle" />
                    <div className="circle beat1-circle" />
                    <div className="circle beat1-circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat2-tile"
                  onClick={() => play("beat2", "red")}
                >
                  <RiSoundModuleFill size={27} id="beat2-icon" />
                  <div className="metronome hidden" id="beat2-metronome">
                    <div className="circle beat2-circle" />
                    <div className="circle beat2-circle" />
                    <div className="circle beat2-circle" />
                    <div className="circle beat2-circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat3-tile"
                  onClick={() => play("beat3", "red")}
                >
                  <RiSoundModuleFill size={27} id="beat3-icon" />
                  <div className="metronome hidden" id="beat3-metronome">
                    <div className="circle beat3-circle" />
                    <div className="circle beat3-circle" />
                    <div className="circle beat3-circle" />
                    <div className="circle beat3-circle" />
                  </div>
                  beat
                </div>
                <div
                  className="tile red"
                  id="beat4-tile"
                  onClick={() => play("beat4", "red")}
                >
                  <RiSoundModuleFill size={27} id="beat4-icon" />
                  <div className="metronome hidden" id="beat4-metronome">
                    <div className="circle beat4-circle" />
                    <div className="circle beat4-circle" />
                    <div className="circle beat4-circle" />
                    <div className="circle beat4-circle" />
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
                  <RiSoundModuleFill size={27} id="piano-icon" />
                  <div className="metronome hidden" id="piano-metronome">
                    <div className="circle piano-circle" />
                    <div className="circle piano-circle" />
                    <div className="circle piano-circle" />
                    <div className="circle piano-circle" />
                  </div>
                  piano
                </div>
                <div
                  className="tile green"
                  id="strings-tile"
                  onClick={() => play("strings", "green")}
                >
                  <RiSoundModuleFill size={27} id="strings-icon" />
                  <div className="metronome hidden" id="strings-metronome">
                    <div className="circle strings-circle" />
                    <div className="circle strings-circle" />
                    <div className="circle strings-circle" />
                    <div className="circle strings-circle" />
                  </div>
                  strings
                </div>
                <div
                  className="tile green"
                  id="mbira-tile"
                  onClick={() => play("mbira", "green")}
                >
                  <RiSoundModuleFill size={27} id="mbira-icon" />
                  <div className="metronome hidden" id="mbira-metronome">
                    <div className="circle mbira-circle" />
                    <div className="circle mbira-circle" />
                    <div className="circle mbira-circle" />
                    <div className="circle mbira-circle" />
                  </div>
                  mbira
                </div>
                <div
                  className="tile green"
                  id="pad-tile"
                  onClick={() => play("pad", "green")}
                >
                  <RiSoundModuleFill size={27} id="pad-icon" />
                  <div className="metronome hidden" id="pad-metronome">
                    <div className="circle pad-circle" />
                    <div className="circle pad-circle" />
                    <div className="circle pad-circle" />
                    <div className="circle pad-circle" />
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
                  <RiSoundModuleFill size={27} id="keys-icon" />
                  <div className="metronome hidden" id="keys-metronome">
                    <div className="circle keys-circle" />
                    <div className="circle keys-circle" />
                    <div className="circle keys-circle" />
                    <div className="circle keys-circle" />
                  </div>
                  keys
                </div>
                <div
                  className="tile bluish"
                  id="synth-tile"
                  onClick={() => play("synth", "bluish")}
                >
                  <RiSoundModuleFill size={27} id="synth-icon" />
                  <div className="metronome hidden" id="synth-metronome">
                    <div className="circle synth-circle" />
                    <div className="circle synth-circle" />
                    <div className="circle synth-circle" />
                    <div className="circle synth-circle" />
                  </div>
                  synth
                </div>
                <div
                  className="tile bluish"
                  id="flute-tile"
                  onClick={() => play("flute", "bluish")}
                >
                  <RiSoundModuleFill size={27} id="flute-icon" />
                  <div className="metronome hidden" id="flute-metronome">
                    <div className="circle flute-circle" />
                    <div className="circle flute-circle" />
                    <div className="circle flute-circle" />
                    <div className="circle flute-circle" />
                  </div>
                  flute
                </div>
                <div
                  className="tile bluish"
                  id="synth1-tile"
                  onClick={() => play("synth1", "bluish")}
                >
                  <RiSoundModuleFill size={27} id="synth1-icon" />
                  <div className="metronome hidden" id="synth1-metronome">
                    <div className="circle synth1-circle" />
                    <div className="circle synth1-circle" />
                    <div className="circle synth1-circle" />
                    <div className="circle synth1-circle" />
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
                  <RiSoundModuleFill size={27} id="strings1-icon" />
                  <div className="metronome hidden" id="strings1-metronome">
                    <div className="circle strings1-circle" />
                    <div className="circle strings1-circle" />
                    <div className="circle strings1-circle" />
                    <div className="circle strings1-circle" />
                  </div>
                  strings
                </div>
                <div
                  className="tile purple"
                  id="bass-tile"
                  onClick={() => play("bass", "purple")}
                >
                  <RiSoundModuleFill size={27} id="bass-icon" />
                  <div className="metronome hidden" id="bass-metronome">
                    <div className="circle bass-circle" />
                    <div className="circle bass-circle" />
                    <div className="circle bass-circle" />
                    <div className="circle bass-circle" />
                  </div>
                  bass
                </div>
                <div
                  className="tile purple"
                  id="brass-tile"
                  onClick={() => play("brass", "purple")}
                >
                  <RiSoundModuleFill size={27} id="brass-icon" />
                  <div className="metronome hidden" id="brass-metronome">
                    <div className="circle brass-circle" />
                    <div className="circle brass-circle" />
                    <div className="circle brass-circle" />
                    <div className="circle brass-circle" />
                  </div>
                  brass
                </div>
                <div
                  className="tile purple"
                  id="bass1-tile"
                  onClick={() => play("bass1", "purple")}
                >
                  <RiSoundModuleFill size={27} id="bass1-icon" />
                  <div className="metronome hidden" id="bass1-metronome">
                    <div className="circle bass1-circle" />
                    <div className="circle bass1-circle" />
                    <div className="circle bass1-circle" />
                    <div className="circle bass1-circle" />
                  </div>
                  bass
                </div>
              </div>

              <div className="tile-container">
                <div className="tile yellow" id="beat5-tile" onClick={() => play("beat5", "yellow")}>
                  <RiSoundModuleFill size={27} id="beat5-icon" />
                  <div className="metronome hidden" id="beat5-metronome">
                    <div className="circle beat5-circle" />
                    <div className="circle beat5-circle" />
                    <div className="circle beat5-circle" />
                    <div className="circle beat5-circle" />
                  </div>
                  beat
                </div>
                <div className="tile yellow" id="beat6-tile" onClick={() => play("beat6", "yellow")}>
                <RiSoundModuleFill size={27} id="beat6-icon" />
                  <div className="metronome hidden" id="beat6-metronome">
                    <div className="circle beat6-circle" />
                    <div className="circle beat6-circle" />
                    <div className="circle beat6-circle" />
                    <div className="circle beat6-circle" />
                  </div>
                  beat
                </div>
                <div className="tile yellow" id="beat7-tile" onClick={() => play("beat7", "yellow")}>
                <RiSoundModuleFill size={27} id="beat7-icon" />
                  <div className="metronome hidden" id="beat7-metronome">
                    <div className="circle beat7-circle" />
                    <div className="circle beat7-circle" />
                    <div className="circle beat7-circle" />
                    <div className="circle beat7-circle" />
                  </div>
                  beat
                </div>
                <div className="tile yellow" id="beat8-tile" onClick={() => play("beat8", "yellow")}>
                <RiSoundModuleFill size={27} id="beat8-icon" />
                  <div className="metronome hidden" id="beat8-metronome">
                    <div className="circle beat8-circle" />
                    <div className="circle beat8-circle" />
                    <div className="circle beat8-circle" />
                    <div className="circle beat8-circle" />
                  </div>
                  beat
                </div>
              </div>

              <div className="tile-container">
                <div className="tile brown" id="synth2-tile" onClick={() => play("synth2", "brown")}>
                  <RiSoundModuleFill size={27} id="synth2-icon" />
                  <div className="metronome hidden" id="synth2-metronome">
                    <div className="circle synth2-circle" />
                    <div className="circle synth2-circle" />
                    <div className="circle synth2-circle" />
                    <div className="circle synth2-circle" />
                  </div>
                  synth
                </div>
                <div className="tile brown" id="whistle-tile" onClick={() => play("whistle", "brown")}>
                <RiSoundModuleFill size={27} id="whistle-icon" />
                  <div className="metronome hidden" id="whistle-metronome">
                    <div className="circle whistle-circle" />
                    <div className="circle whistle-circle" />
                    <div className="circle whistle-circle" />
                    <div className="circle whistle-circle" />
                  </div>
                  whistle
                </div>
                <div className="tile brown" id="choir-tile" onClick={() => play("choir", "brown")}>
                <RiSoundModuleFill size={27} id="choir-icon" />
                  <div className="metronome hidden" id="choir-metronome">
                    <div className="circle choir-circle" />
                    <div className="circle choir-circle" />
                    <div className="circle choir-circle" />
                    <div className="circle choir-circle" />
                  </div>
                  choir
                </div>
                <div className="tile brown" id="synth3-tile" onClick={() => play("synth3", "brown")}>
                <RiSoundModuleFill size={27} id="synth3-icon" />
                  <div className="metronome hidden" id="synth3-metronome">
                    <div className="circle synth3-circle" />
                    <div className="circle synth3-circle" />
                    <div className="circle synth3-circle" />
                    <div className="circle synth3-circle" />
                  </div>
                  synth
                </div>
              </div>

              <div className="tile-container">
                <div className="tile blue" id="bass2-tile" onClick={() => play("bass2", "blue")}>
                <RiSoundModuleFill size={27} id="bass2-icon" />
                  <div className="metronome hidden" id="bass2-metronome">
                    <div className="circle bass2-circle" />
                    <div className="circle bass2-circle" />
                    <div className="circle bass2-circle" />
                    <div className="circle bass2-circle" />
                  </div>
                  bass
                </div>
                <div className="tile blue" id="pad1-tile" onClick={() => play("pad1", "blue")}>
                <RiSoundModuleFill size={27} id="pad1-icon" />
                  <div className="metronome hidden" id="pad1-metronome">
                    <div className="circle pad1-circle" />
                    <div className="circle pad1-circle" />
                    <div className="circle pad1-circle" />
                    <div className="circle pad1-circle" />
                  </div>
                  pad
                </div>
                <div className="tile blue" id="synth4-tile" onClick={() => play("synth4", "blue")}>
                <RiSoundModuleFill size={27} id="synth4-icon" />
                  <div className="metronome hidden" id="synth4-metronome">
                    <div className="circle synth4-circle" />
                    <div className="circle synth4-circle" />
                    <div className="circle synth4-circle" />
                    <div className="circle synth4-circle" />
                  </div>
                  synth
                </div>
                <div className="tile blue" id="brass1-tile" onClick={() => play("brass1", "blue")}>
                  <RiSoundModuleFill size={27} id="brass1-icon" />
                  <div className="metronome hidden" id="brass1-metronome">
                    <div className="circle brass1-circle" />
                    <div className="circle brass1-circle" />
                    <div className="circle brass1-circle" />
                    <div className="circle brass1-circle" />
                  </div>
                  brass
                </div>
              </div>

              <div className="tile-container">
                <div className="tile pink" id="keys1-tile" onClick={() => play("keys1", "pink")}>
                <RiSoundModuleFill size={27} id="keys1-icon" />
                  <div className="metronome hidden" id="keys1-metronome">
                    <div className="circle keys1-circle" />
                    <div className="circle keys1-circle" />
                    <div className="circle keys1-circle" />
                    <div className="circle keys1-circle" />
                  </div>
                  keys1
                </div>
                <div className="tile pink" id="mallets-tile" onClick={() => play("mallets", "pink")}>
                <RiSoundModuleFill size={27} id="mallets-icon" />
                  <div className="metronome hidden" id="mallets-metronome">
                    <div className="circle mallets-circle" />
                    <div className="circle mallets-circle" />
                    <div className="circle mallets-circle" />
                    <div className="circle mallets-circle" />
                  </div>
                  mallets
                </div>
                <div className="tile pink" id="strings2-tile" onClick={() => play("strings2", "pink")}>
                <RiSoundModuleFill size={27} id="strings2-icon" />
                  <div className="metronome hidden" id="strings2-metronome">
                    <div className="circle strings2-circle" />
                    <div className="circle strings2-circle" />
                    <div className="circle strings2-circle" />
                    <div className="circle strings2-circle" />
                  </div>
                  strings
                </div>
                <div className="tile pink" id="pluck-tile" onClick={() => play("pluck", "pink")}>
                <RiSoundModuleFill size={27} id="pluck-icon" />
                  <div className="metronome hidden" id="pluck-metronome">
                    <div className="circle pluck-circle" />
                    <div className="circle pluck-circle" />
                    <div className="circle pluck-circle" />
                    <div className="circle pluck-circle" />
                  </div>
                  pluck
                </div>
              </div>
            </div>

            <div className="btns">
              <div className="volume">
                <FaVolumeDown size={25} color="#848484" />
                <input type="range" defaultValue={50} max={100} min={0} />
              </div>

              <div className="record" onClick={record} id="record">
                <FaRecordVinyl size={40} />
                <br />
                Record
              </div>
              <div className="record hidden" onClick={stop} id="stop">
                <FaStop size={40} />
                <br />
                Stop Recording
              </div>

              <div className="timer">
                <BsStopwatchFill size={25} color="#848484" />
                {min < 10 ? "0" + String(min) : min}:
                {sec % 60 < 10 ? "0" + String(sec % 60) : sec % 60}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="modal">
        <div className="modal-content" style={{marginTop: '0.5%'}}>
          <div className="header">
            <span>Save Track</span>
          </div>

          <div className="content">
            <Card id='add' onClick={select_pic} img={img} required player={false} />

            <form>
              <input
                type="text"
                name="title"
                placeholder="Audio Title"
                id="title"
                className="input"
                required
              />
              <input type="file" accept="image/png, image/jpg, image/jpeg" id="pic" style={{display: 'none'}} onChange={display_pic} />

              <div className="flex">
                <button className="save" onClick={cancel}>Cancel</button>
                <button className="save" onClick={save}>Save</button>
              </div>
            </form>  
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

        <audio id="beat5" controls loop>
          <source src={"audio/beat5.mp3"} type="audio/mp3" />
        </audio>

        <audio id="beat6" controls loop>
          <source src={"audio/beat6.mp3"} type="audio/mp3" />
        </audio>

        <audio id="beat7" controls loop>
          <source src={"audio/beat7.mp3"} type="audio/mp3" />
        </audio>

        <audio id="beat8" controls loop>
          <source src={"audio/beat8.mp3"} type="audio/mp3" />
        </audio>

        <audio id="synth2" controls loop>
          <source src={"audio/synth2.mp3"} type="audio/mp3" />
        </audio>

        <audio id="whistle" controls loop>
          <source src={"audio/whistle.mp3"} type="audio/mp3" />
        </audio>

        <audio id="choir" controls loop>
          <source src={"audio/choir.mp3"} type="audio/mp3" />
        </audio>

        <audio id="synth3" controls loop>
          <source src={"audio/synth3.mp3"} type="audio/mp3" />
        </audio>

        <audio id="bass2" controls loop>
          <source src={"audio/bass2.mp3"} type="audio/mp3" />
        </audio>

        <audio id="pad1" controls loop>
          <source src={"audio/pad1.mp3"} type="audio/mp3" />
        </audio>

        <audio id="synth4" controls loop>
          <source src={"audio/synth4.mp3"} type="audio/mp3" />
        </audio>

        <audio id="brass1" controls loop>
          <source src={"audio/brass1.mp3"} type="audio/mp3" />
        </audio>

        <audio id="keys1" controls loop>
          <source src={"audio/keys1.mp3"} type="audio/mp3" />
        </audio>

        <audio id="mallets" controls loop>
          <source src={"audio/mallets.mp3"} type="audio/mp3" />
        </audio>

        <audio id="strings2" controls loop>
          <source src={"audio/strings2.mp3"} type="audio/mp3" />
        </audio>

        <audio id="pluck" controls loop>
          <source src={"audio/pluck.mp3"} type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}

export default Groovy;
