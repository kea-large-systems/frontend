import { render } from "../test-util";
import { UserContext, UserDetail, UserProvider } from "./UserProvider";
import { UserType } from "../layout/navigation-bar/authorized-navigation-bar/AuthorizedNavigationBar";
import { useContext } from "react";
import { screen } from "@testing-library/react";

describe("test provider", () => {
  test("check if the provider can get a user detail and pass it to the children component", () => {
    const userDetail: UserDetail = {
      userId: "1",
      username: "username",
      role: UserType.STUDENT,
    };
    const DummyComponent = () => {
      const { userDetail: user } = useContext(UserContext);
      return (
        <>
          <div>{user.userId}</div>
          <div>{user.username}</div>
          <div>{user.role}</div>
        </>
      );
    };
    render(
      <UserProvider value={userDetail}>
        <DummyComponent />
      </UserProvider>
    );
    screen.getByText("username");
    screen.getByText("1");
    screen.getByText("STUDENT");
  });
});
