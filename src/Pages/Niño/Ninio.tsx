import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const  Ninio: React.FC = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    fechaNacimiento: "",
    sexo: "",
    etnia: "",
    correo: "",
    nacionalidad: "",
    contacto: "",
    discapacidad: "",
    direccion: "",
    numeroCasa: "",
    provincia: "",
    parroquia: "",
    canton: "",
    viveCon: "",
    necesidadEspecial: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Formulario enviado (ver consola)");
  };

  return (
    <Card className="shadow-lg my-4">
      <Card.Header className="bg-primary text-white text-center">
        <h4>Registro de Niño</h4>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                type="text"
                name="cedula"
                value={formData.cedula}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
              >
                <option value="">Seleccione...</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Etnia</Form.Label>
              <Form.Control
                type="text"
                name="etnia"
                value={formData.etnia}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Control
                type="text"
                name="nacionalidad"
                value={formData.nacionalidad}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="tel"
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Discapacidad</Form.Label>
              <Form.Control
                type="text"
                name="discapacidad"
                value={formData.discapacidad}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mb-3">
              <Form.Label>Dirección Domicilio</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Número de Casa</Form.Label>
              <Form.Control
                type="text"
                name="numeroCasa"
                value={formData.numeroCasa}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Parroquia</Form.Label>
              <Form.Control
                type="text"
                name="parroquia"
                value={formData.parroquia}
                onChange={handleChange}
              />
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Cantón</Form.Label>
              <Form.Control
                type="text"
                name="canton"
                value={formData.canton}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Vive con</Form.Label>
              <Form.Control
                type="text"
                name="viveCon"
                value={formData.viveCon}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Necesidad de Educación Especial</Form.Label>
              <Form.Select
                name="necesidadEspecial"
                value={formData.necesidadEspecial}
                onChange={handleChange}
              >
                <option value="">Seleccione...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="d-grid">
            <Button type="submit" variant="success">
              Guardar Registro
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Ninio;
