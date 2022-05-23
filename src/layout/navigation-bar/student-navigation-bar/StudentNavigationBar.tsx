import { RollCallNavigationBar } from "../roll-call-navigation-bar/RollCallNavigationBar";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";
import { Box, Button, HStack } from "@chakra-ui/react";
import { LogoutButton } from "../../../components/logout-button/LogoutButton";

export function StudentNavigationBar() {
  return (
    <RollCallNavigationBar>
      <HStack>
        <NavigationBarLink path="/">
          <Button variant="navigationLink" fontSize="xl">
            Role Call
          </Button>
        </NavigationBarLink>
        <NavigationBarLink path="/attclass">
          <Button variant="navigationLink">Att. Class</Button>
        </NavigationBarLink>
        <NavigationBarLink path="/checkatt">
          <Button variant="navigationLink">Check Att.</Button>
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
