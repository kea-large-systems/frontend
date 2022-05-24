import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LogoutButton } from "./LogoutButton";

describe("logout button functionality", () => {
  test("check if login button exists", () => {

    render(<LogoutButton logout={() => {}}/>);

    screen.getByText("Log out")
  });

  test("check if logout function works", () => {
    const mockOnClick = jest.fn();

    render(<LogoutButton logout={mockOnClick}/>); 

    userEvent.click(screen.getByText("Log out"));
    expect(mockOnClick).toBeCalled();
  })
});
