import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from "./playerdetails"
import MusicControls from "./musiccontrols"
import "./style.css"


const MusicAudio = (props) => {

    const audioEl = useRef(null);
    const [isPlay, setIsPlaying] = useState(false);


    useEffect(() => {

        if (isPlay){
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()
        }


    })
    
    const changeSong = (forwards = true) => {
        if(forwards){

            props.setCurrentSong(() => {
                let temp = props.currentSong
                temp++;

                if(temp > props.songs.length - 1){
                    temp = 0;
                }
                return temp;
           })
                
        }
        else {

            props.setCurrentSong(()=> {
                let temp = props.currentSong;
                temp--;

                if (temp < 0){
                    temp = props.songs.length - 1;
                }
                return temp;
            })

            
        }
    }


    return (
        <div className="c-player--control">
            <audio src={props.songs[props.currentSong].src} ref={audioEl}></audio>
            {/* <h4>Playing Now</h4> */}
            <PlayerDetails song={props.songs[props.currentSong]}/>
            <MusicControls isPlay={isPlay} setIsPlaying={setIsPlaying}
            changeSong={changeSong}/>

            <p><strong>Next Up: </strong>{props.songs[props.nextSong].title} by {props.nextSong.artist} </p>
        </div>
    )
}

export default MusicAudio
