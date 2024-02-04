import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { FormData } from "./form";
import { StyledButton, StyledTextField } from "./form.syles";
import { passwordSchema, phoneSchema } from "./register-schema";

const RegisterForm = () => {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(30),
      middleName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      phone: phoneSchema,
      password: passwordSchema,
      confirmPassword: passwordSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    try {
      const response = await fetch("https://api.yufarev.ru/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Registration successful:", responseData);
    } catch (error) {
      console.error("Registration failed:");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(submitData)}>
      <StyledTextField
        label="Имя"
        fullWidth
        required
        {...register("firstName")}
        helperText={errors.firstName?.message}
        error={!!errors.firstName}
      />
      <StyledTextField
        label="Фамилия"
        fullWidth
        required
        {...register("middleName")}
      />
      <StyledTextField label="Отчество" fullWidth {...register("lastName")} />
      <StyledTextField
        label="Email"
        fullWidth
        required
        {...register("email")}
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <StyledTextField
        label="Телефон"
        fullWidth
        {...register("phone")}
        helperText={errors.phone?.message}
        error={!!errors.phone}
      />
      <StyledTextField
        type="password"
        {...register("password")}
        label="Пароль"
        fullWidth
        required
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      <StyledTextField
        type="password"
        {...register("confirmPassword")}
        label="Повторите пароль"
        fullWidth
        required
        helperText={errors.confirmPassword?.message}
        error={!!errors.confirmPassword}
      />
      <StyledButton type="submit" fullWidth color="success" variant="contained">
        Зарегистрироваться
      </StyledButton>
    </form>
  );
};

export default RegisterForm;
