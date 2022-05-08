import { Button, VStack, Icon, Text, Box } from "@chakra-ui/react";
import { BsMicrosoft } from "react-icons/bs";

export function LoginPage() {
  return (
    <VStack justifyContent="center" spacing={30}>
      <Box>
        <Text fontSize="4xl">Login</Text>
      </Box>
      <Button
        leftIcon={<Icon as={BsMicrosoft} />}
        onClick={() =>
          window.location.replace("http://localhost:4200/auth/login/microsoft")
        }
      >
        Sign in with Microsoft
      </Button>
    </VStack>
  );
}
