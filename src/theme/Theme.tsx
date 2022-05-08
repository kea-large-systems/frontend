import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export const theme = extendTheme({
  colors: {
    primary: "#19169C",
    secondaryText: "#ffffff",
    attendColor: "green",
    inputBackground: "#F0F0F1",
    inputBorder: "#606060",
    inputPlaceholder: "#616060",
  },
  components: { Button, Input },
});
