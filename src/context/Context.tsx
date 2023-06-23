import UserProvider from "./User.context";

interface IContext {
  children: React.ReactNode;
}

const Context = ({ children }: IContext) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Context;
