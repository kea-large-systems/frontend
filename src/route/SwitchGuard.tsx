import { Route, Routes as Switch } from "react-router-dom";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentHomepage } from "../layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "../layout/teacher-subject-management/TeacherSubjectManagement";
import { LoginPage } from "../layout/login-page/LoginPage";
import { NotFoundPage } from "../layout/not-found-page/NotFoundPage";
import { LoginSuccess } from "../layout/login-page/login-success/LoginSuccess";
import { AttendancePage } from "../layout/attendance-page/AttendancePage";
import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { StudentAttendanceOverview } from "../layout/student-attendance-overview/StudentAttendanceOverview";
import { ClassAttendanceOverview } from "../layout/class-attendance-overview/ClassAttendanceOverview";

export function SwitchGuard() {
  const { userDetail, setUserDetail } = useContext(UserContext);
  switch (userDetail.role) {
    case UserType.GUEST:
      return (
        <Switch>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.STUDENT:
      return (
        <Switch>
          <Route path="/" element={<StudentHomepage />} />
          <Route path="/checkatt" element={<StudentAttendanceOverview />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.TEACHER:
      return (
        <Switch>
          <Route path="/" element={<TeacherSubjectManagement />} />
          <Route path="/attendance-code" element={<AttendancePage />} />
          <Route path="/class-attendance-overview" element={<ClassAttendanceOverview />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    default:
      setUserDetail({ role: UserType.GUEST });
      return (
        <Switch>
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
  }
}
