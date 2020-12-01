import React, {useState} from "react";

const CreateChar = () => {
  const [newCharacter, setNewCharacter] = useState({
    CharName: "",
    HitPoints: 100, // Default value if the user doesn't enter a number
    Strength: 15
  })

  function handleInputChange(event) {
    const {name, value} = event.target
    setNewCharacter({
      ...newCharacter,
      [name]:value
    })
  }

  // Post to DB

  return (
    // JSX
  )

}

export default CreateChar;
