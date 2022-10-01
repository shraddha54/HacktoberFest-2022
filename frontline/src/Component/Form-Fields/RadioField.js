import React from "react";
import { CCol, CFormCheck, CFormLabel, CRow } from "@coreui/react";
import { useField, useFormikContext } from "formik";
import "./Field.css";

  
  const RadioField = ({ name,...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);
  
    const handleChange = (event) => {
      setFieldValue(name, event.target.value);
    };
  
    const configProps = {
      ...field,
      ...props,
      name:name,
      onChange: handleChange,
    };
    
  
    return (
       <React.Fragment>
        <CFormCheck {...configProps} />
       </React.Fragment>
    );
  };
  
  export default RadioField;
  