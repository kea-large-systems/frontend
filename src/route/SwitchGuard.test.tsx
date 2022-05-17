import { render, screen } from "@testing-library/react";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { SwitchGuard } from "./SwitchGuard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { TestQueryProvider } from "../test-utils/TestQueryProvider";
import { UserProvider } from "../App";

describe("checks the guard functionality", () => {
  test("checks if the switch returns the proper routes for a guest user", () => {
    const history = createMemoryHistory();
    render(
      <UserProvider value={{ role: UserType.GUEST }}>
        <Router navigator={history} location={history.location}>
          <SwitchGuard />
        </Router>
      </UserProvider>
    );
    screen.getByText("Login");
  });

  test("check that guest user does not have access to manage classes page", () => {
    const history = createMemoryHistory();
    history.push("/manage-classes");
    render(
      <UserProvider value={{ role: UserType.GUEST }}>
        <Router navigator={history} location={history.location}>
          <SwitchGuard />
        </Router>
      </UserProvider>
    );
    screen.getByText("Page not Found 404");
  });

  test("checks student router guard", () => {
    const history = createMemoryHistory();
    render(
      <TestQueryProvider>
        <UserProvider value={{ role: UserType.STUDENT }}>
          <Router navigator={history} location={history.location}>
            <SwitchGuard />
          </Router>
        </UserProvider>
      </TestQueryProvider>
    );
    screen.getByText("Attend Class");
  });

  test("check student router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    render(
      <UserProvider value={{ role: UserType.STUDENT }}>
        <Router navigator={history} location={history.location}>
          <SwitchGuard />
        </Router>
      </UserProvider>
    );
    screen.getByText("Page not Found 404");
  });

  test("checks teacher router guard", () => {
    const history = createMemoryHistory();
    render(
      <TestQueryProvider>
        <UserProvider value={{ role: UserType.TEACHER, userId: "1" }}>
          <Router navigator={history} location={history.location}>
            <SwitchGuard />
          </Router>
        </UserProvider>
      </TestQueryProvider>
    );
    screen.getByText("CLASS");
  });

  test("check teacher router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    render(
      <TestQueryProvider>
        <Router navigator={history} location={history.location}>
          <UserProvider value={{ role: UserType.STUDENT, userId: "1" }}>
            <SwitchGuard />
          </UserProvider>
        </Router>
      </TestQueryProvider>
    );
    screen.getByText("Page not Found 404");
  });
});
