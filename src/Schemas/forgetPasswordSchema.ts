import { z } from "zod";

export const forgetPasswordSchemaZod = z.object({
  oldPassword: z.string({
    required_error: "Old password is required",
  }),
  newPassword: z.string({ required_error: "Password is required" }),
  confirmNewPassword: z.string({ required_error: "Confirm New Password is required" }),
});
