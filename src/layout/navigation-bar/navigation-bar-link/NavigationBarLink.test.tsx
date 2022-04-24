import { render } from "@testing-library/react";
import NavigationBarLink from "./NavigationBarLink";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe("checks if the navigation bar link works correctly", () => {
  test("checks if the link exists", () => {
    const { getByText } = render(
      <NavigationBarLink path={"/home"}>
        <span>some text</span>
      </NavigationBarLink>
    );
    getByText("some text");
  });

  test("checks if the link button alters the url on click", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBarLink path="/home">home</NavigationBarLink>
      </Router>
    );
    userEvent.click(getByText("home"));
    expect(history.location.pathname).toBe("/home");
  });
  test("checks if links can alter between different urls on several clicks", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBarLink path="/home">home</NavigationBarLink>
        <NavigationBarLink path="/next">next</NavigationBarLink>
      </Router>
    );
    userEvent.click(getByText("home"));
    expect(history.location.pathname).toBe("/home");
    userEvent.click(getByText("next"));
    expect(history.location.pathname).toBe("/next");
  });
});
