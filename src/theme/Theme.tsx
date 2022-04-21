import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

export const theme = extendTheme({
  colors: {
    primary: "#19169C",
    secondaryText: "#ffffff",
    attendColor: "green",
  },
  components: { Button },
});
