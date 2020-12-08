import React, { useContext } from "react";
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";

// Here we display the character name, level, game name, and healthbar.
const Header = () => {
  const {characterState} = useContext(CharContext)
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












// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import CharContext from "../../utils/CharContext";
// import Healthbar from "../Healthbar";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

// // Here will be the character name, level, game name, and healthbar.
// const Header = () => {
//   const [health, setHealth] = useState(100);
//   // const {characterState} = useContext(CharContext)


//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Row>Character Name</Row>
//           <Row>Level</Row>
//           <Row>
//             <Link to="/overworld">To Overworld</Link>
//           </Row>
//         </Col>
     
//         <Col xs={5}><h1>Pretty Dorky</h1></Col>
//         <Col>
//           <div id="healthbar">
//             <Healthbar current={health} max={100} />
//             {/* <Healthbar current={characterState.currentHealth} max={characterState.maxHealth} /> */}
//           </div>
//           <button onClick={() => setHealth(health - 10)}>Ouch</button>
          
//         </Col>
//       </Row>
//     </Container>
 

//   )
// }

// export default Header;
