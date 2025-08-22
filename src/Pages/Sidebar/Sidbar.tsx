import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.scss";

import {
  HouseDoor,
  People,
  Gear,
  ChevronLeft,
  ChevronRight,
  PersonCircle,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  url: string;
  badge?: number;
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();

  // Items del menú
  const menuItems: MenuItem[] = [
    { name: "Inicio", icon: <HouseDoor />, url: "/home" },
    { name: "Estudiantes", icon: <People />, url: "/estudiantes" },
    { name: "Settings", icon: <Gear />, url: "/Ninio" },
  ];
  function handleClick(name: string, url: string) {
    setActiveItem(name);
    navigate(url);
  }
  return (
    <div
      className={`d-flex flex-column bg-primary text-white`}
      style={{
        width: collapsed ? "80px" : "250px",
        minHeight: "100vh",
        transition: "width 0.3s ease",
      }}
    >
      {/* Cabecera */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
        {!collapsed && <h5 className="m-0">PLATAFORMA DEA</h5>}
        <Button
          variant="outline-light"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      {/* Menú */}
      <Nav className="flex-column p-3 flex-grow-1">
        {menuItems.map((item) => (
          <Nav.Item key={item.name} className="mb-2">
            <Nav.Link
              href="#"
              active={activeItem === item.name}
              onClick={() => handleClick(item.name, item.url)}
              className={`d-flex align-items-center text-white ${
                collapsed ? "justify-content-center" : ""
              }`}
              style={{
                borderRadius: "4px",
                padding: "8px 12px",
              }}
            >
              <span className={collapsed ? "" : "me-2"}>{item.icon}</span>
              {!collapsed && (
                <>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="badge bg-danger ms-auto">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Pie de página */}
      {!collapsed && (
        <div className="p-3 border-top border-secondary">
          <div className="d-flex align-items-center">
            <PersonCircle size={40} className="me-2" />
            <div>
              <div className="fw-bold">Usuario</div>
              <small className="text-white-50">user@example.com</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
