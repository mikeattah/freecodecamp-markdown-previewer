import { render, screen } from "@testing-library/react";
import Editor from "./containers/Editor.js";

test("renders Editor component", () => {
  // render component to the document
  render(<Editor />);
  screen.debug();
  // Arrange
  const heading = screen.getByRole("heading");
  heading.innerHTML = "Editor";
  const headingContent = heading.getAttribute("value");
  const textArea = screen.getByRole("textbox");
  textArea.innerHTML = "Hello World";
  const textContent = textArea.getAttribute("value");
  // Assert
  expect(textArea).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(textContent).toBe("Hello World");
  expect(headingContent).toBe("Editor");
});
