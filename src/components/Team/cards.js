import React, { useState } from "react";
import "./cards.css"

function Cards(props){
    return(
        <view>
<div className="card1">
  <div className="circle1">
    <img src={props.path} className="img1" alt="image"></img>
  </div>
  <div className="title">{props.head}</div>
  <div className="desc">{props.descri}</div>
</div>
</view>
    )
}

export default Cards;

