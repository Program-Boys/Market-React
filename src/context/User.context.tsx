import { createContext, useState } from "react";
import api from "../services/api";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  registerUser: (args: IUser) => {};
}

interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const registerUser = async ({ name, email, password, cpf }: IUser) => {
    api
      .post("user", {
        name,
        email,
        password,
        cpf,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
