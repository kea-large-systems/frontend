import { screen, waitFor } from "@testing-library/react";
import { TeacherSubjectManagement } from "./TeacherSubjectManagement";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { UserType } from "../navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { renderWithUseContextUser } from "../../test-util";
import { UserDetail } from "../../provider/UserProvider";

describe("checks if the teacher subject management page loads correctly", () => {
  const teacherDetail: UserDetail = {
    userId: "1",
    username: "teacher test",
    role: UserType.TEACHER,
  };
  test("checks if the page has a search component", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <TeacherSubjectManagement />
      </Router>,
      teacherDetail
    );
    screen.getByPlaceholderText("Search");
  });

  test("checks if the page has an add button", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <TeacherSubjectManagement />
      </Router>,
      teacherDetail
    );

    screen.getByRole("button", { name: /Add/i });
  });

  // test("checks if the add button redirects to the correct page", () => {

  // });

  test("checks if the page has a subject table with the appropriate columns", () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <TeacherSubjectManagement />
      </Router>,
      teacherDetail
    );
    screen.getByText("CLASS");
    screen.getByText("SUBJECT NAME");
    screen.getByText("STUDENTS");
  });

  test("checks if the subject table has the correct data", async () => {
    const history = createMemoryHistory();
    renderWithUseContextUser(
      <Router location={history.location} navigator={history}>
        <TeacherSubjectManagement />
      </Router>,
      teacherDetail
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
