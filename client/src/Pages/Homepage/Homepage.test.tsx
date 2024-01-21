// Homepage Unit Tests
import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";

// Basic render test
test("homepage renders", () => {
  render(<Homepage />);
  const header = screen.getByRole("heading");

  expect(header).toBeInTheDocument();
});
