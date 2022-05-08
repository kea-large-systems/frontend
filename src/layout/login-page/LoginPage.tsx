import { Button, VStack, Icon, Text, Box } from "@chakra-ui/react";
import { BsMicrosoft } from "react-icons/bs";

export function LoginPage() {
  return (
    <VStack justifyContent="center" spacing={30}>
      <Box>
        <Text fontSize="4xl">Login</Text>
      </Box>
      <Button leftIcon={<Icon as={BsMicrosoft} />}>
        Sign in with Microsoft
      </Button>
    </VStack>
  );
}
