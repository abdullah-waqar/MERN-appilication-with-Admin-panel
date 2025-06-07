const { z } = require("zod");
const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be atleast3 characters")
    .max(255, "Name must be atmost 50 characters"),

  email: z
    .string({
      required_error: "Email is required",
    })
    .trim()
    .email("Invalid email format"),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .trim()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password must be at most 255 characters"),
});

const loginSchema = z.object({
    email: z
        .string({
        required_error: "Email is required",
        })
        .trim()
        .email("Invalid email format"),
    
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, "Password must be at least 6 characters")
        .max(255, "Password must be at most 255 characters"),
})

module.exports = { signupSchema, loginSchema };