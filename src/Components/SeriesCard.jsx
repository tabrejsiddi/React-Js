// here we make a component for series card
export const SeriesCard = (props) => {
    // console.log(props);
    // here we do destructuring of props data and get the values
    const {id, img_url, name, rating, description, cast, genre,watch_url} = props.data;
        return (
            <li>
              <div>
             <img src = {img_url}
             alt={name} 
           width= "40%"
           height= "40%"
           />
           </div>
           <h2> Name : {name} </h2>
           <p> Summery:{description}</p>
           <h3> Rating:{rating} </h3>
           <p>Genre: {genre} </p>
           <p>Cast: { cast} </p>
           <a href = {watch_url} target = "_blank"> 
           <button> Watch Now </button>
           </a>
            </li>
    )
}