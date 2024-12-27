
import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard";

const Netflix = () => {
  
    return (
      <ul className = "grid grid-three--cols">
        {/* here we use map() for looping through the curElem  */}
        {seriesData.map((curElem) => (
          <SeriesCard  key={curElem.id} data={curElem} />
          ))}
      
      </ul>
    );
      
  }; 

export default Netflix;