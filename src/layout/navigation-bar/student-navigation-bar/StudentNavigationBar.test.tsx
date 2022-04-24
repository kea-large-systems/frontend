import { render } from "@testing-library/react";
import { StudentNavigationBar } from "./StudentNavigationBar";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("checks that student navigation bar is being load correctly", () => {
  test("checks if home page, att. class, check att. and logout are visible", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <StudentNavigationBar />
      </Router>
    );
    getByText("Att. Class");
    getByText("Check Att.");
    getByText("Log out");
    getByText("Role Call");
  });
});
