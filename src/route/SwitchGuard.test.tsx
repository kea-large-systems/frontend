import { screen } from "@testing-library/react";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { SwitchGuard } from "./SwitchGuard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { renderWithUseContextUser } from "../test-util";

describe("checks the guard functionality", () => {
  test("checks if the switch returns the proper routes for a guest user", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.GUEST }
    );
    screen.getByText("Login");
  });

  test("check that guest user does not have access to manage classes page", () => {
    const history = createMemoryHistory();
    history.push("/manage-classes");
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.GUEST }
    );
    screen.getByText("Page not Found 404");
  });

  test("checks student router guard", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.STUDENT }
    );
    screen.getByText("Attend Class");
  });

  test("check student router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.STUDENT }
    );
    screen.getByText("Page not Found 404");
  });

  test("checks teacher router guard", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.TEACHER, userId: "1" }
    );
    screen.getByText("CLASS");
  });

  test("check teacher router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    renderWithUseContextUser(
      <Router navigator={history} location={history.location}>
        <SwitchGuard />
      </Router>,
      { role: UserType.STUDENT, userId: "1" }
    );
    screen.getByText("Page not Found 404");
  });
});
