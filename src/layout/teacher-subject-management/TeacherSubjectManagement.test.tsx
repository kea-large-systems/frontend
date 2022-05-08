import { render, screen, waitFor } from "@testing-library/react";
import { TeacherSubjectManagement } from "./TeacherSubjectManagement";
import { TestQueryProvider } from "../../test-utils/TestQueryProvider";

describe("checks if the teacher subject management page loads correctly", () => {
  test("checks if the page has a search component", () => {
    render(
      <TestQueryProvider>
        <TeacherSubjectManagement userId={"1"} />
      </TestQueryProvider>
    );

    screen.getByPlaceholderText("Search");
  });

  test("checks if the page has an add button", () => {
    render(
      <TestQueryProvider>
        <TeacherSubjectManagement userId={"1"} />
      </TestQueryProvider>
    );

    screen.getByRole("button", { name: /Add/i });
  });

  // test("checks if the add button redirects to the correct page", () => {

  // });

  test("checks if the page has a subject table with the appropriate columns", () => {
    render(
      <TestQueryProvider>
        <TeacherSubjectManagement userId={"1"} />
      </TestQueryProvider>
    );

    screen.getByText("CLASS");
    screen.getByText("SUBJECT NAME");
    screen.getByText("STUDENTS");
  });

  test("checks if the subject table has the correct data", async () => {
    render(
      <TestQueryProvider>
        <TeacherSubjectManagement userId={"1"} />
      </TestQueryProvider>
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
      { timeout: 2000 }
    );
  });
});
