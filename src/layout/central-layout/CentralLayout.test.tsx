import { render, screen } from "@testing-library/react";
import { CentralLayout } from "./CentralLayout";

describe("checks that the authorized navigation bar is being loaded correctly", () => {
  test("checks that it renders its children properly", () => {
    const children = [<h1 key={1}>Hello</h1>, <p key={2}>World</p>];

    render(<CentralLayout>{children}</CentralLayout>);

    screen.getByText("Hello");
    screen.getByText("World");
  });
});