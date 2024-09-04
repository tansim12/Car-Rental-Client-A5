import z from "zod";
export const registerSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  phone: z.string({ required_error: "Phone number is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email must be a valid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long"),
  confirmPassword: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long"),
});
