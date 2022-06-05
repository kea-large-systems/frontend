import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-util";

test("renders the app correctly", () => {
  render(<App />, {});

  screen.getByText("Role Call");
});
