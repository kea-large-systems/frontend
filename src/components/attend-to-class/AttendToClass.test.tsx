import { act, getByText, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AttendToClass } from "./AttendToClass";

describe("attend to class component", () => {
  test("checks if input field for class code + butten to check in are exist", () => {
    const { getByText, getByPlaceholderText } = render(
      <AttendToClass onSubmit={() => {}} />
    );
    getByText("Attend Class");
    getByPlaceholderText("Class Code");
  });
  test("checks if input field can hold a value", async () => {
    const { getByPlaceholderText } = render(
      <AttendToClass onSubmit={() => {}} />
    );
    const inputClassCode = getByPlaceholderText(
      "Class Code"
    ) as HTMLInputElement;
    await userEvent.type(inputClassCode, "abcd1234", { delay: 0.1 });
    expect(inputClassCode.value).toBe("abcd1234");
  });
  test("checks that on submit is being called with valid input", async () => {
    const onSubmit = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <AttendToClass onSubmit={onSubmit} />
    );
    const submitButton = getByText("Attend Class");
    const inputClassCode = getByPlaceholderText("Class Code");
    await act(async () => {
      await userEvent.type(inputClassCode, "abcd1234", { delay: 0.1 });
      userEvent.click(submitButton);
      console.log(onSubmit);
    });
    await waitFor(() => {
      //function that makes the assert to be executed several times before it is failing
      const mockResult = onSubmit.mock.calls[0][0];
      expect(mockResult.classCode).toBe("abcd1234");
    });
  });
  test("checks that error is shown when submitting is empty", async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<AttendToClass onSubmit={onSubmit} />);
    userEvent.click(getByText("Attend Class"));
    await waitFor(() => {
      getByText("Please type the code from the teacher's monitor");
      expect(onSubmit).not.toBeCalled();
    });
  });
});
