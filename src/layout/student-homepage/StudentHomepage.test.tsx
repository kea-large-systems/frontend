import { render, screen, waitFor } from "@testing-library/react";
import { StudentHomepage } from "./StudentHomepage";
import userEvent from "@testing-library/user-event";
import { TestQueryProvider } from "../../test-utils/TestQueryProvider";

describe("checks if homepage for student has a form to send class check in + view attendance button", () => {
  test("check for all expected view", () => {
    const { getByText, getByPlaceholderText } = render(
      <TestQueryProvider>
        <StudentHomepage onAttend={() => {}} />
      </TestQueryProvider>
    );
    getByText("Attend Class");
    getByText("Check Attendance");
    getByPlaceholderText("Class Code");
  });

  test("check if the page has the correct attendance behaviour", async () => {
    const click = jest.fn();

    render(
      <TestQueryProvider>
        <StudentHomepage onAttend={click} />
      </TestQueryProvider>
    );


    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "abcd1234", { delay: 0.1 });
    userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await expect(click).toBeCalled();
    });
  });
});
