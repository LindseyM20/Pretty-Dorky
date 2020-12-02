import React, { useState } from "react";
import CharContext from "../utils/CharContext";
import { UserContext } from "../providers/UserProvider";

const CreateChar = () => {
  const user = useContext(UserContext); // Do we actually need this?
  let chosenChar;

  
  // Character buttons onclick: handleSubmit(chosenChar = rogue). 
  // "Create" button onclick: handleSubmit  (add name)
  // Should chosenChar = newCharacter?

  // Do we need a default empty placeholder for this data?
  const [newCharacter, setNewCharacter] = useState({
    userID: user.uid,
    name: "",
    level: 0,
    strength: 0,
    maxHealth: 0,
    currentHealth: 0,
  })

  const [rogue, setRogue] = useState({
    userID: user.uid,
    name: "",
    level: 1,
    strength: 30,
    maxHealth: 100,
    currentHealth: 100,
  })

  const [warrior, setWarrior] = useState({
    userID: user.uid,
    name: "",
    level: 1,
    strength: 25,
    maxHealth: 100,
    currentHealth: 100,
  })

  const [wizard, setWizard] = useState({
    userID: user.uid,
    name: "",
    level: 1,
    strength: 20,
    maxHealth: 90,
    currentHealth: 90,
  })

  const [ranger, setRanger] = useState({
    userID: user.uid,
    name: "",
    level: 1,
    strength: 20,
    maxHealth: 100,
    currentHealth: 100,
  })

  // On landing page, when a character's button is clicked, 
  // it'll set state to the values of the character they chose.
  // When the Create button is clicked,
  // capture the name value from the input field & add to state.
  // All of this character data is sent to mongo on form submit.

  function handleSubmit(event) {
    const { name, value } = event.target
    setNewCharacter({
      ...newCharacter,
      [name]: value
    })
  }

  // Post to DB

  return (
    // ??? Provider or Consumer?
    <CharContext.Provider value={newCharacter}>
      {/* JSX ?? */}
    </CharContext.Provider>
  )

}

export default CreateChar;
