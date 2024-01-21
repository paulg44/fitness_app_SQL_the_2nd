// About Unit Tests

import { screen, render } from "@testing-library/react";
import About from "./About";

test("about page renders", () => {
  render(<About />);
  const header = screen.getByRole("heading");

  expect(header).toBeInTheDocument();
});
