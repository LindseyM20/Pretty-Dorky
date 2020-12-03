import React from "react";
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";

// Here will be the character name, level, game name, and healthbar.
const Header = () => {

  return (
    <Container className="headerContainer">
      <Row>
        <Col>
          <Row>Character Name</Row>
          <Row>Level</Row>
        </Col>
        <Col xs={5}><h1>Pretty Dorky</h1></Col>
        <Col>
          <div id="healthbar">
            <Healthbar />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;
