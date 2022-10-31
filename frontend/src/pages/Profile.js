import React, {useEffect, useState} from "react";
import Menu from "../components/Menu";
import Card from "../components/Card";
import "../styles/Profile.css";
import loader from '../static/loader.gif'
import profile from "../static/profile.png";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function Profile() {

  const [user, setUser] = useState({'name': '', 'username': ''})
  const [saved, setSaved] = useState([])
  const [posts, setPosts] = useState([])
  const [pause, setPause] = useState([-1, false, 'saved'])
  const [inte, setInte] = useState()
  const [playing, setPlaying] = useState([])
  const [postkey, setPostKey] = useState()
  const [type, setType] = useState('saved')
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
        const audio = type == 'saved' ? saved[key].audio[String(s)] : posts[key].audio[String(s)]
        console.log(audio)

        if (audio['track'] == 'stop'){
          clearInterval(inte)
          for (let i = 0; i < ids.length; i++){
            document.getElementById(ids[i]).pause()
            document.getElementById(ids[i]).load()
          }
          setPause([-1, false, 'saved'])
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

  const play = (id, post=false) => {
    if(!pause[1]){
      key = id
      const audio = post? posts[id].audio : saved[id].audio
      time = Object.keys(audio)
      int = setInterval(timer, 5)
      if(post){
        setType('post')
        setPause([id, true, 'post'])
      }
      else{
        setType('saved')
        setPause([id, true, 'saved'])
      }
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
    setPause([-1, false, 'saved'])
  }

  const openmodal = (key) => {
    document.getElementById('modal').style.display = 'block'
    setPostKey(key)
  }

  const post = () => {
    const audio = saved[postkey]

    const data = {
      'id': localStorage.getItem('groovyuser'),
      'title': audio.title,
      'audio': audio.audio,
      'img': audio.img
    }

    fetch('https://groovyapi.herokuapp.com/posts/post/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    
    fetch_posts(true)
    cancel()

  }

  const cancel = () => {
    document.getElementById('modal').style.display = 'none'
  }

  const fetch_posts = (load=false) => {
    setLoad(true)
    fetch('https://groovyapi.herokuapp.com/posts/fetch/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({'id': localStorage.getItem('groovyuser')}),
    })
    .then((res) => res.json())
    .then((data) => {
      setPosts(data)

      if(load){setLoad(false)}
    })
  }

  useEffect(() => {
    document.getElementById('loader').style.display = 'block'
    fetch_posts()

    fetch('https://groovyapi.herokuapp.com/users/get/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({'id': localStorage.getItem('groovyuser')}),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setUser(data)
    })

    fetch('https://groovyapi.herokuapp.com/groovy/get/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({'id': localStorage.getItem('groovyuser')}),
    })
    .then((res) => res.json())
    .then((data) => {
      setSaved(data)
      setLoad(false)

      document.getElementById('loader').style.display = 'none'
    })

  }, [])

  return (
    <>
      <Link to='/groovy' id="link" style={{display: 'none'}} />
      <div className="split">
      <div className="modal loading" id='loader' style={load?{display: 'block'}: {display: 'none'}}>
          <img src={loader} />
        </div>
        <Menu highlight={"profile"} />

        <div className="container">
          <div className="scrollview">
            <div className="profile">
              <div className="picture">
                <img src={profile} alt="" />
              </div>
              <div className="information">
                <div className="button">
                  <h1>{user.name}</h1>
                  <button className="edit">
                    <MdModeEdit size={15} /> Edit Profile
                  </button>
                </div>
                <p className="username">@{user.username}</p>
                <div className="follow">
                  <p className="color">02 audios</p>
                  <p className="color">69 followers</p>
                  <p className="color">20 following</p>
                </div>
              </div>
            </div>
            <div className="recently">
              <h2>Your Posts</h2>
              <div className="recent">
                {posts.map((track,key) => 
                <Card key={key} text={track.title} user={track.user} onClick={() => play(key, true)} pause={pause[2] == 'post' ? pause[0] == key? pause[1]: false: false} img={track.img} />
                )}
              </div>
            </div>

            <div className="recently">
              <h2>Saved Tracks</h2>
              <div className="recent">
              {saved.map((track, key) => 
                <Card key={key} text={track.title} audio={true} modalOnClick={() => openmodal(key)} user={track.user} onClick={() => play(key)} pause={pause[2] == 'saved' ? pause[0] == key? pause[1]: false: false} img={track.img} />
                )}
                <Card id='add' player={false} onClick={() => {document.getElementById('link').click()}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="modal">
        <div className="modal-content">
          <div className="header">
            <span>Post This Track?</span>
          </div>

          <div className="content">
            <p>Are you sure you want to post this track and show your skills to the world?</p>
            <div className="flex">
                <button className="save" onClick={cancel}>Cancel</button>
                <button className="save" onClick={post}>Post</button>
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

export default Profile;
