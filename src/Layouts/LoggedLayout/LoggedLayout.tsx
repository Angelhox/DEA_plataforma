import type React from "react";
import Sidebar from "../../Pages/Sidebar/Sidbar";
interface Props {
  children: React.JSX.Element;
}
export const LoggedLayout = ({ children }: Props) => {
  return (
    <div className="main-container">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};
