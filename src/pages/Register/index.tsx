import { useContext } from "react";
import { UserContext } from "../../context/User.context";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  console.log("CHEGOU MENÓ", registerUser);

  return <></>;
};

export default Register;
