import { createContext, useState } from "react";

interface IUserProvider {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser;
}

interface IUser {}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user] = useState<IUser>({} as IUser);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
