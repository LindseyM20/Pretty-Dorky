<<<<<<< HEAD
import React, {useContext} from "react";
=======
import React, { useContext } from "react";
>>>>>>> fde39f856aa13eef5d545de0b02727670048e095
import CharContext from "../../utils/CharContext";
import Healthbar from "../Healthbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
<<<<<<< HEAD

// import Character from 
const Header = () => {
  const {characterState} = useContext(CharContext);
=======
// import "./style.css";
// Here will be the character name, level, game name, and healthbar.
const Header = () => {
  const {characterState} = useContext(CharContext)
>>>>>>> fde39f856aa13eef5d545de0b02727670048e095
  return (
    <Container className="headerContainer">
      <Row>
        <Col>
<<<<<<< HEAD
  <Row>{characterState.name}</Row>
          <Row>Level:{characterState.level}</Row>
=======
          <Row>Character Name {characterState.name}</Row>
          <Row>Level {characterState.level}</Row>
>>>>>>> fde39f856aa13eef5d545de0b02727670048e095
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
<<<<<<< HEAD
export default Header;
=======
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
>>>>>>> fde39f856aa13eef5d545de0b02727670048e095
