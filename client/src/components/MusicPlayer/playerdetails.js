import React from 'react'
import "./style.css"


const PlayerDetails = (props) => {
    return (
        <div className="c-player-details">
            <div className="details-img">
                <img className="musicImg" src={props.song.img_src} alt="song"/>
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetails
