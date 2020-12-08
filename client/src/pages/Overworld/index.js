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
  // console.log(characterState)
  let history = useHistory();

  // var character = document.getElementById("character");
  // var enemy = document.getElementsByClassName("enemy");

  // const battleState = {
  //   ...characterState,
  //   location: "/battle",
  // };

  const data = {
    y: -1536,
    x: 0,
    h: 128,
    w: 128,
  }


  const [position, setPosition] = useState({
    enemy: {},
    character: {},
  })

  if (characterState.location === "/overworld") {
    setInterval(() => {
      let enemyPosition = document.getElementById("clippy").getBoundingClientRect();
      let characterPosition = document.getElementById("character").getBoundingClientRect();
      setPosition({
        enemy: enemyPosition,
        character: characterPosition
      })
      if (position.enemy.x < position.character.x + position.character.width &&
        position.enemy.x + position.enemy.width > position.character.x &&
        position.enemy.y < position.character.y + position.character.height &&
        position.enemy.y + position.enemy.height > position.character.y) {
        console.log("collision detected")
      }
      // console.log("enemy: ", enemyPosition);
      // console.log("character: ", characterPosition);
    }, 2000)
  }


  function jump() {
    document.getElementById("character").classList.add("animate");
    setTimeout(function () {
      document.getElementById("character").classList.remove("animate");
    }, 500);
  }

  function pause() {
    console.log("Quick pause")

    document.getElementById("clippy").classList.add("holdUp");
    document.getElementById("tower1").classList.add("holdUp");
    document.getElementById("tower2").classList.add("holdUp");
    document.getElementById("tower3").classList.add("holdUp");
    document.getElementById("bean").classList.add("holdUp");

    // document.getElementById("pause").hide();

  }

  function play() {
    console.log("back to work")

    document.getElementById("clippy").classList.remove("holdUp");
    document.getElementById("bean").classList.remove("holdUp");
    document.getElementById("tower1").classList.remove("holdUp");
    document.getElementById("tower2").classList.remove("holdUp");
    document.getElementById("tower3").classList.remove("holdUp");

    // document.getElementById("pause").show();
    // document.getElementById("play").hide();

  }



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
            <div class="enemy enemyRun" id="clippy"><img id="clippyImg" src={clippy} alt="clipy"></img></div>
            {/* <div class= "enemy" id="bug"><img id="bugImg" src={bug} alt="moth"></img></div>
            <div class= "enemy" id="exp"><img id="expImg" src={exp} alt="internet"></img></div> */}
            <div class="tower1" id="tower1"><img src={tower} alt="server"></img></div>
            <div class="tower2" id="tower2"><img src={tower} alt="server"></img></div>
            <div class="tower3" id="tower3"><img src={tower} alt="server"></img></div>

            {/* <div class= "health" id="popTart"><img id="tartImg" src={popTart} alt="popTart"></img></div> */}
            <div class="health" id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>
            <Button id="jump" variant="dark" value="jump" onClick={e => jump(e.target.value)}>
              Jump! </Button>
            <Button id="pause" variant="dark" value="pause" onClick={e => pause(e.target.value)}>
              Tiny Human </Button>
            <Button id="play" variant="dark" value="play" onClick={e => play(e.target.value)}>
              Crisis Averted </Button>
          </div>
        </Row>
        <Row id="instructions">
          <Button variant="dark" onClick={() => {
            // setCharacterState(battleState);
            history.push("/battle", characterState);
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
                // replace setCharacterState({}) (clears state) 
                //with API.update to write to the database?
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
