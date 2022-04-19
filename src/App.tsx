import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme/Theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} />
    </BrowserRouter>
  );
}

export default App;
