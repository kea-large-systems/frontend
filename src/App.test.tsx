import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithUseContextUser } from "./test-util";

test("renders the app correctly", () => {
  renderWithUseContextUser(<App />, {});

  screen.getByText("Role Call");
});
