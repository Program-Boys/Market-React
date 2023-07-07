import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema } from "../../validations/form.validations";

interface IForm {
  children: React.ReactNode;
  accountSubmit: SubmitHandler<FieldValues>;
}

const Form = ({ children }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  return <form>{children}</form>;
};

export default Form;
