import { render, screen } from "@testing-library/react";
import { MainCard } from "./MainCard";

describe("checks that the primary button is being loaded correctly", () => {
  test("checks that the main card correctly displays one child", () => {
    const child = <div key={1}>Content</div>;

    render(<MainCard>{child}</MainCard>);

    screen.getAllByText("Content");
  });

  test("checks that the main card correctly displays multiple children", () => {
    const children = [<div key={1}>Content</div>, <p key={2}>More Content</p>];

    render(<MainCard>{children}</MainCard>);
    const separators = screen.getAllByRole("separator");

    expect(separators).toHaveLength(children.length - 1);
  });
});