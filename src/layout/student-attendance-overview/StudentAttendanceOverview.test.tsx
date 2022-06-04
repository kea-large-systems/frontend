import { screen } from "@testing-library/react";
import { UserDetail } from "../../provider/UserProvider";
import { UserType } from "../navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentAttendanceOverview } from "./StudentAttendanceOverview";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { renderWithUseContextUser } from "../../test-util";

describe("student attendance overview page", () => {
    const studentDetail: UserDetail = {
        userId: "10",
        username: "student test",
        role: UserType.STUDENT,
      };
    it("contains the correct titles", () => {
        const history = createMemoryHistory();

        renderWithUseContextUser(
            <Router location={history.location} navigator={history}>
                <StudentAttendanceOverview />
            </Router>,
            studentDetail
        );

        screen.getByText("CLASS");
        screen.getByText("SUBJECT NAME");
        screen.getByText("STUDENTS");
        screen.getByText("ATTENDANCE");
    })
});