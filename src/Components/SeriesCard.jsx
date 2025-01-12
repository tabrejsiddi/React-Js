import style from "./Netflix.module.css";
import styled from 'styled-components'
// here we make a component for series card
export const SeriesCard = (props) => {
    // console.log(props);
    // here we do destructuring of props data and get the values
    const {id, img_url, name, rating, description, cast, genre,watch_url} = props.data;
    // const btn_style = {
        // padding:"1.2rem 2.4rem",
        // border: "none",
        // fontSize: "1.6rem",
        // backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
        // color: 'var( --bg-color)',
        // fontWeight: "bold",
        // cursor:"pointer",
    //   }    
    
    // we make here style-components
    const SecondaryButtonStyle = styled.button (
        {
            padding:"1.2rem 2.4rem",
            border: "none",
            fontSize: "1.6rem",
            backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
            color: 'var( --bg-color)',
            fontWeight: "bold",
            cursor:"pointer"  
        }
    );

    // Now we use template literals to make styled-components

    const ButtonStyle = styled.button `
        
            padding: 1.2rem 2.4rem;
            border: none;
            fontSize: "1.6rem";
            background-color: ${(props) => props.rating>=8.5 ? "#7dcea0" : "#f7dc6f"};
            color: 'var( --bg-color)';
            font-weight: bold;
            cursor:pointer  ;
       `
    

    
    const ratingClass = rating>=8.5 ? style['super-hit'] : style.average;

    return (
            <li className={style.card}>
              <div>
             <img src = {img_url}
             alt={name} 
           width= "40%"
           height= "40%"
           />
           </div>
           <div className={style['card-containt']}>
           <h2> Name : {name} </h2>
           <h3> Rating:
            <span className={`${style.rating} ${ratingClass}`}>
           {rating}
           </span> 
           </h3>
           {/* here we use tailwind css  only on <p> tag for summary*/} 
           <p className="text-3xl font-bold underline"> Summery:{description}</p>
           <p >Genre: {genre} </p>
           <p >Cast: { cast} </p>
           <a href = {watch_url} target = "_blank"> 
           {/* <button style={btn_style }> Watch Now </button> */}
           <SecondaryButtonStyle rating={rating}> Watch Now </SecondaryButtonStyle>
           </a>
           </div>
            </li>
    )
}