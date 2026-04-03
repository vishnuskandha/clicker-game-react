import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders memory match game title", () => {
  render(<App />);
  const titleElement = screen.getByRole("heading", { name: /memory match game/i });
  expect(titleElement).toBeInTheDocument();
});
