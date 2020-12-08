import React, {useContext} from "react";
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";

// Here we display the character name, level, game name, and healthbar.
const Header = () => {
  const {characterState} = useContext(CharContext);
  return (
    <Container 
      style= {{ 
        height: 0, 
        backgroundColor: "gray" }}
      className="headerContainer"
     >
      <Row>
        <Col className="characterInfo">
          <Row><div className="name">{characterState.name}</div></Row>
          <Row><div className="level">Level {characterState.level}</div></Row>
        </Col>
        <Col><h1 className="dork">Pretty Dorky</h1></Col>
        <Col className="healthbarCol">
          <div className="healthbarDiv" id="healthbar">
            <Healthbar />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Header;
