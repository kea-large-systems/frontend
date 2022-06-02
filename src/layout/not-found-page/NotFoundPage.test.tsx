import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "./NotFoundPage";

describe("check that 404 is being displayed", () => {
  test("check that the screen shows 404", () => {
    render(<NotFoundPage />);

    screen.getByText("Page not Found 404");
  });
});
