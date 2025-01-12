import React from 'react'

const EventProps = () => {
    const HandleWelcomeUser= (user)=> {
        alert(`hey ,${user}`);
    };

    const handleHover= () => {
        alert(`Hey Thanks for hovering me`);
    };



  return (<>
  <WelcomeUser 
     onClick={()=> HandleWelcomeUser("tabrej")}
     onMouseEnter={handleHover}
     />

  
  </>
   
  )
}

export default EventProps

const WelcomeUser =(props) => {
    // by destructuring we write like this 
    const {onClick, onMouseEnter} = props;
    const handleGreeting = ()=> {
        console.log(`hey user, Welcome`);
        onClick();
    }
    return(
        <>
        <button onClick={onClick}>Click</button>
        <button onMouseEnter={onMouseEnter}>Hover me </button>
        <button onClick={handleGreeting}> Greeting</button>


        </>
    )
}