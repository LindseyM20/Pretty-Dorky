import React, { useState, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import CharContext from "../../utils/CharContext";
import Player from "../../components/player"
import Header from "../../components/Header";
import tower from "./images/tower.gif";
import cat from "./images/cat.png";
import clippy from "./images/evilClippy.png";
import bug from "./images/moth.png";
import exp from "./images/explorer.png";
import popTart from "./images/poptart.png";
import bean from "./images/coffeeBeans.png";
import "./overworld.css";
import API from "../../utils/API";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Overworld = () => {
  const { characterState, setCharacterState } = useContext(CharContext)
  console.log(characterState);
  let history = useHistory();
  if (characterState.location === "/battle"){history.push(characterState.location)}
  // var character = document.getElementById("character").getBoundingClientRect();
  // var enemy = document.getElementById("clippy").getBoundingClientRect();

  // const[position,setPosition]= useState({
  //   y:0,
  //   x:0,
  // })

  const data = {
    y: -1536,
    x: 0,
    h: 128,
    w: 128,
  }

  function jump() {
    document.getElementById("character").classList.add("animate");
    setTimeout(function () {
      document.getElementById("character").classList.remove("animate");
    }, 500);
  }
  

  // setInterval(() => {
  //   let enemyPosition = document.getElementById("clippy").getBoundingClientRect();
  //   console.log(enemyPosition.x);

  //     let characterPosition = /*player y-axis*/
  //     parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("top"));
  //     let enemyPosition =/*enemy x-axis*/
  //     parseInt(window.getComputedStyle(document.getElementById("clippy")).getPropertyValue("left"));
  //     if (enemyPosition < 70 && enemyPosition > 50 && characterPosition<500){
  //       console.log("you hit something");
  //     //   setCharacterState(battleState);
  //     //   history.push(characterState.location);
  //     }
  //   } while (characterState.location ==="/overworld");
  // }, 500);

  return (
    <body>
      <div>
        <Header />
        <Row>
          <div id="game" className="card">

            <div id="character">
              <div className="zone-container">
                <Player
                  sprite={characterState.spriteImage}
                  data={data}
                />
              </div>
            </div>
            {/* <div id="cat"><img id="catImg" src={cat} alt="cat" /> </div> */}
            <div id="clippy"><img id="clippyImg" src={clippy} alt="clipy"></img></div>
            {/* <div id="bug"><img id="bugImg" src={bug} alt="moth"></img></div>
            <div id="exp"><img id="expImg" src={exp} alt="internet"></img></div> */}
            <div id="tower1"><img src={tower} alt="server"></img></div>
            <div id="tower2"><img src={tower} alt="server"></img></div>
            <div id="tower3"><img src={tower} alt="server"></img></div>

            {/* <div id="popTart"><img id="tartImg" src={popTart} alt="popTart"></img></div> */}
            <div id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>
            <Button variant="dark" value="jump" onClick={e => jump(e.target.value)}>
              Jump! </Button>
          </div>
        </Row>
        <Row id="instructions">
        <Button variant="dark" onClick={() => {
                setCharacterState({...characterState,
                  location: "/battle",});
                history.push(characterState.location);
                setTimeout(function(){ 
                  console.log(characterState);
                  history.push(characterState.location);
                }, 1000);
              }}>
              Fight! </Button>
          <div className="card overInst">
            {/* <div className="overworld"> */}
            {/* <div className="md:pl-4"> */}
            <h3 style= {{ fontSize: 20 }}  className="italic">Use the arrow keys to run toward the enemy or away if it is too scary. Hint - if you run away you aren't fast enough so it's really best to face your fears. If your timing is right you can use the jump button to jump higher than your enemy, because they can't jump. They are filled with so much rage they can barely see straight, so jumping is hard for them. If you're low on health you can jump towards a health item as it passes by. As a coder few things will keep you moving, so hopefully you get a good one.</h3>
            {/* </div> */}

            <button className="signOut w-full py-3 bg-red-600 mt-4 text-white"
              onClick={() => {
                auth.signOut();
                // replace setCharacterState({}) (clears state) 
                //with API.update to write to the database?
                setCharacterState({});
                // API.updateCharacter(characterState.uid)
                // .then(() => {

                  window.location.href = "/";
                // }).catch((error) => {
                //     console.log(error)
                // });
              }}>Sign out</button>
        
            {/* </div> */}
          </div>

        </Row>
      </div>
    </body>
  )
}

export default Overworld;
