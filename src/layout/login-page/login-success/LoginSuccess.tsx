import { UserType } from "../../navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { Navigate } from "react-router-dom";

interface LoginSuccessProps {
  setUserType: (userType: UserType) => void;
  setUserId: (userId: string) => void;
  setUsername: (username: string) => void;
}
const userTypeMapper = (userType: string) => {
  switch (userType.toLowerCase()) {
    case "student":
      return UserType.STUDENT;
    case "teacher":
      return UserType.TEACHER;
    case "guest":
      return UserType.GUEST;
    default:
      return UserType.GUEST;
  }
};
export function LoginSuccess({
  setUserType,
  setUserId,
  setUsername,
}: LoginSuccessProps) {
  const urlParams = new URLSearchParams(window.location.search);
  setUserId(urlParams.get("userId")!!);
  setUserType(userTypeMapper(urlParams.get("roleName")!!));
  setUsername(urlParams.get("name")!!);

  return <Navigate to={"/"} />;
}
