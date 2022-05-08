import { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

interface CentralLayoutProps {
  children: ReactElement | ReactElement[];
}

export function CentralLayout({ children }: CentralLayoutProps) {
  return (
    <Box width="100%" margin="40px auto 0 auto">
      {children}
    </Box>
  );
}
