import React from "react";

import FormContext from "./context/formContext";
import useForm from "./hooks/useForm";

export default function Form(props) {
  const { children, form } = props;

  const [formInstance] = useForm(form);

  return (
    <FormContext.Provider value={formInstance}>{children}</FormContext.Provider>
  );
}
