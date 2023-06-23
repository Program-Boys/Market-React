import React from "react";

interface IForm {
  children: React.ReactNode;
}

const Form = ({ children }: IForm) => {
  return <form>{children}</form>;
};

export default Form;
