import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "24rem" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="usuario@correo.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>

        <hr className="my-4" />
        <p className="text-center mb-0">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-decoration-none">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
}
