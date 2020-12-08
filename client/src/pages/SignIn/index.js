import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      //added in
      .then(() => {
        window.location.href = "/landing"
      }).catch((error) => {
        console.log(error)
      })
      //below was previously continued from line 11
      .catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    // window.location.href="/landing";
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
      <div className="border text-center"
      /*border-white-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"*/
      >
        {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        {/* <Row> */}

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

        {/* <form className="">
          <label htmlFor="userEmail" className="blockEmail">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value = {email}
            placeholder="fancyWizard@email.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          
          <label htmlFor="userPassword" className="blockPassword">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value = {password}
            placeholder="Secret Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
        </form>
         
         </Row>  */}

        {/* <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button> */}
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
