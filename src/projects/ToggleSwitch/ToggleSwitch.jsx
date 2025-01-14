import "./ToggleSwitch.css";
import { useState } from "react";
export const ToggleSwitch = () => {

    const [isOn , setIsOn] = useState(false);
    return(
        <>
        <div 
        className= "toggel-switch"
        style={{backgroundColor: isOn ? "green" : "" }}
        onClick={() => setIsOn(!isOn)}
        >
            <div className = {` switch ${isOn ?"on" :"off"}` }>
                <span className = " switch-state">{isOn ?"on" :"off"}</span>
            </div>
        </div>
        </>
    )
}