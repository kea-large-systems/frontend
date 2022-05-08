import { render, screen, waitFor } from "@testing-library/react";
import { TeacherSubjectManagement } from "./TeacherSubjectManagement";
import { TestQueryProvider } from "../../test-utils/TestQueryProvider";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("checks if the teacher subject management page loads correctly", () => {
  test("checks if the page has a search component", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
          <TestQueryProvider>
            <TeacherSubjectManagement />
          </TestQueryProvider>
      </Router>
    );

    screen.getByPlaceholderText("Search");
  });

  test("checks if the page has an add button", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <TestQueryProvider>
          <TeacherSubjectManagement />
        </TestQueryProvider>
      </Router>
    );

    screen.getByRole("button", { name: /Add/i });
  });

  // test("checks if the add button redirects to the correct page", () => {

  // });

  test("checks if the page has a subject table with the appropriate columns", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <TestQueryProvider>
          <TeacherSubjectManagement />
        </TestQueryProvider>
      </Router>
    );

    screen.getByText("CLASS");
    screen.getByText("SUBJECT NAME");
    screen.getByText("STUDENTS");
  });

  test("checks if the subject table has the correct data", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <TestQueryProvider>
          <TeacherSubjectManagement />
        </TestQueryProvider>
      </Router>
    );

    await waitFor(
      async () => {
        await screen.findByText("SW22");
        await screen.findByText("DS22");
        await screen.findByText("KYS");
        await screen.findByText("AB20");
        await screen.findByText("DI21");
        await screen.findByText("DI21i");
        await screen.findByText("WW3");
      },
      { timeout: 1500 }
    );
  });
});
