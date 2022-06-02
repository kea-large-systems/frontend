import { screen } from "@testing-library/react";
import { AuthorizedNavigationBar, UserType } from "./AuthorizedNavigationBar";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { renderWithUseContextUser } from "../../../test-util";

describe("checks that the authorized navigation bar is being loaded correctly", () => {
  test("checks if the student navbar is being rendered for a student user", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <AuthorizedNavigationBar />
      </Router>,
      { role: UserType.STUDENT }
    );

    screen.getByText("Att. Class");
    screen.getByText("Check Att.");
  });

  test("checks if the teacher navbar is being rendered for a teacher user", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <AuthorizedNavigationBar />
      </Router>,
      { role: UserType.TEACHER }
    );

    screen.getByText("Manage Classes");
  });

  test("checks if the guest navbar is being rendered for a guest user", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <AuthorizedNavigationBar />
      </Router>,
      { role: UserType.GUEST }
    );

    screen.getByText("Login");
  });
});
