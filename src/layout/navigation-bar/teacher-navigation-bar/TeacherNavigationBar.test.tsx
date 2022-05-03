import { render, screen } from "@testing-library/react";
import { TeacherNavigationBar } from "./TeacherNavigationBar";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("checks that the teacher navigation bar is being loaded correctly", () => {
    test("checks if the navigation bar buttons are visible", () => {
        const history = createMemoryHistory();
        
        render(
          <Router location={history.location} navigator={history}>
            <TeacherNavigationBar />
          </Router>
        );

        screen.getByText("Manage Classes");
        screen.getByText("Log out");
        screen.getByText("Role Call");
    });
});