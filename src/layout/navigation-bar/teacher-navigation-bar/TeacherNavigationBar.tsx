import { RollCallNavigationBar } from "../roll-call-navigation-bar/RollCallNavigationBar";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";
import { Box, Button, HStack } from "@chakra-ui/react";
import { LogoutButton } from "../../../components/logout-button/LogoutButton";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserProvider";
import { UserType } from "../authorized-navigation-bar/AuthorizedNavigationBar";

export function TeacherNavigationBar() {
  
  const { setUserDetail } = useContext(UserContext);

  const logout = () => {
    setUserDetail({
        username: "",
        role: UserType.GUEST,
        userId: "",
    });
  };

  return (
    <RollCallNavigationBar>
      <HStack>
        <NavigationBarLink path="/">
          <Button variant="navigationLink" fontSize="xl">
            Role Call
          </Button>
        </NavigationBarLink>
        <NavigationBarLink path="/manage-classes">
          <Button variant="navigationLink">Manage Classes</Button>
        </NavigationBarLink>
      </HStack>
      <Box>
        <NavigationBarLink path="/">
          <LogoutButton logout={logout} />
        </NavigationBarLink>
      </Box>
    </RollCallNavigationBar>
  );
}
