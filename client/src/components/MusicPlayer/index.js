import React, {useState, useEffect} from 'react'
import Player from "./musicplayer"
import "./style.css"
// import buddha from "./musicimg/buddha"
// import yogacliff from "./musicimg/yogacliff"


const MusicPlayer = () => {

    const [songs, setSongs] = useState([
        {
            title: "Buddha Music Santuary",
            artist: "Hatha Yoga Zone",
            img_src: "./musicimg/buddha.png",
            src: "./meditationmusic/meditation1.mp3"
        },
        {
            title: "Meditation",
            artist: "Lucia Micarelli",
            img_src: "./musicimg/yogacliff.png",
            src: "./meditationmusic/meditation2.mp3"
        },
        {
            title: "Soothing Rain",
            artist: "Hatha Meditation Zone",
            img_src: "./musicimg/yogawaterfall.png",
            src: "./meditationmusic/soothingrain.mp3"
        },
        {
            title: "Yoga Wisdom",
            artist: "Hatha Yoga Zone",
            img_src: "./musicimg/wisdom.png",
            src: "./meditationmusic/yogawisdom.mp3"
        },
        {
            title: "Shamanic Healing",
            artist: "Yoga",
            img_src: "./musicimg/healing.png",
            src: "./meditationmusic/shamainichealing.mp3"
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
        <div className="c-player">
            <Player currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            nextSong={nextSong}
            songs={songs} />

        </div>
    )
}

export default MusicPlayer
