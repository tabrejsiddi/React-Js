
// import  Netflix  from "./Components/Netflix";
// import "./components/Netflix.module.css";
// import {EventHandling} from "./Components/EventHandling";
// import "./Components/Netflix.module.css";
// import EventProps from "./Components/EventProps";
// import "./Components/EV.css";
// import {State} from "./Components/hooks/State";
// import EventPropogation from "./Components/EventPropogation";
import DeriveState from "./Components/hooks/DeriveState";
import { LiftingStateUp } from "./Components/LiftingStateUp";
export const App = () => {

  return (
    <section className="container">
      {/* <h1 calssname="card-heading"> List of Vest Netflix Series</h1> */}
    {/* <Netflix />; */}
    {/* <EventHandling/> */}
    {/* <EventProps/> */}
    {/* <EventPropogation/> */}
    {/* <DeriveState/> */}
    <LiftingStateUp />
    </section>
  )
};


 