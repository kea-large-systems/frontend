import { render } from "../../test-util";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AttendToClass } from "./AttendToClass";

describe("checks student attendance", () => {
  test("check if the page has the correct attendance behaviour", async () => {
    render(<AttendToClass />);

    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "good-code", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Thank you for attending the class");
    });
  });
  /*
  test("check if the page has the correct behavior when attendance failed", async () => {
    render(<AttendToClass />);

    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "bad-code", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Seems like you entered the wrong code");
    });
  });
*/
});
