import { render, screen } from "@testing-library/react";
import { LogoutButton } from "./LogoutButton";

describe("logout button functionality", () => {
  test("check if login button exists", () => {

    render(<LogoutButton />);

    screen.getByText("Log out")
  });
});
