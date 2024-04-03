import React from "react";
import "../styles/Card.css";
export default function Card(props){
    return(
       <>
       <div className="container">
        {props.title && 
        <>
        <div className="title"> {props.title} </div>
        <hr></hr>
        </>
        }
       </div>
       </> 
    );
}