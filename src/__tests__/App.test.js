import { render, screen } from "@testing-library/react";
import App from "./App.js";

test("renders Editor Component", () => {
  render(<App />);
  const editor = screen.getByText("Editor");
  const previewer = screen.getByText("Previewer");

  expect(editor).toBeInTheDocument();
  expect(previewer).toBeInTheDocument();
});
