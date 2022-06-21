import { renderWithUserAndRouter } from "../../test-util";
import { AttendancePage } from "./AttendancePage";
import { UserType } from "../navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { createMemoryHistory } from "history";
import { Subject } from "../../components/subject-table/SubjectTable";
import { screen, waitFor } from "@testing-library/react";

describe("checks if the the page shown currently", () => {
  test("checks if the header, the button and the code is being shown", async () => {
    const subject: Subject = {
      subjectId: 1,
      name: "Testing",
      classId: "sw22",
      studentsCount: 30,
    };
    const history = createMemoryHistory();
    history.push("/attendance-code", subject);
    renderWithUserAndRouter(
      <AttendancePage />,
      { role: UserType.TEACHER, userId: "1", username: "teacher" },
      history
    );
    await waitFor(() => {
      screen.getByText(subject.name);
      screen.getByText("Stop Attendance");
    });
  });
});
