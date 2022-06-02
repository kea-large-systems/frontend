import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

describe("Checks login page", () => {
  test("checks if login page has the welcome text", () => {
    render(<LoginPage />);

    screen.getByText("Login");
  });
  test("check if sign in with microsoft is displayed as a button", () => {
    render(<LoginPage />);
    screen.getByRole("button", { name: /Sign in with Microsoft/i });
  });
});
