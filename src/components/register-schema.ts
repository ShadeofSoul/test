import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const phoneSchema = z
  .string()
  .regex(phoneRegex, "Введён неверный номер телефона");

export const passwordSchema = z
  .string()
  .refine((password) => password.length >= 6, {
    message: "Password must be at least 6 characters long",
  })
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: "Password must contain at least one special character ",
  });
