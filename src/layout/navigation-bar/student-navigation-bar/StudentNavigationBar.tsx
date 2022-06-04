import { RollCallNavigationBar } from "../roll-call-navigation-bar/RollCallNavigationBar";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";
import { Box, Button, HStack } from "@chakra-ui/react";
import { LogoutButton } from "../../../components/logout-button/LogoutButton";
import { UserType } from "../authorized-navigation-bar/AuthorizedNavigationBar";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserProvider";

export function StudentNavigationBar() {
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
        <NavigationBarLink path="/">
          <Button variant="navigationLink">Att. Class</Button>
        </NavigationBarLink>
        <NavigationBarLink path="/checkatt">
          <Button variant="navigationLink">Check Att.</Button>
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
