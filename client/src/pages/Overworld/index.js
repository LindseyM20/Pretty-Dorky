import React, { useState, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import CharContext from "../../utils/CharContext";
import { UserContext } from "../../providers/UserProvider";
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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import API from "../../utils/API";

const Overworld = () => {
  const user = useContext(UserContext)
  const { characterState, setCharacterState } = useContext(CharContext)
  console.log(characterState)
  let enemyImage;

  if (characterState.level <2) {
    enemyImage=clippy
  }
  else if (characterState.level <5){
    enemyImage=exp
  }
  else if (characterState.level <7){
    enemyImage=bug
  }
  else{
    enemyImage=cat
  };

  let history = useHistory();

  const data = {
    y: -1536,
    x: 0,
    h: 128,
    w: 128,
  }

  // collision check

  if (window.location.pathname === '/overworld') {
    setInterval(() => {
      if (window.location.pathname === '/battle') {
        return;
      }
      let enemyPosition = document.getElementById("clippy").getBoundingClientRect();
      let characterPosition = document.getElementById("character").getBoundingClientRect();
      let itemPosition = document.getElementById("bean").getBoundingClientRect();

      const position = {enemy: enemyPosition, character: characterPosition, item: itemPosition}
      // If our character collides with the enemy, we will route to battle
      if (position.enemy.x < position.character.x + 75 &&
        position.enemy.x + position.enemy.width > position.character.x &&
        position.enemy.y < position.character.y + 100 &&
        position.enemy.y + position.enemy.height > position.character.y) {
        console.log("collision detected", enemyPosition, characterPosition);
        // setCharacterState({...characterState, location: "/battle"})
        history.push("/battle", characterState);
        return;
      } else if (position.item.x < position.character.x + 75 &&
        position.item.x + position.item.width > position.character.x &&
        position.item.y < position.character.y + 100 &&
        position.item.y + position.item.height > position.character.y) {
        console.log("health item!")
        setCharacterState({
          ...characterState,
          currentHealth: characterState.currentHealth += 2})

      } else {
        // console.log("no collision");
      }

    }, 500)
  }

  // end collision check

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

    document.getElementById("pause").classList.add("hide");
    document.getElementById("play").classList.add("show");

  }

  function play() {
    console.log("back to work")

    document.getElementById("clippy").classList.remove("holdUp");
    document.getElementById("bean").classList.remove("holdUp");
    document.getElementById("tower1").classList.remove("holdUp");
    document.getElementById("tower2").classList.remove("holdUp");
    document.getElementById("tower3").classList.remove("holdUp");

    document.getElementById("pause").classList.remove("hide");
    document.getElementById("play").classList.remove("show");

  }

  return (
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
          <div class="enemyRun" id="clippy"><img id="clippyImg" src={enemyImage} alt="clipy"></img></div>
          <div class="tower1" id="tower1"><img src={tower} alt="server"></img></div>
          <div class="tower2" id="tower2"><img src={tower} alt="server"></img></div>
          <div class="tower3" id="tower3"><img src={tower} alt="server"></img></div>
          <div class="health" id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>
          <Button id="jump" variant="dark" value="jump" onClick={e => jump(e.target.value)}>
            Jump! </Button>
        </div>
      </Row>
      <Row id="instructions">
        <div className="card overInst">
          <h3 style={{ fontSize: 20 }} className="italic">Use the arrow keys to run toward the enemy or away if it is too scary. Hint - if you run away you aren't fast enough so it's really best to face your fears. If your timing is right you can use the jump button to jump higher than your enemy, because they can't jump. They are filled with so much rage they can barely see straight, so jumping is hard for them. If you're low on health you can jump towards a health item as it passes by. As a coder few things will keep you moving, so hopefully you get a good one.</h3>
          <Button id="pause" variant="dark" value="pause" onClick={e => pause(e.target.value)}>
            Tiny Human </Button>
          <Button id="play" className="hide" variant="dark" value="play" onClick={e => play(e.target.value)}>
            Crisis Averted </Button>
          <button className="signOut w-full py-3 bg-red-600 mt-4 text-white"
            onClick={() => {
              auth.signOut();
              saveData();
              function saveData() {
                const nextState = {
                  ...characterState,
                };

                API.updateCharacter(user.uid, {
                  ...nextState
                  // update character by current user uid
                }).then(() => {
                  setCharacterState(nextState)
                  console.log("saved " + characterState)
                }).catch((error) => {
                  console.log(error)
                })

              }
              window.location.href = "/";

            }}>Sign out</button>
        </div>

      </Row>
    </div>
  )
}

export default Overworld;
