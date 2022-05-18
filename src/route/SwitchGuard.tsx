import { Route, Routes as Switch, useNavigate } from "react-router-dom";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentHomepage } from "../layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "../layout/teacher-subject-management/TeacherSubjectManagement";
import { LoginPage } from "../layout/login-page/LoginPage";
import { NotFoundPage } from "../layout/not-found-page/NotFoundPage";
import { LoginSuccess } from "../layout/login-page/login-success/LoginSuccess";
import { AttendanceCodePage } from "../layout/attendance-code-page/AttendanceCodePage";
import { LectureCodeAcceptedPage } from "../layout/lecture-code-accepted-page/LectureCodeAcceptedPage";
import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

export function SwitchGuard() {
  const { userDetail, setUserDetail } = useContext(UserContext);
  const navigate = useNavigate();

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
          <Route
            path="/"
            element={
              <StudentHomepage
                onAttend={() => {
                  navigate("/lecture-code-accepted");
                }}
              />
            }
          />
          <Route
            path="/lecture-code-accepted"
            element={<LectureCodeAcceptedPage />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.TEACHER:
      return (
        <Switch>
          <Route path="/" element={<TeacherSubjectManagement />} />
          <Route element={<AttendanceCodePage />} path="/attendance-code" />
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
