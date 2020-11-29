import React from "react";


function animateScript() {

    let tID; //we will use this variable to clear the setInterval()
    
    // function stopAnimate() {
    //     console.log("animation started")
    //   clearInterval(tID);
    // } //end of stopAnimate()

    let position = 64; //start position for the image slicer
    const interval = 160; //100 ms of interval for the setInterval()
    const diff = 64; //diff as a variable for position offset
    
    tID = setInterval(() => {
    document.getElementById("character").style.backgroundPosition =
    `-${position}px 640px`; 
    //we use the ES6 template literal to insert the variable "position"

    if (position < 312) {
  position = position + diff;
  }
  //we increment the position by 256 each time
  else {
  position = 64;
}

  }, interval); //end of setInterval
  
  
}

export default animateScript