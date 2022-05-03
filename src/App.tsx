import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentHomepage } from "./layout/student-homepage/StudentHomepage";
import { StudentNavigationBar } from "./layout/navigation-bar/student-navigation-bar/StudentNavigationBar";
import { TeacherNavigationBar } from "./layout/navigation-bar/teacher-navigation-bar/TeacherNavigationBar";
import { TeacherSubjectManagement } from "./layout/teacher-subject-management/TeacherSubjectManagement";
import { addScaleCorrector } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[<StudentNavigationBar />, <StudentHomepage />]}
        />
        <Route
          path="/manage-classes"
          element={[<TeacherNavigationBar />, <TeacherSubjectManagement />]}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
