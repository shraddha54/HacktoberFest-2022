import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { CRow, CCol } from "@coreui/react";
import InputField from "./InputField";
import CIcon from "@coreui/icons-react";
import { cilPlus, cilMinus } from "@coreui/icons";

const MultiInput = () => {
  const { values, handleChange, handleBlur } = useFormikContext();
  return (
    <FieldArray name="altPhone">
      {({ remove, push }) => {
        return (
          <React.Fragment>
            <CRow>
              <CCol md={6}>
                <InputField type="number" label="Phone" name="phone" />
              </CCol>
              <CCol md={2}>
                <CRow md={{ gutterY: 3 }}>
                  <CCol md={12} style={{ zIndex: -1 }}>
                    Alt Phone
                  </CCol>
                  <CCol md={2}>
                    <CIcon
                      icon={cilPlus}
                      onClick={() => values?.altPhone.length < 1 ? push({ phone2: "" }):''}
                      className="plus"
                      size="lg"
                    />
                  </CCol>
                </CRow>
              </CCol>
              {values?.altPhone?.map((phone, index) => {
                return (
                  <React.Fragment key={index}>
                    <CCol md={6}>
                      <InputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={`altPhone.${index}.phone2`}
                        label={`Phone ${index + 2}`}
                        required
                      />
                    </CCol>
                    <CCol md={2}>
                      <CRow md={{ gutterY: 3 }}>
                        <CCol md={12} style={{ zIndex: -1 }}>
                          Alt Phone
                        </CCol>
                        <CCol md={2}>
                          <CIcon
                            icon={cilMinus}
                            onClick={() => remove(index)}
                            style={{ cursor: "pointer" }}
                            size="lg"
                          />
                        </CCol>
                      </CRow>
                    </CCol>
                  </React.Fragment>
                );
              })}
            </CRow>
          </React.Fragment>
        );
      }}
    </FieldArray>
  );
};

export default MultiInput;
