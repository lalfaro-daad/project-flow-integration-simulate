import { z } from "zod";

export const loginSchema = z.object({
  email1: z.string().email("Correo no válido"),
  password1: z.string().min(6, "Mínimo 6 caracteres"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;