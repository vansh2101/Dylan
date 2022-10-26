import React, {useState} from 'react'
import '../styles/Groovy.css';
import logo from '../static/logo.png';

function Groovy() {

    const [started, setStarted] = useState(false)
    const [sec, setSec] = useState(0)
    const [audio, setAudio] = useState({})
    let ms = 0
    let s = 0
    const [status, setStatus] = useState({
        "beat1": false,
        "beat2": false,
        "beat3": false,
        "beat4": false,
        "piano": false,
        "strings": false,
        "mbira": false,
        "pad": false,
        "keys": false,
        "synth": false,
        "flute": false,
        "synth1": false,
        "strings1": false,
        "bass": false,
        "brass": false,
        "bass1": false,
    })

    const [groups, setGroups] = useState({
        "red": null,
        "green": null,
        "bluish": null,
        "purple": null,
        "yellow": null,
        "brown": null,
        "blue": null,
        "pink": null,
    })

    const timer = () => {
        ms++
    
        if (ms == 100){
          ms = 0
          s = s+1
          setSec(s)
        }
      }
    
      const play = (id, col) => {
        console.log(id)
    
        if (!started){
          setInterval(timer, 10)
          setStarted(true)
        }
    
        let st = status
        let aud = audio
        let grp = groups
    
        if (!status[id]){
            if (grp[col]){
                st[grp[col]] = false
                document.getElementById(grp[col]).pause()
                document.getElementById(grp[col]).load()
                document.getElementById(grp[col]+'-tile').style.opacity = 0.5
            }
          st[id] = true
          grp[col] = id
          document.getElementById(id).play()
          document.getElementById(id+'-tile').style.opacity = 1
          aud[sec] = {'track': id, status: true}
        }
        else{
          st[id] = false
          grp[col] = null
          document.getElementById(id).pause()
          document.getElementById(id).load()
          document.getElementById(id+'-tile').style.opacity = 0.5
          aud[sec] = {'track': id, status: false}
        }
    
        setGroups(grp)
        setStatus(st)
        setAudio(aud)
    
        console.log(audio)
      }

  return (
    <>
    <div className='split'>
        <div className='menu'>
            <img src={logo} />
        </div>
        <div className='container'>
            <div className='banner'></div>

            <div className='groovy'>
                <h1>My Groovy</h1>

                <div className='pad'>
                    <div className='tile-container'>
                        <div className='tile red' id='beat1-tile' onClick={() => play('beat1', 'red')}>beat1</div>
                        <div className='tile red' id='beat2-tile' onClick={() => play('beat2', 'red')}>beat2</div>
                        <div className='tile red' id='beat3-tile' onClick={() => play('beat3', 'red')}>beat3</div>
                        <div className='tile red' id='beat4-tile' onClick={() => play('beat4', 'red')}>beat4</div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile green' id='piano-tile' onClick={() => play('piano', 'green')}>piano</div>
                        <div className='tile green' id='strings-tile' onClick={() => play('strings', 'green')}>strings</div>
                        <div className='tile green' id='mbira-tile' onClick={() => play('mbira', 'green')}>mbira</div>
                        <div className='tile green' id='pad-tile' onClick={() => play('pad', 'green')}>pad</div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile bluish' id='keys-tile' onClick={() => play('keys', 'bluish')}>keys</div>
                        <div className='tile bluish' id='synth-tile' onClick={() => play('synth', 'bluish')}>synth</div>
                        <div className='tile bluish' id='flute-tile' onClick={() => play('flute', 'bluish')}>flute</div>
                        <div className='tile bluish' id='synth1-tile' onClick={() => play('synth1', 'bluish')}>synth1</div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile purple' id='strings1-tile' onClick={() => play('strings1', 'purple')}>strings1</div>
                        <div className='tile purple' id='bass-tile' onClick={() => play('bass', 'purple')}>bass</div>
                        <div className='tile purple' id='brass-tile' onClick={() => play('brass', 'purple')}>brass</div>
                        <div className='tile purple' id='bass1-tile' onClick={() => play('bass1', 'purple')}>bass1</div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile yellow'></div>
                        <div className='tile yellow'></div>
                        <div className='tile yellow'></div>
                        <div className='tile yellow'></div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile brown'></div>
                        <div className='tile brown'></div>
                        <div className='tile brown'></div>
                        <div className='tile brown'></div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile blue'></div>
                        <div className='tile blue'></div>
                        <div className='tile blue'></div>
                        <div className='tile blue'></div>
                    </div>

                    <div className='tile-container'>
                        <div className='tile pink'></div>
                        <div className='tile pink'></div>
                        <div className='tile pink'></div>
                        <div className='tile pink'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='hidden'>
        <audio id='beat1' controls loop>
          <source src={'audio/beat1.wav'} type='audio/wav' />
        </audio>

        <audio id='beat2' controls loop>
          <source src={'audio/beat2.wav'} type='audio/wav' />
        </audio>

        <audio id='beat3' controls loop>
          <source src={'audio/beat3.wav'} type='audio/wav' />
        </audio>

        <audio id='beat4' controls loop>
          <source src={'audio/beat4.wav'} type='audio/wav' />
        </audio>

        <audio id='piano' controls loop>
          <source src={'audio/piano.wav'} type='audio/wav' />
        </audio>

        <audio id='strings' controls loop>
          <source src={'audio/strings.wav'} type='audio/wav' />
        </audio>

        <audio id='mbira' controls loop>
          <source src={'audio/mbira.wav'} type='audio/wav' />
        </audio>

        <audio id='pad' controls loop>
          <source src={'audio/pad.wav'} type='audio/wav' />
        </audio>

        <audio id='keys' controls loop>
          <source src={'audio/keys.wav'} type='audio/wav' />
        </audio>

        <audio id='synth' controls loop>
          <source src={'audio/synth.wav'} type='audio/wav' />
        </audio>

        <audio id='flute' controls loop>
          <source src={'audio/flute.wav'} type='audio/wav' />
        </audio>

        <audio id='synth1' controls loop>
          <source src={'audio/synth1.wav'} type='audio/wav' />
        </audio>

        <audio id='strings1' controls loop>
          <source src={'audio/strings1.wav'} type='audio/wav' />
        </audio>

        <audio id='bass' controls loop>
          <source src={'audio/bass.wav'} type='audio/wav' />
        </audio>

        <audio id='brass' controls loop>
          <source src={'audio/brass.wav'} type='audio/wav' />
        </audio>

        <audio id='bass1' controls loop>
          <source src={'audio/bass1.wav'} type='audio/wav' />
        </audio>
      </div>
    </>
  )
}

export default Groovy