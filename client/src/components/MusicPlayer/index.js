import React, {useState} from 'react'
import Player from "./musiccontrols"

const MusicPlayer = () => {

    const [songs, setSongs] = useStat([
        {
            title: "Buddha Music Santuary",
            artist: "Hatha Yoga",
            // img_src:
            src: "../../meditationmusic/Meditation1.mp3"
        },
        {
            title: "Meditation",
            artist: "Lucia Micarelli",
            // img_src:
            src: "../../meditationmusic/meditation2.mp3"
        }

    ])

    const [currentSong, setCurrentSong] = useState(0)
    const [nextSong, setnextSong] = useState(currentSong + 1)


    return (
        <div>
            <Player songs={songs[currentSong]} nextSong={songs[nextSong]} />
        </div>
    )
}

export default MusicPlayer
