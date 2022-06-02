import { StudentHomepage } from "./StudentHomepage";
import { render } from "../../test-util";

describe("checks if homepage for student has a form to send class check in + view attendance button", () => {
  test("check for all expected view", () => {
    const { getByText, getByPlaceholderText } = render(<StudentHomepage />);
    getByText("Attend Class");
    getByText("Check Attendance");
    getByPlaceholderText("Class Code");
  });
});
