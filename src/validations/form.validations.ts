import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  email: yup.string().email().required("Your email is required"),
  cpf: yup.string().required("Your CPF is required"),
  password: yup.string().required("Your password is required"),
});
