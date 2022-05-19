import { StudentNavigationBar } from "../student-navigation-bar/StudentNavigationBar";
import { TeacherNavigationBar } from "../teacher-navigation-bar/TeacherNavigationBar";
import { DefaultNavigationBar } from "../default-navigation-bar/DefaultNavigationBar";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserProvider";

export enum UserType {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  GUEST = "GUEST",
}

export function AuthorizedNavigationBar() {
  const { userDetail } = useContext(UserContext);
  switch (userDetail.role) {
    case UserType.STUDENT:
      return <StudentNavigationBar />;
    case UserType.TEACHER:
      return <TeacherNavigationBar />;
    default:
      return <DefaultNavigationBar />;
  }
}
