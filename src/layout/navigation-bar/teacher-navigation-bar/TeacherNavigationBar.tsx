import { NavigationBar } from "../NavigationBar";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";
import { Box, Button, HStack } from "@chakra-ui/react";

export function TeacherNavigationBar() {
  return (
    <NavigationBar>
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
        <NavigationBarLink path="/logout">
          <Button variant="navigationLink">Log out</Button>
        </NavigationBarLink>
      </Box>
    </NavigationBar>
  );
}
