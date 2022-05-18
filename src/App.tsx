import { BrowserRouter } from "react-router-dom";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SwitchGuard } from "./route/SwitchGuard";
import { createContext, useContext } from "react";
import { decryptObj, encryptObj } from "./utils/CryptoUtil";

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

export interface UserDetail {
  username?: string;
  role?: UserType;
  userId?: string;
}

interface UserProviderProps {
  children: JSX.Element;
  value: UserDetail;
}

interface UserDetailContext {
  userDetail: UserDetail;
  setUserDetail: (userDetail: UserDetail) => void;
}

export const UserContext = createContext<UserDetailContext>({
  userDetail: {},
  setUserDetail: () => {},
});

export function UserProvider({ children, value }: UserProviderProps) {
  const [userDetailStorage, setUserDetailStorage] = useLocalStorage<string>(
    "userDetail",
    encryptObj(value)
  );

  const userDetail: UserDetail = decryptObj(userDetailStorage);
  const setUserDetail = (value: UserDetail) => {
    setUserDetailStorage(encryptObj(value));
  }

  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
}
