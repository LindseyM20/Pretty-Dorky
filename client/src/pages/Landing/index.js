import React, { useState } from "react";
import CharContext from "../../utils/CharContext";
import CreateChar from "../../components/CreateChar";
import "./style.css";

const Landing = () => {
  const [newCharacter, setNewCharacter] = useState({
    CharName: "",
    HitPoints: 100, // Default value if the user doesn't enter a number
    Strength: 15
  })
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



  return (
    <CharContext.Consumer>
      <div className="mt-8">
        <h1 className="text-3xl mb-2 text-center font-bold">Continue Adventure</h1>
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <form className="">
            <input
              type="text"
              className="mt-1 mb-3 p-1 w-full"
              name="name"
              value={name}
              placeholder="Name your Character"
              id="charName"
            />
            <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
              onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
              Create
          </button>
          </form>
        </div>
      </div>
    </CharContext.Consumer>

  );
};
export default Landing;