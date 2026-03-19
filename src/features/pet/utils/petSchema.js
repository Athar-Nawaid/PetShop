import { z } from "zod";

export const petSchema = z.object({
  name: z.string().min(1, "Pet name is required"),
  breed: z.string().min(1, "Breed is required"),
  age: z
    .string()
    .min(1, "Age is required")
    .refine((val) => !isNaN(val) && Number(val) > 0, {
      message: "Age must be a valid number",
    }),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(val) && Number(val) > 0, {
      message: "Price must be a valid number",
    }),
});