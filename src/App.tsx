import { BrowserRouter } from "react-router-dom";
import { AuthorizedNavigationBar } from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { SwitchGuard } from "./route/SwitchGuard";
import { useContext } from "react";
import { UserContext, UserProvider } from "./provider/UserProvider";

function App() {
  const { userDetail } = useContext(UserContext);
  return (
    <BrowserRouter>
      <UserProvider value={userDetail}>
        <>
          <AuthorizedNavigationBar />
          <CentralLayout>
            <SwitchGuard />
          </CentralLayout>
        </>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
