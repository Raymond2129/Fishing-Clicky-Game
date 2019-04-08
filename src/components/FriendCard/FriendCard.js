//Need to setup a reusable Friendcard for all of the fishys
import React from "react";
import "./FriendCard.css";
//import { prependOnceListener } from "cluster";

//Need to pass in all of the fish images into the card 12 total
const FriendCard = props => (
    <div className= "card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

//need to export
export default FriendCard;