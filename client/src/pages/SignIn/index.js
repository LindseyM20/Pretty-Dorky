import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CharContext from "../../utils/CharContext";
import Overworld from "../../pages/Overworld";
import { auth } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import "./style.css";

const SignIn = () => {
  const user = useContext(UserContext);
  const { characterState, setCharacterState } = useContext(CharContext);
  let history = useHistory();



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      //added in
      .then(() => {
        checkSaveData();
        // window.location.href="/landing"
      }).catch((error) => {
        console.log(error)
      })
      //below was previously continued from line 11
      .catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });


    // test for api call to check for existing character at sign in

    function checkSaveData() {
      if (characterState)
      API.getCharacter(user.uid)
        .then(data => {
          console.log("getting character at sign in", { data });

          const nextState = {
            ...characterState,
            battleImage: data.data.battleImage,
            currentHealth: data.data.currentHealth,
            level: data.data.level,
            location: "/overworld",
            maxHealth: data.data.maxHealth,
            name: data.data.name,
            spriteImage: data.data.spriteImage,
            strength: data.data.strength
          };

          setCharacterState(nextState);
          console.log(characterState);
          console.log(" name here" + data.data.name);

          history.push("/overworld", characterState)
        }).catch((res, error) => {
          console.log(error)
        })
    }
  };
  // updates email and password in state variables
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
    // !!! Change this later to only route to landing if dead! Otherwise, go to overworld!!!
    // window.location.href="/landing";
  };

  return (
    <div className="bodyStyle">

      <h1 className="text-3xl mb-2 text-center font-bold">Pretty Dorky</h1>
      <h4 className="adventure">Continue Adventure</h4>
      <div className="border">
        {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}


        <Form className="signInForm text-center">
          <Form.Row style={{ padding: "2%" }}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="fancyWizard@email.com"
                className="my-1 p-1 w-full"
                name="userEmail"
                value={email}
                id="userEmail"
                onChange={(event) => onChangeHandler(event)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="8 character secret"
                className="mt-1 mb-3 p-1 w-full"
                name="userPassword"
                value={password}
                id="userPassword"
                onChange={(event) => onChangeHandler(event)} />
            </Form.Group>
          </Form.Row>

          <Button variant="info" className="signInBtn"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password)
            }}>
            Sign In
        </Button>
        </Form>
      </div>

      <p className="text-center my-3">or</p>
      <p className="text-center my-3">
        Wanting to embark on a new adventure?{" "}
        <span className="signUp">

          <Link to="signUp" className="text" style={{ textDecoration: 'none' }}>
            Sign up here
          </Link>{" "}

        </span>
        <br />{" "}
        {/* <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
              </Link> */}
      </p>

    </div>
  );
};
export default SignIn;
