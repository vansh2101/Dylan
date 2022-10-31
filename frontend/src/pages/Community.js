import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "../styles/Community.css";
import loader from '../static/loader.gif'
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import mix1 from "../static/mix1.png"
import mix2 from "../static/mix2.png"

const Community = () => {

  if (!localStorage.getItem('groovyuser')){
    window.location ='/login'
  }

  const [post, setPost] = useState([])
  const [pause, setPause] = useState([-1, false])
  const [inte, setInte] = useState()
  const [playing, setPlaying] = useState([])
  const [start, setStart] = useState([-1, false])
  const [load, setLoad] = useState(true)


  let ms = 0;
  let s = 0;
  let time = []
  let key = 0
  let ids = []
  let int;

  const timer = () => {
    ms++;
    
    if (ms == 100) {
      ms = 0;
      s = s + 1;
      console.log(s)

      if (time.includes(String(s))){
        const audio = post[key].audio[String(s)]
        console.log(audio)

        if (audio['track'] == 'stop'){
          clearInterval(inte)
          for (let i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).pause()
            document.getElementById(ids[i]).load()
          }
          setPause([-1, false])
        }
        else{
          if(audio['status']){
            document.getElementById(audio['track']).play()
            ids.push(audio['track'])
          }
          else{
            document.getElementById(audio['track']).pause()
            document.getElementById(audio['track']).load()
            const index = ids.indexOf(audio['track'])
            ids.splice(index, 1)
          }
          setPlaying(ids)
        }
      }
    }
  };

  const play = (id) => {
    if(!pause[1]){
      key = id
      const audio = post[id].audio
      time = Object.keys(audio)
      int = setInterval(timer, 5)
      setPause([id, true])
      setInte(int)
    }
    else{
      stop_music()
    }
  }

  const stop_music = () => {
    clearInterval(inte)
    for (let i = 0; i < playing.length; i++){
      document.getElementById(playing[i]).pause()
      document.getElementById(playing[i]).load()
    }
    ms = 0
    s = 0
    setPlaying([])
    setPause([-1, false])
  }

  const play_music = (id) => {
    if(!start[1]){
      document.getElementById(id).play()
      setStart([id,true])
    }
    else{
      document.getElementById(id).pause()
      setStart([-1, false])
    }
  }

  useEffect(() => {
    fetch('https://groovyapi.herokuapp.com/posts/get/')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setPost(data)
      setLoad(false)
    })
  }, [])

  return (
    <main>
      <div className="modal loading" id='loader' style={load?{display: 'block'}: {display: 'none'}}>
          <img src={loader} />
        </div>
      <Navbar loggedIn={true} />
      <div className="flexbox">
        <Card text={'Highlight Tribe'} user={'Nav, Dylan'} onClick={() => play_music('tribe')} pause={start[0] == 'tribe' ? true: false} img={mix1} />

        <div className="grid2">
          <h1>
            Create tracks with <span className="gradient">Groovy</span>
          </h1>
          <p className="color">
            Discover the best beats, create them, upload them!
          </p>
          <Link to="/groovy">
            <button className="communityButton">Launch Groovy</button>
          </Link>
        </div>

        <Card text={'My Tribe'} user={'Nav, Dylan'} onClick={() => play_music('tribe1')} pause={start[0] == 'tribe1' ? true: false} img={mix2} />
      </div>

      <div className="track-container">
        {post.map((track, key) => 
          <Card key={key} text={track.title} user={track.user} onClick={() => play(key)} pause={pause[0] == key? pause[1]: false} img={track.img}/>
        )}
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

        <audio id="tribe" controls loop>
          <source src={"audio/highlighttribe.mp3"} type="audio/mp3" />
        </audio>

        <audio id="tribe1" controls loop>
          <source src={"audio/highlighttribe.mp3"} type="audio/mp3" />
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
    </main>
  );
};

export default Community;
