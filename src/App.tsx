import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { StudentHomepage } from "./layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "./layout/teacher-subject-management/TeacherSubjectManagement";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { AttendanceCodePage } from "./layout/attendance-code-page/AttendanceCodePage";
import { LectureCodeAcceptedPage } from "./layout/lecture-code-accepted-page/LectureCodeAcceptedPage";

function App() {
  return (
    <BrowserRouter>
      <AuthorizedNavigationBar userType={UserType.GUEST} />
      <CentralLayout>
        <Switch>
          <Route path="/" element={<StudentHomepage />} />
          <Route path="/manage-classes" element={<TeacherSubjectManagement />} />
          <Route path="/attendance-code" element={<AttendanceCodePage />} />
          <Route path="/lecture-code-accepted" element={<LectureCodeAcceptedPage />} />
        </Switch>
      </CentralLayout>
    </BrowserRouter>
  );
}

export default App;
