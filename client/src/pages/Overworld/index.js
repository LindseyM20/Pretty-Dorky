import React, {useState} from "react";
// import Character from "./CharAnimation";
import Healthbar from "../../components/Healthbar";
import { auth } from "../../firebase";
import CharContext from "../../utils/CharContext";
import tower from "./images/tower.gif";
import cat from "./images/cat.png";
import "./overworld.css";

const Overworld = () => {
  const [health, setHealth] = useState(100);

  //Pass a function that calls setCharacterState
  
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="overworld">
        {/* <div
          style={{
            background:
                `url(https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png)  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
          className="border border-blue-300"
        ></div> */}
        <div id="healthbar">
          <Healthbar 
          current={health}
          max={100}
          />
        </div>
        <button onClick={() => setHealth(health - 10)}>Ouch</button>
        <div id="character">
          {/* <Character />   */}
           {/* <p id="image4" onLoad="animateScript()" onLoad="stopAnimate()">
           </p>        */}
          </div>
        <div className = "md:pl-4">
        <h2 className = "instructions">Character Name placeholder</h2>
        <h3 className = "italic">Instructions placeholder</h3>
        </div>
      </div>
      <div id="game">

        <div id="cat"><img id="catImg" src={cat}></img> </div>
        <div id="clippy"><img id="clippyImg" src="./imagesevilClippy.png"></img></div>
        <div id="bug"><img id="bugImg" src="./images/moth.png"></img></div>
        <div id="exp"><img id="expImg" src ="./images/explorer.png"></img></div>

        <div id="tower1"><img src={tower}></img></div>
        <div id="tower2"><img src={tower}></img></div>
        <div id="tower3"><img src={tower}></img></div>

        <div id="popTart"><img src="./images/poptart.png"></img></div>
        <div id="bean"><img src="./images/coffeeBeans.png"></img></div>

      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>

    

    </div>
  ) 
};
export default Overworld;