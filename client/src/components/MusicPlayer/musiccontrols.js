import React from 'react'
import PlayerDetails from "./playerdetais"
const MusicControls = (props) => {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={props.song}/>
            {/* Controls */}
            <p><strong>Next Up:</strong>{props.nextSong.title} by {props.nextSong.artist} </p>
        </div>
    )
}

export default MusicControls
