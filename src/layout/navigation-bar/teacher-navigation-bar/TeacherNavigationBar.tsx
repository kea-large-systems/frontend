import { RollCallNavigationBar } from "../roll-call-navigation-bar/RollCallNavigationBar";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";
import { Box, Button, HStack } from "@chakra-ui/react";
import { LogoutButton } from "../../../components/logout-button/LogoutButton";

export function TeacherNavigationBar() {
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
          <LogoutButton />
        </NavigationBarLink>
      </Box>
    </RollCallNavigationBar>
  );
}
