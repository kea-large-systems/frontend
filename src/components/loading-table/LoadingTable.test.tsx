import { render, screen } from "@testing-library/react";
import { LoadingTable } from "./LoadingTable";

describe("checks if the loading table loads correctly",  () => {
  test("checks it the loading table renders", () => {
    render(<LoadingTable />);

    screen.getAllByTestId("loading-row");
  });

  test("checks it the loading table renders the correct amount of rows", () => {
    const amountOfRows = 10;

    render(<LoadingTable rows={amountOfRows} />);

    expect(screen.getAllByTestId("loading-row")).toHaveLength(amountOfRows);
  });
});