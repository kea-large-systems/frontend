import { BrowserRouter } from "react-router-dom";
import {
  AuthorizedNavigationBar,
  UserType,
} from "./layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { CentralLayout } from "./layout/central-layout/CentralLayout";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SwitchGuard } from "./route/SwitchGuard";
import { createContext, useState } from "react";

function App() {
  const [userType] = useLocalStorage("userType", UserType.GUEST);
  const [userId] = useLocalStorage("userId", "");
  const [username] = useLocalStorage("userName", "");
  return (
    <BrowserRouter>
      <UserProvider
        value={{ role: userType, userId: userId, username: username }}
      >
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
  const [userDetail, setUserDetail] = useState<UserDetail>(value);
  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
}
