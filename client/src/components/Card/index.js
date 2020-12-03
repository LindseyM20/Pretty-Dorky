import React, { useContext } from "react";
import "./style.css";
import Button from "react-bootstrap/Button"
import CharContext from "../../utils/CharContext";
// import { Link } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';



function CardGroups(props) {
const {setCharacterState} = useContext(CharContext)

  function captureStats() {
    setCharacterState({
      name: "",
      level: props.level,
      strength: props.strength,
      maxHealth: props.maxHealth,
      currentHealth: props.currentHealth,
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
        <Button variant="secondary" 
          type="submit" 
          onClick = {captureStats}
          className="cardBtn" >
          Select {props.description}
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