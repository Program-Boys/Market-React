import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FormStyled } from "./style";

interface IForm {
  children: React.ReactNode;
  accountSubmit: SubmitHandler<FieldValues>;
}

const Form = ({ children }: IForm) => {
  return <FormStyled>{children}</FormStyled>;
};

export default Form;
