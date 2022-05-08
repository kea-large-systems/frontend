import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { StudentHomepage } from "./layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "./layout/teacher-subject-management/TeacherSubjectManagement";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";

function App() {
  return (
    <BrowserRouter>
      <AuthorizedNavigationBar userType={UserType.GUEST} />
      <CentralLayout>
        <Switch>
          <Route path="/" element={<StudentHomepage />} />
          <Route
            path="/manage-classes"
            element={<TeacherSubjectManagement />}
          ></Route>
        </Switch>
      </CentralLayout>
    </BrowserRouter>
  );
}

export default App;
