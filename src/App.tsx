import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { StudentHomepage } from "./layout/student-homepage/StudentHomepage";
import { TeacherSubjectManagement } from "./layout/teacher-subject-management/TeacherSubjectManagement";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SwitchGuard } from "./route/SwitchGuard";

function App() {
  const [userType, setUserType] = useLocalStorage("userType", UserType.GUEST);
  const [userId, setUserId] = useLocalStorage("userId", "");
  const [, setUsername] = useLocalStorage("userName", "");
  return (
    <BrowserRouter>
      <AuthorizedNavigationBar userType={UserType.GUEST} />
      <CentralLayout>
        <SwitchGuard
          userId={userId}
          userType={userType}
          setUserType={setUserType}
          setUserId={setUserId}
          setUsername={setUsername}
        />

      </CentralLayout>
    </BrowserRouter>
  );
}

export default App;
