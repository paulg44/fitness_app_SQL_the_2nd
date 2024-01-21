// Sign In Form Component

import { Button, Form } from "react-bootstrap";
import "./SignInForm.css";
import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";

function SignInForm() {
  // const navigate = useNavigate();
  // States
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Functions
  // Email
  function handleSignInEmail(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSignInEmail(e.target.value);
    console.log(signInEmail);
  }

  // Password
  function handleSignInPassword(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSignInPassword(e.target.value);
    console.log(signInPassword);
  }

  // Sign in function

  return (
    <Form>
      <Form.Group controlId="enterEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          onChange={handleSignInEmail}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="enterPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          onChange={handleSignInPassword}
        ></Form.Control>
        <Button type="submit">Sign In</Button>
      </Form.Group>
    </Form>
  );
}

export default SignInForm;
