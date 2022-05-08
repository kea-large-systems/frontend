import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { SubjectTable, Subject } from "./SubjectTable";
import { createMemoryHistory } from "history";

describe("checks that the class table is being loaded correctly", () => {
  test("checks that the table gets loaded properly", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <SubjectTable />
      </Router>
    );

    screen.getByRole("table");
  });

  test("checks that the table contains the right headers", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <SubjectTable />
      </Router>
    );

    screen.getByText("CLASS");
    screen.getByText("SUBJECT NAME");
    screen.getByText("STUDENTS");
  });

  test("checks that the table is filled with the right data", () => {
    const tableData: Subject[] = [
      { class: "Class1", name: "Subject1", studentsCount: 10, id: 1 },
      { class: "Class2", name: "Subject2", studentsCount: 20, id: 2 },
    ];

    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <SubjectTable data={tableData} />
      </Router>
    );

    screen.getByText("Class1");
    screen.getByText("Subject1");
    screen.getByText("10");
    screen.getByText("Class2");
    screen.getByText("Subject2");
    screen.getByText("20");
  });
});