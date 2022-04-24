import { ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface NavigationBarLinkProps {
  path: string;
  children: JSX.Element | string;
}

export default function NavigationBarLink({
  path,
  children,
}: NavigationBarLinkProps): ReactElement {
  return (
    <Box>
      <RouterLink to={path}>{children}</RouterLink>
    </Box>
  );
}
