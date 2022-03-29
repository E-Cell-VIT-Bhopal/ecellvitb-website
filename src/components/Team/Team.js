import "./Team.css";
import Cards from "./cards";
import Item from "./item.js";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 5 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3},
];

function Teams() {
  return (
    <view>
    <div className="our-team">Our Team</div>

    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <Item>
          <Cards path="https://cdn.discordapp.com/attachments/941554263128150036/958046986446176306/curved_logo.png" head="Name1" descri="Lorem"></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
          <Item>
          <Cards></Cards>
          </Item>
        </Carousel>
      </div>
    </div>
    </view>
  );
}

export default Teams;
