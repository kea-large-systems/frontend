import { render, screen } from "@testing-library/react";
import App from "./App";
import { TestQueryProvider } from "./test-utils/TestQueryProvider";

test("renders the app correctly", () => {
  render(
    <TestQueryProvider>
      <App />
    </TestQueryProvider>
  );

  screen.getByText("Role Call");
});
