import React from "react";
import useSound from "use-sound";
import audioFile from '../../assets/Music/port.mp3';
import { useState } from "react";
const Audio=()=>{
    const [playSound] = useSound(audioFile, { volume: 0.1 });
    const[playstate,setPlaystate]=useState(true)
    const handleClick = () => {
        playSound();
        setPlaystate(false);
        // maybe you want to add other things here?
      }
    return(<>
    {playstate?
    <button  id='play' onClick={handleClick}>PLAY Sound</button>:null}
        </>
)
}
export default Audio;