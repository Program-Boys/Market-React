import { useContext } from "react";
import { UserContext } from "../../context/User.context";
import Form from "../../components/Form";

const Register = () => {
  const { registerUser } = useContext(UserContext);

  return (
    <Form accountSubmit={() => {}}>
      <input type="text" />
    </Form>
  );
};

export default Register;
