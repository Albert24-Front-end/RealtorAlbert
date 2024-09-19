import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginInput from "./UI/LoginInput/LoginInput";
import LoginButton from "./UI/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../store/API/authAPI";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "At least 8 symbols")
    .max(16, "No more than 16 symbols"),
});

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [loginUser, { data: loginData, error: loginError }] =
    useLoginUserMutation();
  const { isSignedIn } = useUser();
  // data (нельзя называть по-другому) - данные, возвращаемые сервером в случае успешного запроса, loginUser - функция, отправляющая данные из логин формы в бэкэнд

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (loginData?.message) {
      localStorage.removeItem("userId");
      alert(loginData.message);
    }
    if (loginError) {
      console.error("Login error:", loginError);
      alert("Login failed. Please check your email and password.");
    }
    if (loginData?.user_id) {
      localStorage.setItem("userId", JSON.stringify(loginData?.user_id));
      console.log("Going to main");
      navigate("/main");
    }

    const userId = localStorage.getItem("userId");

    if (isSignedIn || userId) {
      navigate("/main");
    }
  }, [isSignedIn, userId, loginData, loginError]);

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log("im here");
    loginUser({ email: data.email, password: data.password });
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <LoginInput
            type={"text"}
            placeholder={"Email"}
            isError={errors.email ? true : false}
            errorMessage={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <LoginInput
            type={"password"}
            placeholder={"Password"}
            isError={errors.password ? true : false}
            errorMessage={errors.password?.message}
            {...field}
          />
        )}
      />
      <LoginButton text={"Log in"} type={"submit"} />
    </form>
  );
};

export default LoginForm;
