import { render } from "@testing-library/react";
import { NavigationBar } from "./NavigationBar";

describe("checks if navigation bar is loaded correctly", () => {
  test("checks if application name is visible", () => {
    const { getByText } = render(
      <NavigationBar>
        <div>application name</div>
      </NavigationBar>
    );
    getByText("application name");
  });

  test("checks if navigation bar accepts many children", () => {
    const { getByText } = render(
      <NavigationBar>
        <div>application name</div>
        <div>link1</div>
        <div>link2</div>
      </NavigationBar>
    );
    getByText("application name");
    getByText("link1");
    getByText("link2");
  });
});
