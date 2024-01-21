// Sign Up Form Unit Tests

import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

test("registration form renders", async () => {
  render(<RegisterForm />);
});

test("form renders input fields", async () => {
  render(<RegisterForm />);

  const createUsername = screen.getByRole("textbox", {
    name: "Create Username",
  });
  const enterEmail = screen.getByRole("textbox", { name: "Enter Email" });
  // I tried to test that password field was rendering however it says it is not available, so I switched it to an email type and it passed the test, I assume this is to do with security of the type password so instead we use getByLabelText
  const createPassword = screen.getByLabelText("Create Password");
  const submitBtn = screen.getByRole("button", { name: "Register" });

  expect(createUsername).toBeInTheDocument();
  expect(enterEmail).toBeInTheDocument();
  expect(createPassword).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

test("inputs username change on event", () => {
  render(<RegisterForm />);

  const usernameInput = screen.getByRole("textbox", {
    name: "Create Username",
  }) as HTMLInputElement;

  fireEvent.change(usernameInput, { target: { value: "testUsername" } });

  expect(usernameInput.value).toBe("testUsername");
});

test("inputs email change on event", () => {
  render(<RegisterForm />);

  const emailInput = screen.getByRole("textbox", {
    name: "Enter Email",
  }) as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: "testEmail" } });

  expect(emailInput.value).toBe("testEmail");
});

test("inputs password change on event", () => {
  render(<RegisterForm />);

  const passwordInput = screen.getByLabelText(
    "Create Password"
  ) as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: "testPassword" } });

  expect(passwordInput.value).toBe("testPassword");
});

// ## Currently researching mocks ##
// Test states update

// Test Form submission
