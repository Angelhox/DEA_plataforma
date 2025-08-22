import { z } from "zod";
const genero = ["Hombre", "Mujer"] as const;
export const ninioSchema = z.object({
  nombres: z
    .string()
    .min(3, { message: "Ingrese mínimo 3 caracteres" })
    .max(100, { error: "Ingrese máximo 100 caracteres" }),
  apellidos: z
    .string()
    .min(3, { error: "Ingrese mínimo 3 caracteres" })
    .max(100, { error: "Ingrese máximo 100 caracteres" }),
  cedula: z
    .string()
    .min(10, { error: "Ingrese mínimo 10 caracteres" })
    .max(15, { error: "Ingrese máximo 15 caracteres" }),
  fechaNacimiento: z
    .string()
    .refine((dob) => new Date(dob).toString() !== "Invalid Date", {
      message: "Ingrese una fecha válida",
    }),
  sexo: z.enum(genero, { error: "Seleccione un género válido" }),
  etnia: z
    .string()
    .min(3, { error: "Ingrese mínimo 3 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
  correo: z.email({ error: "Ingresa un correo válido" }),
  nacionalidad: z
    .string()
    .min(3, { error: "Ingrese mínimo 3 caracteres" })
    .max(100, { error: "Ingrese máximo 100 caracteres" }),
  contacto: z
    .string()
    .min(10, { error: "Ingrese mínimo 10 caracteres" })
    .max(10, { error: "Ingrese máximo 10 caracteres" }),
  //   discapacidad: z.boolean({error:"Seleccione una opcion válida"}),
  discapacidad: z.string(),
  direccion: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
  numeroCasa: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(10, { error: "Ingrese máximo 100 caracteres" }),
  provincia: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
  parroquia: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
  canton: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
  viveCon: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(200, { error: "Ingrese máximo 200 caracteres" }),
  necesidadEspecial: z
    .string()
    .min(2, { error: "Ingrese mínimo 2 caracteres" })
    .max(45, { error: "Ingrese máximo 45 caracteres" }),
});
