import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { DefaultNavigationBar } from "./DefaultNavigationBar";

describe("checks default navigation bar", () => {
  test("checks that the entries is loaded as expected, application name + log in", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <DefaultNavigationBar />
      </Router>
    );
    getByText("Role Call");
    getByText("Login");
  });
});
