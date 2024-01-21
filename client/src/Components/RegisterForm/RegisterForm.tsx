// Sign Up Form Component

// !!!!!! RLS IS CURRENTLY TURNED OFF IN PRODUCTION WHILST I RESEARCH RLS POLICIES !!!!!!!!!

import { Button, Form } from "react-bootstrap";
import "./RegisterForm.css";
import { ChangeEvent, useState } from "react";

function RegisterForm() {
  // States
  const [createUsername, setCreateUsername] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  // Functions
  // Create Username
  function handleCreateUsername(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCreateUsername(e.target.value);
    console.log(createUsername);
  }

  // Enter Email
  function handleEnterEmail(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEnterEmail(e.target.value);
    console.log(enterEmail);
  }

  // Create Password
  function handleCreatePassword(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCreatePassword(e.target.value);
    console.log(createPassword);
  }

  // // On Registration

  return (
    <Form>
      <Form.Group controlId="createUsername">
        <Form.Label>Create Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          onChange={handleCreateUsername}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="enterEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          onChange={handleEnterEmail}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="createPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          onChange={handleCreatePassword}
        ></Form.Control>
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
}

export default RegisterForm;
