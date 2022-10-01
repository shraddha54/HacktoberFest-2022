import React from "react";
import {  CFormTextarea } from "@coreui/react";
import { useField } from "formik";
import "./Field.css"

const TextArea = ({ name, label,...props }) => {
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
  return <CFormTextarea {...configProps} />;
};

export default TextArea;
