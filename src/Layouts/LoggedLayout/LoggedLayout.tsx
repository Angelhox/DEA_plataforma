import type React from "react";
import Sidebar from "../../Pages/Sidebar/Sidbar";
interface Props {
  paginaAmostrar: React.JSX.Element;
}
export const LoggedLayout = ({ paginaAmostrar }: Props) => {
  return (
    <div className="main-container">
      <Sidebar />
      <main className="content">{paginaAmostrar}</main>
    </div>
  );
};
