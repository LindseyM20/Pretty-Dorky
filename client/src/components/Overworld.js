import React from "react";
// import Character from "./CharAnimation";
import Healthbar from "./Healthbar";
import { auth } from "../firebase";
import "./style.css";



const Overworld = () => {
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
          <Healthbar />
        </div>
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
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>

    

    </div>
  ) 
};
export default Overworld;