import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import { LoggedLayout } from "../Layouts/LoggedLayout/LoggedLayout";
import { Estudiante } from "../Pages/Estudiante/Estudiante";
import { Home } from "../Pages/Home/Home";

import Ninio from "../Pages/Niño/Ninio";

export const LoggedNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<LoggedLayout paginaAmostrar={<Home />} />}
        />
        <Route
          path="/estudiantes"
          element={<LoggedLayout paginaAmostrar={<Estudiante />} />}
        />
        <Route
          path="/Settings"
          element={<LoggedLayout paginaAmostrar={< Ninio />} />}
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
