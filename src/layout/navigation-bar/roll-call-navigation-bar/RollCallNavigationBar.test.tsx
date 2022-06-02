import { render } from "@testing-library/react";
import { RollCallNavigationBar } from "./RollCallNavigationBar";

describe("checks if navigation bar is loaded correctly", () => {
  test("checks if application name is visible", () => {
    const { getByText } = render(
      <RollCallNavigationBar>
        <div>application name</div>
      </RollCallNavigationBar>
    );
    getByText("application name");
  });

  test("checks if navigation bar accepts many children", () => {
    const { getByText } = render(
      <RollCallNavigationBar>
        <div>application name</div>
        <div>link1</div>
        <div>link2</div>
      </RollCallNavigationBar>
    );
    getByText("application name");
    getByText("link1");
    getByText("link2");
  });
});
