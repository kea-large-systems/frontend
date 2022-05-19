import { render } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import userEvent from "@testing-library/user-event";

describe("checks that the search input field is being loaded correctly", () => {
  test("checks if the component has a search field", () => {
    const { getByPlaceholderText } = render(<SearchInput />);

    expect(getByPlaceholderText("Search")).toBeVisible();
  });

  test("checks if the search field can be typed in", async () => {
    const expectedValue = "Hello World!";

    const { getByPlaceholderText } = render(<SearchInput />);

    const inputField = getByPlaceholderText("Search") as HTMLInputElement;
    await userEvent.type(inputField, expectedValue);

    expect(inputField).toHaveValue(expectedValue);
  });
});
