import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import { LoggedLayout } from "../Layouts/LoggedLayout/LoggedLayout";
import { Estudiante } from "../Pages/Estudiante/Estudiante";

export const LoggedNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <LoggedLayout>
              <Estudiante />
            </LoggedLayout>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
