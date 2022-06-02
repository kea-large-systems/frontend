import { UserType } from "../../navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserProvider";

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
export function LoginSuccess() {
  const { setUserDetail } = useContext(UserContext);
  const urlParams = new URLSearchParams(window.location.search);
  setUserDetail({
    role: userTypeMapper(urlParams.get("roleName")!!),
    userId: urlParams.get("userId")!!,
    username: urlParams.get("name")!!,
  });

  return <Navigate to={"/"} />;
}
