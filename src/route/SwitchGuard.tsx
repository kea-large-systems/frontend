import { Route, Routes as Switch } from "react-router-dom";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentHomepage } from "../layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "../layout/teacher-subject-management/TeacherSubjectManagement";
import { LoginPage } from "../layout/login-page/LoginPage";
import { NotFoundPage } from "../layout/not-found-page/NotFoundPage";
import { LoginSuccess } from "../layout/login-page/login-success/LoginSuccess";
import { AttendanceCodePage } from "../layout/attendance-code-page/AttendanceCodePage";
import { LectureCodeAcceptedPage } from "../layout/lecture-code-accepted-page/LectureCodeAcceptedPage";


interface SwitchGuardProps {
  userType: UserType;
  userId: string;
  setUserType?: (userType: UserType) => void;
  setUserId?: (userId: string) => void;
  setUsername?: (username: string) => void;
}

export function SwitchGuard({
  userType,
  userId,
  setUserId = () => {},
  setUserType = () => {},
  setUsername = () => {},
}: SwitchGuardProps) {
  switch (userType) {
    case UserType.GUEST:
      return (
        <Switch>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/login/success"
            element={
              <LoginSuccess
                setUserType={setUserType}
                setUserId={setUserId}
                setUsername={setUsername}
              />
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.STUDENT:
      return (
        <Switch>
          <Route path="/" element={<StudentHomepage userId={userId} />} />
          <Route path="/lecture-code-accepted" element={<LectureCodeAcceptedPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.TEACHER:
      return (
        <Switch>
          <Route
            path="/"
            element={<TeacherSubjectManagement userId={userId} />}
          />
          <Route element={<AttendanceCodePage />} path="/attendance-code" />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    default:
      return (
        <Switch>
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
  }
}
