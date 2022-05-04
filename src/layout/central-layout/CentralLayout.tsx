import { ReactElement } from "react";
import { HStack } from "@chakra-ui/react";

interface CentralLayoutProps {
  children: ReactElement | ReactElement[]
}

export function CentralLayout({ children }: CentralLayoutProps) {
  return <HStack width="100%" maxWidth="1800px" margin="40px auto 0 auto" spacing="40px">{children}</HStack>;
}