import { StudentNavigationBar } from "../student-navigation-bar/StudentNavigationBar";
import { TeacherNavigationBar } from "../teacher-navigation-bar/TeacherNavigationBar";
import { DefaultNavigationBar } from "../default-navigation-bar/DefaultNavigationBar";

interface AuthorizedNavigationBarProps {
  userType: UserType;
}

export enum UserType {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  GUEST = "GUEST",
}

export function AuthorizedNavigationBar({
  userType = UserType.GUEST,
}: AuthorizedNavigationBarProps) {
  switch (userType) {
    case UserType.STUDENT:
      return <StudentNavigationBar />;
    case UserType.TEACHER:
      return <TeacherNavigationBar />;
    default:
      return <DefaultNavigationBar />;
  }
}
