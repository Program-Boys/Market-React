import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "../../validations/form.validations";
import { Container } from "./style";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  return (
    <Container>
      <h1>Register Page</h1>
    </Container>
  );
};

export default Register;
