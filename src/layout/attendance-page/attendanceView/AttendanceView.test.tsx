import { renderWithUserAndRouter } from "../../../test-util";
import { screen, waitFor } from "@testing-library/react";
import { AttendanceView } from "./AttendanceView";
import { Subject } from "../../../components/subject-table/SubjectTable";
import { createMemoryHistory } from "history";

describe("checks if Attendance view is shown as expected", () => {
  test("checks if the code is shown", async () => {
    const subject: Subject = {
      subjectId: 1,
      name: "Testing",
      class: "sw22",
      studentsCount: 30,
    };
    renderWithUserAndRouter(
      <AttendanceView subject={subject} />,
      {},
      createMemoryHistory()
    );
    await waitFor(() => {
      screen.getByText("lecture_1");
      screen.getByText("123456");
    });
  });
});
