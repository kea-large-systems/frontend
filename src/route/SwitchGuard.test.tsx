import { render, screen } from "@testing-library/react";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { SwitchGuard } from "./SwitchGuard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { TestQueryProvider } from "../test-utils/TestQueryProvider";

describe("checks the guard functionality", () => {
  test("checks if the switch returns the proper routes for a guest user", () => {
    const history = createMemoryHistory();
    render(
      <Router navigator={history} location={history.location}>
        <SwitchGuard userType={UserType.GUEST} userId={""} />
      </Router>
    );
    screen.getByText("Login");
  });

  test("check that guest user does not have access to manage classes page", () => {
    const history = createMemoryHistory();
    history.push("/manage-classes");
    render(
      <Router navigator={history} location={history.location}>
        <SwitchGuard userType={UserType.GUEST} userId={""} />
      </Router>
    );
    screen.getByText("Page not Found 404");
  });

  test("checks student router guard", () => {
    const history = createMemoryHistory();
    render(
      <TestQueryProvider>
        <Router navigator={history} location={history.location}>
          <SwitchGuard userType={UserType.STUDENT} userId={"1"} />
        </Router>
      </TestQueryProvider>
    );
    screen.getByText("Attend Class");
  });

  test("check student router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    render(
      <Router navigator={history} location={history.location}>
        <SwitchGuard userType={UserType.STUDENT} userId={"1"} />
      </Router>
    );
    screen.getByText("Page not Found 404");
  });

  test("checks teacher router guard", () => {
    const history = createMemoryHistory();
    render(
      <Router navigator={history} location={history.location}>
        <TestQueryProvider>
          <SwitchGuard userType={UserType.TEACHER} userId={"1"} />
        </TestQueryProvider>
      </Router>
    );
    screen.getByText("CLASS");
  });

  test("check teacher router guard without access", () => {
    const history = createMemoryHistory();
    history.push("/login");
    render(
      <Router navigator={history} location={history.location}>
        <TestQueryProvider>
          <SwitchGuard userType={UserType.TEACHER} userId={"1"} />
        </TestQueryProvider>
      </Router>
    );
    screen.getByText("Page not Found 404");
  });
});
