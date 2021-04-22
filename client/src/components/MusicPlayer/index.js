import React, {useState, useEffect} from 'react'
import Player from "./musicplayer"
import "./style.css"


const MusicPlayer = () => {

    const [songs, setSongs] = useState([
        {
            title: "Buddha Music Santuary",
            artist: "Hatha Yoga",
            // img_src:
            src: "./meditationmusic/namaste.mp3"
        },
        {
            title: "Meditation",
            artist: "Lucia Micarelli",
            // img_src:
            src: "./meditationmusic/meditation2.mp3"
        }

    ])

    const [currentSong, setCurrentSong] = useState(0)
    const [nextSong, setnextSong] = useState(currentSong + 1)


    useEffect(() => {
        setnextSong(() => {
            if (currentSong + 1 > songs.length -1) {
                return 0;
            }
            else {
                return currentSong + 1;
            }
        })

    }, [currentSong])


    return (
        <div>
            <Player currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            nextSong={nextSong}
            songs={songs} />

        </div>
    )
}

export default MusicPlayer
