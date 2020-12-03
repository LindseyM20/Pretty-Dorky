import React, { useState } from "react";

export default function Sprite({ data, image}) {
  const { y, x, h, w } = data;
  // const image = characterState.spriteImage
  return (
  <div
    style={{
      display: "inline-block",
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: "url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)",
      backgroundRepeat: "no-repeat",
      // this is negative to show from top down, where the image is in a 64x64 grid
      backgroundPosition: `-${x}px -${y}px`

    }}
  />
  )
}




// const CharAnimation = () => {

//   let tID; //we will use this variable to clear the setInterval()

//   // function stopAnimate() {
//   //     console.log("animation started")
//   //   clearInterval(tID);
//   // } //end of stopAnimate()

//   let position = 64; //start position for the image slicer
//   const interval = 160; //100 ms of interval for the setInterval()
//   const diff = 64; //diff as a variable for position offset

//   return (
//     tID = setInterval(() => {
//       document.getElementById("character").style.backgroundPosition =
//         `-${position}px 640px`;
//       //we use the ES6 template literal to insert the variable "position"

//       if (position < 312) {
//         position = position + diff;
//       }
//       //we increment the position by 256 each time
//       else {
//         position = 64;
//       }

//     }, interval) //end of setInterval
//   )

// }

// export default CharAnimation;
