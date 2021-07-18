import { render, screen } from "@testing-library/react";
import Previewer from "./components/Previewer.js";

test("renders Previewer component", () => {
  // render component to the document
  render(<Previewer />);
  screen.debug();
  // Arrange
  const heading = screen.getByRole("heading");
  heading.innerHTML = "Previewer";
  const headingContent = heading.getAttribute("value");
  const textArea = screen.getByRole("textbox"); // change
  textArea.innerHTML = "Hello World";
  const textContent = textArea.getAttribute("value");
  // Assert
  expect(textArea).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(textContent).toBe("Hello World");
  expect(headingContent).toBe("Editor");
});
