import React from "react";
import Header from "./Header";
import Info from "./Info";

function Card(props) {
    return (
        <div className="term">
        <Header emoji ={props.emoji} name ={props.name} />
        <Info meaning = {props.meaning} />
        </div>
    )
}
export default Card;
