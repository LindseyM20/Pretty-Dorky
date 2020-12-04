import React, { useState, useContext } from "react";
import CharContext from "../../utils/CharContext";

export default function Sprite({ data, image }) {
  const {characterState} = useContext(CharContext);
// these data values are handled in player.jsx for h and w, the position is 
//activated when the key is pressed
  const { y, x, h, w } = data;
  // which sprite skin loads is based on state determined on landing page
  const spriteImage = characterState.spriteImage
  return (
  <div
    style={{
      display: "inline-block",
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: `url(${spriteImage})`,
      // below is previously hard coded sprite url from testing
      // backgroundImage: "url(https://i.ibb.co/TkHc96X/largerrogue.png)",
      backgroundRepeat: "no-repeat",
      // this is negative to show from top down, left to right,
      //  where the image is in a 128x128 grid(headache!)
      backgroundPosition: `-${x}px -${y}px`

    }}
  />
  )
}