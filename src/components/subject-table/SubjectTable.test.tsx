import { render, screen } from "@testing-library/react";
import { SubjectTable, Subject } from "./SubjectTable";

describe("checks that the class table is being loaded correctly", () => {
  test("checks that the table gets loaded properly", () => {
    render(<SubjectTable />);

    screen.getByRole("table");
  });

  test("checks that the table contains the right headers", () => {
    render(<SubjectTable/>);

    screen.getByText("CLASS");
    screen.getByText("SUBJECT NAME");
    screen.getByText("STUDENTS");
  });

  test("checks that the table is filled with the right data", () => {
    const tableData: Subject[] = [
      {class: "Class1", name: "Subject1", studentsCount: 10, id: 1},
      {class: "Class2", name: "Subject2", studentsCount: 20, id: 2}
    ];

    render(<SubjectTable data={tableData} />);

    screen.getByText("Class1");
    screen.getByText("Subject1");
    screen.getByText("10");
    screen.getByText("Class2");
    screen.getByText("Subject2");
    screen.getByText("20");
  });
});