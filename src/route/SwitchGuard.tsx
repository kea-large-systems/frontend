import { Route, Routes as Switch } from "react-router-dom";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { StudentHomepage } from "../layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "../layout/teacher-subject-management/TeacherSubjectManagement";
import { LoginPage } from "../layout/login-page/LoginPage";
import { NotFoundPage } from "../layout/not-found-page/NotFoundPage";

interface SwitchGuardProps {
  userType: UserType;
}

export function SwitchGuard({ userType }: SwitchGuardProps) {
  switch (userType) {
    case UserType.GUEST:
      return (
        <Switch>
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.STUDENT:
      return (
        <Switch>
          <Route path="/" element={<StudentHomepage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Switch>
      );
    case UserType.TEACHER:
      return (
        <Switch>
          <Route path="/" element={<TeacherSubjectManagement />} />
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
