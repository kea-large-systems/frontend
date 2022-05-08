import { BrowserRouter } from "react-router-dom";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SwitchGuard } from "./route/SwitchGuard";

function App() {
  const [userType] = useLocalStorage("userType", UserType.GUEST);
  return (
    <BrowserRouter>
      <AuthorizedNavigationBar userType={userType} />
      <CentralLayout>
        <SwitchGuard userType={userType} />
      </CentralLayout>
    </BrowserRouter>
  );
}

export default App;
