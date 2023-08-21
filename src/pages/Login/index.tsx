import { Button, TextField } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/form.validations";
import React, { useState } from "react";
import { Form, MuiBox } from "./style";

interface IForm {
  children: React.ReactNode;
  accountSubmit: SubmitHandler<FieldValues>;
}

export interface IOnSubmitFunctionProps {
  email: string;
  password: string;
}

const Login = ({ accountSubmit }: IForm) => {
  const [value, setFormValue] = useState("");

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IOnSubmitFunctionProps>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: IOnSubmitFunctionProps) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <MuiBox>
          <TextField
            placeholder="Email"
            onChange={(e) => setValue("email", e.target.value)}
          />
          <TextField
            placeholder="Senha"
            onChange={(e) => setValue("password", e.target.value)}
          />
          <Button variant="contained" type="submit">
            Entrar
          </Button>
        </MuiBox>
      </Form>
    </>
  );
};

export default Login;
