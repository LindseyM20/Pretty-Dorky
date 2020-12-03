import React, { useState, useEffect, useContext } from "react";
// import CharContext from "../../utils/CharContext";
// import CreateChar from "../../components/CreateChar";
import Card from "../../components/Card";
import Row from 'react-bootstrap/Row'
import characterClasses from "../../characterClasses.json";
import Healthbar from "../../components/Healthbar"
import CharContext from "../../utils/CharContext";
import "./style.css";

function Landing() {
  const { setCharacterState, characterState } = useContext(CharContext)

  function handleSubmit(event) {
    event.preventDefault();
    // capture value from input field and set it to name value for charState
    console.log(event.target.characterName.value);
    setCharacterState({
      ...characterState,
      name: event.target.characterName.value
    })
    event.target.characterName.value = "";
    //  post character state values to mongo
    // API.posst (calls the imported API)
    // send player to /Overworld
    window.location.href='/overworld'

  }

  return (
    <body className="bodyStyle">
      <h1>Choose Your Character</h1>
      <section style={{ marginLeft: "5%", marginBottom: "15%" }}>
        <Row>
          {characterClasses.map(characters => (
            <Card
              id={characters.id}
              key={characters.id}
              name={characters.name}
              image={characters.image}
              description={characters.description}
              level={characters.level}
              strength={characters.strength}
              maxHealth={characters.maxHealth}
              currentHealth={characters.currentHealth}

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
          </form>
        </Row>

      </section>
    </body>
  )
}
export default Landing;
