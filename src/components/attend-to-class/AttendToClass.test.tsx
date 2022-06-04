import { render } from "../../test-util";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AttendToClass } from "./AttendToClass";
import { setLogger } from "react-query";

describe("checks student attendance", () => {
  test("check if the page has the correct attendance behaviour", async () => {
    render(<AttendToClass />);

    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "GOODCODE", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Thank you for attending the class");
    });
  });
  test("check if the page has the correct behavior when attendance failed", async () => {
    setLogger({
      log: (log) => console.log(log),
      warn: (warring) => console.log(warring),
      error: () => {},
    });
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "BADCODEB", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Seems like you entered the wrong code");
    });
  });
  test("gives an error message that the code is too short", async () => {
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "BADCODE", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Code should be 8 character");
    });
  });
  test("gives an error message that the code is to long", async () => {
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "BADCODEAB", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Code should be 8 character");
    });
  });
  test("gives an error message if the code contains numbers", async () => {
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "BADCODE1", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Code should contains uppercase letters only");
    });
  });
  test("gives an error message if the code contains lower case", async () => {
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "badCODEE", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Code should contains uppercase letters only");
    });
  });
  test("gives an error message if the code contains special characters", async () => {
    render(<AttendToClass />);
    const inputClassCode = screen.getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "@£AAA/&F", { delay: 0.1 });
    await userEvent.click(screen.getByText("Attend Class"));

    await waitFor(async () => {
      await screen.getByText("Code should contains uppercase letters only");
    });
  });
});
