import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

interface NavigationBarProps {
  children: JSX.Element | JSX.Element[];
}

export function RollCallNavigationBar({
  children,
}: NavigationBarProps): ReactElement {
  return (
    <Flex
      px={20}
      as="header"
      alignItems="center"
      height="68px"
      width="100%"
      position="sticky"
      top="0"
      zIndex="100"
      bg="primary"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      justifyContent="space-between"
    >
      {children}
    </Flex>
  );
}
