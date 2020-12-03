import React, { useState } from "react";
import { auth } from "../../firebase";
import tower from "./images/tower.gif";
import cat from "./images/cat.png";
import clippy from "./images/evilClippy.png";
import bug from "./images/moth.png";
import exp from "./images/explorer.png";
import popTart from "./images/poptart.png";
import bean from "./images/coffeeBeans.png";
import "./overworld.css";
import "/"
const Overworld = () => {
  const [health, setHealth] = useState(100);

  //Pass a function that calls setCharacterState

  return (

    <div>
      <div id="game">
        <div id="character"></div>
        <div id="cat"><img id="catImg" src={cat} alt="cat" /> </div>
        <div id="clippy"><img id="clippyImg" src={clippy} alt="clipy"></img></div>
        <div id="bug"><img id="bugImg" src={bug} alt="moth"></img></div>
        <div id="exp"><img id="expImg" src={exp} alt="internet"></img></div>

        <div id="tower1"><img src={tower} alt="server"></img></div>
        <div id="tower2"><img src={tower} alt="server"></img></div>
        <div id="tower3"><img src={tower} alt="server"></img></div>

        <div id="popTart"><img id="tartImg" src={popTart} alt="popTart"></img></div>
        <div id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>

      </div>

      {/* <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">

        <div className="overworld">
          <div className="md:pl-4">
            <h2 className="instructions">Character Name placeholder</h2>
            <h3 className="italic">Instructions placeholder</h3>
          </div>

          <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { auth.signOut() }}>Sign out</button>

        </div>

      </div> */}
    </div>
  )
};
export default Overworld;