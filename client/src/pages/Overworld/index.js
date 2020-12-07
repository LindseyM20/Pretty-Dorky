import React, { useState, useContext } from "react";
import { auth } from "../../firebase";
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
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Overworld = () => {
  const { characterState, setCharacterState } = useContext(CharContext)
  console.log(characterState)
  let history = useHistory();

  // var character = document.getElementById("character");
  // var enemy = document.getElementsByClassName("enemy");
  const battleState = {
    ...characterState,
    location: "/battle",
  };

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

  function pause() {
    console.log("Quick pause")

    document.getElementsByClassName("enemy").classList.add("pause")
    document.getElementsByClassName("health").classList.add("pause");
    document.getElementsByClassName("tower").classList.add("pause");
    document.getElementById("play").show();
    document.getElementById("pause").hide();

  }

  function play() {
    console.log("back to work")

    document.getElementsByClassName("enemy").classList.add("pause")
    document.getElementsByClassName("health").classList.add("pause");
    document.getElementsByClassName("tower").classList.add("pause");
    document.getElementById("pause").show();
    document.getElementById("play").hide();

  }

  // let checkCollision = setInterval(function () {
  //   let characterPosition =
  //       parseInt(window.getComputedStyle(document.getElementById("character")).getPropertyValue("top"));
  //   let enemyHeight =
  //       parseInt(window.getComputedStyle(document.getElementById("clippy")).getPropertyValue("top"));
  //   let enemyPosition =
  //       parseInt(window.getComputedStyle(document.getElementById("clippy")).getPropertyValue("left"));
  //   //     console.log(enemyPosition);
  //   // console.log(characterPosition);
  //   if (enemyPosition < 120 && enemyPosition > 100 && ((characterPosition+enemyHeight)/2 <= 50)){
  //     console.log("you hit something");
  //     setCharacterState(battleState);
  //     history.push(characterState.location);
  //   }
  // }, 10);

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
            {/* <div class= "enemy" id="cat"><img id="catImg" src={cat} alt="cat" /> </div> */}
            <div class="enemy" id="clippy"><img id="clippyImg" src={clippy} alt="clipy"></img></div>
            {/* <div class= "enemy" id="bug"><img id="bugImg" src={bug} alt="moth"></img></div>
            <div class= "enemy" id="exp"><img id="expImg" src={exp} alt="internet"></img></div> */}
            <div class="tower" id="tower1"><img src={tower} alt="server"></img></div>
            <div class="tower" id="tower2"><img src={tower} alt="server"></img></div>
            <div class="tower" id="tower3"><img src={tower} alt="server"></img></div>

            {/* <div class= "health" id="popTart"><img id="tartImg" src={popTart} alt="popTart"></img></div> */}
            <div class="health" id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>
            <Button id="jump" variant="dark" value="jump" onClick={e => jump(e.target.value)}>
              Jump! </Button>
            <Button id="pause" variant="dark" value="pause" onClick={e => pause(e.target.value)}>
              Tiny Human </Button>
            <Button id="play" variant="dark" value="play" onClick={e => play(e.target.value)}>
              Attack!! </Button>
          </div>
        </Row>
        <Row id="instructions">
          <Button variant="dark" onClick={() => {
            setCharacterState(battleState);
            history.push(characterState.location);
          }}>
            Fight! </Button>
          <div className="card overInst">
            {/* <div className="overworld"> */}
            {/* <div className="md:pl-4"> */}
            <h3 style={{ fontSize: 20 }} className="italic">Use the arrow keys to run toward the enemy or away if it is too scary. Hint - if you run away you aren't fast enough so it's really best to face your fears. If your timing is right you can use the jump button to jump higher than your enemy, because they can't jump. They are filled with so much rage they can barely see straight, so jumping is hard for them. If you're low on health you can jump towards a health item as it passes by. As a coder few things will keep you moving, so hopefully you get a good one.</h3>
            {/* </div> */}

            <button className="signOut w-full py-3 bg-red-600 mt-4 text-white"
              onClick={() => {
                auth.signOut();
                setCharacterState({});

                window.location.href = "/";

              }}>Sign out</button>

            {/* </div> */}
          </div>

        </Row>
      </div>
    </body>
  )
}

export default Overworld;
