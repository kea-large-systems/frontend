import { BrowserRouter } from "react-router-dom";
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
      <AuthorizedNavigationBar userType={userType} />
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
