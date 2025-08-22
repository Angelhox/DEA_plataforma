import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import type { INinio } from "../../types/Estudiante/estudiantes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ninioSchema } from "../../validations/estudiante.schema";

const Ninio: React.FC = () => {
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INinio>({ resolver: zodResolver(ninioSchema) });
  console.log(errors);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (data: INinio) => {
    console.log("Datos enviados:", data);
    alert("Formulario enviado (ver consola)");
  };

  return (
    <Card className="shadow-lg my-4">
      <Card.Header className="bg-primary text-white text-center">
        <h4>Registro de Niño</h4>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                required
                {...register("nombres")}
                isInvalid={!!errors.nombres?.message}
              />
              {errors.nombres?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.nombres.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                {...register("apellidos")}
                required
                isInvalid={!!errors.apellidos?.message}
              />
              {errors.apellidos?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.apellidos.message}
                </Form.Control.Feedback>
              )}
              <Form.Control.Feedback>xxnx</Form.Control.Feedback>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                type="number"
                {...register("cedula")}
                isInvalid={!!errors.cedula?.message}
              />
              {errors.cedula?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.cedula.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                {...register("fechaNacimiento")}
                isInvalid={!!errors.fechaNacimiento?.message}
              />
              {errors.fechaNacimiento?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.fechaNacimiento.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select
                {...register("sexo")}
                isInvalid={!!errors.sexo?.message}
              >
                <option value="">Seleccione...</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Femenino</option>
              </Form.Select>
              {errors.sexo?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.sexo.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Etnia</Form.Label>
              <Form.Control
                type="text"
                {...register("etnia")}
                isInvalid={!!errors.etnia?.message}
              />
              {errors.etnia?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.etnia.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                {...register("correo")}
                isInvalid={!!errors.correo?.message}
              />
              {errors.correo?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.correo.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Nacionalidad</Form.Label>
              <Form.Control
                type="text"
                {...register("nacionalidad")}
                isInvalid={!!errors.nacionalidad?.message}
              />
              {errors.nacionalidad?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.nacionalidad.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="number"
                {...register("contacto")}
                isInvalid={!!errors.contacto?.message}
              />
              {errors.contacto?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.contacto.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Discapacidad</Form.Label>
              <Form.Select
                {...register("discapacidad")}
                isInvalid={!!errors.discapacidad?.message}
              >
                <option value="">Seleccione...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </Form.Select>
              {errors.discapacidad?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.discapacidad.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mb-3">
              <Form.Label>Dirección Domicilio</Form.Label>
              <Form.Control
                type="text"
                {...register("direccion")}
                isInvalid={!!errors.direccion?.message}
              />
              {errors.direccion?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.direccion.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Número de Casa</Form.Label>
              <Form.Control
                type="text"
                {...register("numeroCasa")}
                isInvalid={!!errors.numeroCasa?.message}
              />
              {errors.numeroCasa?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.numeroCasa.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mb-3">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                {...register("provincia")}
                isInvalid={!!errors.provincia?.message}
              />
              {errors.provincia?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.provincia.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Parroquia</Form.Label>
              <Form.Control
                type="text"
                {...register("parroquia")}
                isInvalid={!!errors.parroquia?.message}
              />
              {errors.parroquia?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.parroquia.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Form.Label>Cantón</Form.Label>
              <Form.Control
                type="text"
                {...register("canton")}
                isInvalid={!!errors.canton?.message}
              />
              {errors.canton?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.canton.message}
                </Form.Control.Feedback>
              )}
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Vive con</Form.Label>
              <Form.Control
                type="text"
                {...register("viveCon")}
                isInvalid={!!errors.viveCon?.message}
              />
              {errors.viveCon?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.viveCon.message}
                </Form.Control.Feedback>
              )}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Necesidad de Educación Especial</Form.Label>
              <Form.Select
                {...register("necesidadEspecial")}
                isInvalid={!!errors.necesidadEspecial?.message}
              >
                <option value="">Seleccione...</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </Form.Select>
              {errors.necesidadEspecial?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.necesidadEspecial.message}
                </Form.Control.Feedback>
              )}
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
