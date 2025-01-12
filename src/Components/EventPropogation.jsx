import React from 'react'
import "./EV.css";

const EventPropogation = () => {
    const  handleGrandParent = () => {
        console.log("GrandParent clicked");

    }
    const handleParentClick = () => {
        console.log("Parent clicked");

    }
    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropogation();
        console.log("child cliked");

    }
  return (
    <section className = "main-div">
        <div className= "g-div" onClick = {handleGrandParent}>
            <div className = "p-div" onClick={handleParentClick}>
                <button className = "c-div" onClick={handleChildClick}>
                    Child Div
                </button>
            </div>
        </div>
    </section>
  )
}

export default EventPropogation