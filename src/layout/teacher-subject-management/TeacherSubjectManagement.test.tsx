import { render, screen } from "@testing-library/react";
import { TeacherSubjectManagement } from "./TeacherSubjectManagement";


describe("checks if the teacher subject management page loads correctly", () => {

    test("checks if the page has a search component", () => {
      render(<TeacherSubjectManagement />);

      screen.getByPlaceholderText("Search");
    });

    test("checks if the page has an add button", () => {
      render(<TeacherSubjectManagement />);

      screen.getByRole("button", {name: /Add/i});
    });

    // test("checks if the add button redirects to the correct page", () => {
      
    // });

    // test("checks if the page has a subject table with the appropriate columns", () => {

    // });
});