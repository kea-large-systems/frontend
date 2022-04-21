import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StudentHomepage } from "./layout/student-homepage/StudentHomepage";
import { StudentNavigationBar } from "./layout/navigation-bar/student-navigation-bar/StudentNavigationBar";

function App() {
  return (
    <BrowserRouter>
      <StudentNavigationBar />
      <StudentHomepage />
    </BrowserRouter>
  );
}

export default App;
