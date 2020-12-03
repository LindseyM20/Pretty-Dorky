import React, { useState } from "react";
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Here will be the character name, level, game name, and healthbar.
const Header = () => {
  const [health, setHealth] = useState(100);


  return (
    <Container>
      <Row>
        <Col>
          <Row>Character Name</Row>
          <Row>Level</Row>
        </Col>
        <Col xs={5}><h1>Pretty Dorky</h1></Col>
        <Col>
          <div id="healthbar">
            <Healthbar current={health} max={100} />
          </div>
          <button onClick={() => setHealth(health - 10)}>Ouch</button>
        </Col>
      </Row>
    </Container>
 

  )
}

export default Header;
