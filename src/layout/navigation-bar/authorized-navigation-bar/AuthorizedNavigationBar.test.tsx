import { render, screen } from "@testing-library/react";
import { AuthorizedNavigationBar, UserType } from "./AuthorizedNavigationBar";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe("checks that the authorized navigation bar is being loaded correctly", () => {
  test("checks if the student navbar is being rendered for a student user", () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><AuthorizedNavigationBar userType={UserType.STUDENT} /></Router>);

    screen.getByText("Att. Class");
    screen.getByText("Check Att.");
  });

  test("checks if the teacher navbar is being rendered for a teacher user", () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><AuthorizedNavigationBar userType={UserType.TEACHER} /></Router>);

    screen.getByText("Manage Classes");
  });

  test("checks if the guest navbar is being rendered for a guest user", () => {
    const history = createMemoryHistory();
    render(<Router location={history.location} navigator={history}><AuthorizedNavigationBar userType={UserType.GUEST} /></Router>);

    screen.getByText("Login");
  });
});