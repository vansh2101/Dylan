import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "../styles/Community.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Community = () => {

  if (!localStorage.getItem('user')){
    window.location ='/login'
  }

  const [post, setPost] = useState([])
  const [pause, setPause] = useState([-1, false])
  const [inte, setInte] = useState()
  const [playing, setPlaying] = useState([])
  const [start, setStart] = useState([-1, false])

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
      int = setInterval(timer, 10)
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
    })
  }, [])

  return (
    <main>
      <Navbar loggedIn={true} />
      <div className="flexbox">
        <Card text={'Highlight Tribe'} user={'Nav, Dylan'} onClick={() => play_music('tribe')} pause={start[0] == 'tribe' ? true: false} />

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

        <Card />
      </div>

      <div className="track-container">
        <Card />
        <Card />
        <Card />
        <Card />

        {post.map((track, key) => 
          <Card key={key} text={track.title} user={track.user} onClick={() => play(key)} pause={pause[0] == key? pause[1]: false} />
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
      </div>
    </main>
  );
};

export default Community;
