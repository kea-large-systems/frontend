import { render, screen } from "@testing-library/react";
import { AuthorizedNavigationBar, UserType } from "./AuthorizedNavigationBar";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { UserProvider } from "../../../App";

describe("checks that the authorized navigation bar is being loaded correctly", () => {
  test("checks if the student navbar is being rendered for a student user", () => {
    const history = createMemoryHistory();
    render(
      <UserProvider value={{ role: UserType.STUDENT }}>
        <Router location={history.location} navigator={history}>
          <AuthorizedNavigationBar />
        </Router>
      </UserProvider>
    );

    screen.getByText("Att. Class");
    screen.getByText("Check Att.");
  });

  test("checks if the teacher navbar is being rendered for a teacher user", () => {
    const history = createMemoryHistory();
    render(
      <UserProvider value={{ role: UserType.TEACHER }}>
        <Router location={history.location} navigator={history}>
          <AuthorizedNavigationBar />
        </Router>
      </UserProvider>
    );

    screen.getByText("Manage Classes");
  });

  test("checks if the guest navbar is being rendered for a guest user", () => {
    const history = createMemoryHistory();
    render(
      <UserProvider value={{ role: UserType.GUEST }}>
        <Router location={history.location} navigator={history}>
          <AuthorizedNavigationBar />
        </Router>
      </UserProvider>
    );

    screen.getByText("Login");
  });
});
