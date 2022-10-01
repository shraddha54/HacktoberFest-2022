import React from "react";
import { CFormSelect } from "@coreui/react";
import { useField, useFormikContext } from "formik";
import "./Field.css"

const SelectField = ({name,options,...props}) =>{
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (event) => {
      setFieldValue(name, event.target.value);
    };
  
    const configProps = {
      ...field,
      ...props,
      required: true,
      select: true,
      options:options,
      onChange: handleChange,
    };
    if (meta?.touched && meta?.error) {
        configProps.error = true;
        configProps.text = meta.error;
    }
    return (
      <CFormSelect {...configProps} />
    );
}
export default SelectField;