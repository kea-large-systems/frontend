import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AttendToClassForm } from "./AttendToClassForm";

describe("attend to class component", () => {
  test("checks if input field for class code + butten to check in are exist", () => {
    const { getByText, getByPlaceholderText } = render(
      <AttendToClassForm isLoading={false} onSubmit={() => {}} />
    );
    getByText("Attend Class");
    getByPlaceholderText("Class Code");
  });
  test("checks if input field can hold a value", async () => {
    const { getByPlaceholderText } = render(
      <AttendToClassForm isLoading={false} onSubmit={() => {}} />
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
      <AttendToClassForm isLoading={false} onSubmit={onSubmit} />
    );
    const submitButton = getByText("Attend Class");
    const inputClassCode = getByPlaceholderText("Class Code");
    await act(async () => {
      await userEvent.type(inputClassCode, "GOODCODE", { delay: 0.1 });
      await userEvent.click(submitButton);
    });
    await waitFor(() => {
      //function that makes the assert to be executed several times before it is failing
      const mockResult = onSubmit.mock.calls[0][0];
      expect(mockResult.classCode).toBe("GOODCODE");
    });
  });
  test("checks that error is shown when submitting is empty", async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <AttendToClassForm isLoading={false} onSubmit={onSubmit} />
    );
    await userEvent.click(getByText("Attend Class"));
    await waitFor(() => {
      getByText("Please type the code from the teacher's monitor");
      expect(onSubmit).not.toBeCalled();
    });
  });
});
