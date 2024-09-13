import { z } from "zod";

export const forgetPasswordSchemaZod = z.object({
  email: z
    .string()
    .email({ message: "Email must be a valid email" })
    .nonempty({ message: "Email is required" }),
  oldPassword: z.string({
    required_error: "Old password is required",
  }),
  newPassword: z.string({ required_error: "Password is required" }),
});
