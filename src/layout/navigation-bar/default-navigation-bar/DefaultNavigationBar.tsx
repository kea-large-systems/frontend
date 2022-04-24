import { NavigationBar } from "../NavigationBar";
import { Box, Button, HStack } from "@chakra-ui/react";
import NavigationBarLink from "../navigation-bar-link/NavigationBarLink";

export function DefaultNavigationBar() {
  return (
    <NavigationBar>
      <NavigationBar>
        <HStack>
          <NavigationBarLink path="/">
            <Button variant="navigationLink" fontSize="xl">
              Role Call
            </Button>
          </NavigationBarLink>
        </HStack>
        <Box>
          <NavigationBarLink path="/login">
            <Button variant="navigationLink">Login</Button>
          </NavigationBarLink>
        </Box>
      </NavigationBar>
    </NavigationBar>
  );
}
