import React from 'react'
import { RiPlayCircleLine } from "react-icons/ri";
import { Button } from 'react-bootstrap';
import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { AiOutlinePauseCircle } from "react-icons/ai";
import "./style.css"


const MusicControls = (props) => {
    return (
        <div className="c-player--control">
            <Button className="skipBtn" onClick={() => props.changeSong(false)} ><IoPlayBack/></Button>
            <Button className="playBtn" onClick={() => props.setIsPlaying(!props.isPlay)}>{props.isPlay ? <AiOutlinePauseCircle/> : <RiPlayCircleLine/>} </Button>
            <Button className="fastBtn" onClick={() => props.changeSong()}><IoPlayForward/></Button>
        </div>
    )
}

export default MusicControls