import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "./PrimaryButton";
import userEvent from "@testing-library/user-event";

describe("checks that the primary button is being loaded correctly", () => {
  test("checks if the button text is correct", () => {
    render(<PrimaryButton>Primary</PrimaryButton>);

    screen.getByRole("button", { name: /Primary/i });
  });

  test("checks if the button triggers a function when clicked", () => {
    const click = jest.fn();
    render(
      <PrimaryButton onClick={click}>
        <p>Primary</p>
      </PrimaryButton>
    );

    userEvent.click(screen.getByText("Primary"));

    expect(click).toBeCalled();
  });
});
