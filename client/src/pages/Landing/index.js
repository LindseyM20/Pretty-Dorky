import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card";
import Row from 'react-bootstrap/Row'
import characterClasses from "../../characterClasses.json";
// import Healthbar from "../../components/Healthbar"
import CharContext from "../../utils/CharContext";
import API from "../../utils/API";
import "./style.css";

function Landing() {
  const { setCharacterState, characterState } = useContext(CharContext)
  const user = useContext(UserContext)


  //This is what allows the endUser to navigate through pages while maintaining state
  let history = useHistory();
  // if (window.location.pathname !== "/overworld") {
  //     if (characterState.location === "/overworld") {
  //     history.push(characterState.location)
  //     }
  // }
  if (characterState.name)
    history.push(characterState.location)


    // adding a button to trigger get API call test
    //next step is to make this a check when the user signs in
function testAPIGet(event) {
  event.preventDefault();
  API.getCharacter(user.uid)
  .then((res) => {
    console.log("got request for character matching uid")
  console.log(res)
}
    
  )
}


  function handleSubmit(event) {
    event.preventDefault();
    // capture value from input field and set it to name value for charState
    console.log(event.target.characterName.value);
    // event.target.characterName.value = ""; 
    console.log(characterState)
    //  post character state values to mongo
    // API.posst (calls the imported API)

    if (!characterState.currentHealth) {
      alert("Please select a character")
      return;
    }

    if (event.target.characterName.value === "") {
      alert("Please name your character")
      return;
    }

    const nextState = {
      ...characterState,
      name: event.target.characterName.value,
      location: "/overworld",
    };

    API.createCharacter({
      ...nextState,
      uid: user.uid
      // send player to /Overworld (res call below threw an error, so commented out)
    }).then(() => {
      setCharacterState(nextState)
      //  window.location.href="/overworld" // this would overwrite state?
      // need a router to maintain state instead

      console.log("would move to overworld")
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className="bodyStyle">
      <h1>Choose Your Character</h1>
      <section style={{ marginLeft: "5%", marginBottom: "15%"}}>
        <Row className="cardRow text-center">
          {characterClasses.map(characters => (
            <Card className="text-center"
              id={characters.id}
              key={characters.id}
              name={characters.name}
              image={characters.image}
              description={characters.description}
              level={characters.level}
              strength={characters.strength}
              maxHealth={characters.maxHealth}
              currentHealth={characters.currentHealth}
              spriteImage={characters.spriteImage}
              battleImage={characters.battleImage}
            />

          ))}

        </Row>
        <Row>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              className="characterName"
              name="characterName"
              placeholder="Name"
              id="characterName"
            />
            <button className="createButton">
              Create Character
            </button>
          {/* test form */}
          </form>
          <form onSubmit={testAPIGet}>
            <button className="createButton">
              testAPIGet
            </button>
          </form>
        </Row>

      </section>
    </div>
  )
}
export default Landing;
