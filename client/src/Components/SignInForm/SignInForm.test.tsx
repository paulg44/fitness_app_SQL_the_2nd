// Sign In Form Unit Tests

import { render, screen, fireEvent } from "@testing-library/react";
import SignInForm from "./SignInForm";

test("sign in form renders", () => {
  render(<SignInForm />);
});

test("form renders input fields", () => {
  render(<SignInForm />);

  const enterUsername = screen.getByRole("textbox", {
    name: "Enter Email",
  });
  const enterPassword = screen.getByLabelText("Enter Password");

  expect(enterUsername).toBeInTheDocument();
  expect(enterPassword).toBeInTheDocument();
});

test("inputs email change on event", () => {
  render(<SignInForm />);

  const emailInput = screen.getByRole("textbox", {
    name: "Enter Email",
  }) as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: "testEmail" } });

  expect(emailInput.value).toBe("testEmail");
});

test("inputs password change on event", () => {
  render(<SignInForm />);

  const passwordInput = screen.getByLabelText(
    "Enter Password"
  ) as HTMLInputElement;

  fireEvent.change(passwordInput, { target: { value: "testPassword" } });

  expect(passwordInput.value).toBe("testPassword");
});
