import React, { useContext, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button"
import CharContext from "../../utils/CharContext";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';



function CardGroups(props) {
const {setCharacterState} = useContext(CharContext)
const [checked, setChecked] = useState(false);
  function captureStats() {
    console.log(props);
    setCharacterState({
      name: "",
      level: props.level,
      strength: props.strength,
      maxHealth: props.maxHealth,
      currentHealth: props.currentHealth,
      spriteImage: props.spriteImage,
      battleImage: props.battleImage
    })

  }

    return (
    <div className="card">
      <div className="img-container">
        <img className="cardImage" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          {/* <li>{props.description} 
          </li> */}
        </ul>
        <Button variant="outline-light"
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
          type="submit" 
          onClick = {captureStats}
          className="cardBtn" >
          {props.description}
        </Button>
        {/* <Button variant="secondary"
          type="submit" 
          href={props.deployment} target="_blank" 
          className="cardBtn" >
         Deployment
        </Button> */}
      </div>
    </div>
  );
}

export default CardGroups;