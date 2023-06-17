import React from "react";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <header>{children}</header>;
};

export default Header;
