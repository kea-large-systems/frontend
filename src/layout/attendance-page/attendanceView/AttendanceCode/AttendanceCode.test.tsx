import { render } from "../../../../test-util";
import { screen, waitFor } from "@testing-library/react";
import { AttendanceCode } from "./AttendanceCode";

describe("checks if attendancy code is shown", () => {
  test("checks if code is correct", async () => {
    render(
      <AttendanceCode
        lecture={{ lectureId: 1, subjectId: "1", name: "lecture_1" }}
      />
    );
    await waitFor(async () => {
      screen.getByText("123456");
    });
  });
});
