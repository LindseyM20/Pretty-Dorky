import React, {useContext} from "react";
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// import Character from 
const Header = () => {
  const {characterState} = useContext(CharContext);
  return (
    <Container>
      <Row>
        <Col>
  <Row>{characterState.name}</Row>
          <Row>Level:{characterState.level}</Row>
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