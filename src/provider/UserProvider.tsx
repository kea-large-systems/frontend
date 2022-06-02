import { useLocalStorageEncrypt } from "../UseLocalStorageEncrypt";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { createContext } from "react";

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
  const [userDetail, setUserDetail] = useLocalStorageEncrypt<UserDetail>(
    "userDetail",
    value
  );

  return (
    <UserContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserContext.Provider>
  );
}
