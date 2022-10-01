import React from "react";
import { CFormInput } from "@coreui/react";
import { useField, useFormikContext } from "formik";
import "./Field.css";

const ImageField = ({ name, ...props }) => {
  const { setFieldValue, handleBlur } = useFormikContext();
  const [, meta] = useField(name);

  const handleChange = (event) => {
    setFieldValue(name, event.target.files[0]);
  };

  const configProps = {
    ...props,
    onBlur: handleBlur,
    name: name,
    onChange: handleChange,
  };
  if (meta?.touched && meta?.error) {
    configProps.error = true;
    configProps.text = meta.error;
  }

  return <CFormInput {...configProps} />;
};

export default ImageField;
