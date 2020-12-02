import React, { useState, Component } from "react";
// import CharContext from "../../utils/CharContext";
// import CreateChar from "../../components/CreateChar";
import Card from "../../components/Card";
import Row from 'react-bootstrap/Row'
import characterClasses from "../../characterClasses.json";
import CharContext from "../../utils/CharContext";
import "./style.css";

// updates characterName to charContext? Hopefully?
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData
  const { name, value } = event.target
 console.log(name)


  // setCharacterState(name)e.target.value
}
class Landing extends Component {
  state = {
    characterClasses
  }


  render() {
    return (
      <body className="bodyStyle">
        <h1>Choose Your Character</h1>
        <section style={{ marginLeft: "5%", marginBottom: "15%" }}>
          <Row>
            {this.state.characterClasses.map(characters => (
              <Card
                id={characters.id}
                key={characters.id}
                name={characters.name}
                image={characters.image}
                description={characters.description}
                level={characters.level}
                strength={characters.strength}
                maxHealth={characters.maxHealth}
                currentHealth={characters.currentHealth}

              />

            ))}

          </Row>
          <Row>
          <form onSubmit={this.handleSubmit}>
            <input
              type="name"
              className="characterName"
              // name="characterName"
              value="characterName"
              placeholder="Name"
              id="characterName"

            // future event here to set CharContext
            // onChange = {(event) => onChangeHandler(event)}
            />
            <button className="createButton">
            {/* onClick = {(event) => {handleSubmit(event)}} */}
            Create Character
          </button>
          </form>
          </Row>
        </section>
      </body>
    )
  }
}
export default Landing;
// const Landing = () => {
//   const [newCharacter, setNewCharacter] = useState({
//     CharName: "",
//     HitPoints: 100, // Default value if the user doesn't enter a number
//     Strength: 15
//   })
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  // const signInWithEmailAndPasswordHandler = (event, email, password) => {
  //   event.preventDefault();
  //   auth.signInWithEmailAndPassword(email, password).catch(error => {
  //     setError("Error signing in with password and email!");
  //     console.error("Error signing in with password and email", error);
  //   });
  // };
  // // updates email and password in state variables
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.currentTarget;

  //   if (name === 'userEmail') {
  //     setEmail(value);
  //   }
  //   else if (name === 'userPassword') {
  //     setPassword(value);
  //   }
  // };



//   return (
//     <CharContext.Consumer>
//       <div className="mt-8">
//         <h1 className="text-3xl mb-2 text-center font-bold">Continue Adventure</h1>
//         <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
//           {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
//           <form className="">
//             <input
//               type="text"
//               className="mt-1 mb-3 p-1 w-full"
//               name="name"
//               value={name}
//               placeholder="Name your Character"
//               id="charName"
//             />
//             <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
//               onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
//               Create
//           </button>
//           </form>
//         </div>
//       </div>
//     </CharContext.Consumer>

//   );
// };
// export default Landing;