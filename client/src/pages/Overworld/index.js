import React, { useState } from "react";
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
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Overworld = () => {

  const data = {
    y: -768,
    x: 0,
    h: 64,
    w: 64,
  }

  const character = document.getElementById("character");
  // const block = document.getElementById("block");

  function jump() {
    console.log(character)
    character.classList.add("animate");

    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }

  //Pass a function that calls setCharacterState

  return (
    <div>
      <Row>
        <Header />
      </Row>
      <Row>
        <div id="game" class="card">

          <div id="character">
            <div className="zone-container">
              <Player
                sprite={"url(https://i.ibb.co/yg3Vrjg/ge-spritesheet.png)"}
                data={data}
              />
            </div>
          </div>
          <div id="cat"><img id="catImg" src={cat} alt="cat" /> </div>
          <div id="clippy"><img id="clippyImg" src={clippy} alt="clipy"></img></div>
          <div id="bug"><img id="bugImg" src={bug} alt="moth"></img></div>
          <div id="exp"><img id="expImg" src={exp} alt="internet"></img></div>
          <div id="tower1"><img src={tower} alt="server"></img></div>
          <div id="tower2"><img src={tower} alt="server"></img></div>
          <div id="tower3"><img src={tower} alt="server"></img></div>

          <div id="popTart"><img id="tartImg" src={popTart} alt="popTart"></img></div>
          <div id="bean"><img id="beanImg" src={bean} alt="coffeeBean"></img></div>
          <Button variant="dark" value="jump" onClick={e => jump(e.target.value)}>
            Jump! </Button>

        </div>
      </Row>

      <Row id="instructions">
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
          <div className="overworld">
            <div className="md:pl-4">
              <h3 className="italic">Instructions placeholder</h3>
            </div>
            <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { auth.signOut() }}>Sign out</button>
          </div>
        </div>
      </Row>
    </div >

  )
}

export default Overworld;
