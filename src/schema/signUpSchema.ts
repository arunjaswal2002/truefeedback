import { z } from "Zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleat 2 characters")
  .max(20, "Username must be not more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Please enter a valid username");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6,{message: "Password must be atleast 6 characters long"})
})