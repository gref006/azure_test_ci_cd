import { render, screen } from "@testing-library/react";
import App from "../../App.tsx";

test("Find string ''Vite + React'", async () => {
  render(<App />);

  const stringElement = screen.getByText(/Vite \+ React/i);
  expect(stringElement).toBeInTheDocument();
});
