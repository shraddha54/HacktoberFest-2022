import React from "react";
import { CFormInput } from "@coreui/react";
import { useField } from "formik";
import "./Field.css"

const InputField = ({ name, label,...props }) => {
  const [field, meta] = useField(name);
  const configProps = {
    ...field,
    ...props,
    label: label
  };
  if (meta?.touched && meta?.error) {
    configProps.error = true;
    configProps.text = meta.error;
  }
  return <CFormInput {...configProps} />;
};

export default InputField;
