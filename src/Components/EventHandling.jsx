
import "./EV.css";
export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Hey I am onClick Event");
    // }
    const handleButtonClick = () => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.type);
        alert("Hey I am onClick Event");
    }

    const handleWelcomeUsers = (user) => {
        console.log(`hi ${user}, Welcome to my website`);
       
    }


    return(
        <>
        {/* // ?- Function Components with Named Functions */
        /*Remember how we haven't called this function, if you call this 
        function here then it will run without even clicking. you just need
        to pass reference and  not call here.*/}
         <button onClick={ handleButtonClick}> click me</button>
         <br/>
         {/* In react , event handlers receive the event object as an argument by default. However, when
         you use an arrow funcion directly in the onClick atribute
         without passing the event explicitly, React doesn't pass 
         ths event object to your handler function . This is 
         because the arrow function creates a new function and calls your
         handler without passing any arguments */}
         <button onClick={ ()=> handleButtonClick()}> click me</button>
         <br/>
         {/* /* //? Inline Event Handlers}  */}
         <button onClick={(event)=> console.log(event)}>Inline function</button>
          <br/>
         {/* function components with inline Arrow function */}
         <button onClick = {()=> alert("hey i am inline event function")}>Inline Arrow function</button>
         {/* // Passing Arguments to event handlers */}
         <button onClick={ ()=> handleWelcomeUsers("John")}> click me</button>

        </>
    )
}