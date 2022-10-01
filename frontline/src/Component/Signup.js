import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import InputField from "./Form-Fields/InputField";
import "./Signup.css";
import ImageField from "./Form-Fields/ImageField";
import RadioField from "./Form-Fields/RadioField";
import MultiInput from "./Form-Fields/MultiInput";
import TextArea from "./Form-Fields/TeaxtArea";
import axios from "axios";
import { SIGN_UP } from "../Constants/Url";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{7,8}?$/;
  const signUpIntialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profile: "",
    gender: "M",
    phone: "",
    address: "",
    altPhone: [],
  };
  const navigate=useNavigate();

  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
    profile: Yup.mixed().required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "Number Should be 10 digit long")
      .required("Required"),
    altPhone: Yup.array().of(
      Yup.object().shape({
        phone2: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .max(10, "Number Should be 10 digit long")
          .required("Required"),
      })
    ),
    //  gender: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  const signupOnSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    const {
      firstName,
      lastName,
      email,
      password,
    } = values;
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);

    console.log("valus", values);

    axios.post(`${SIGN_UP}/`, formData).then(
      (res) => {
        navigate("/");
      },
      (error) => {
        console.log("error", error);
      }
    );

    resetForm({ values: "" });
  };

  return (
    <div className="signup-form">
      <Formik
        initialValues={signUpIntialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={signupOnSubmit}
      >
        <CCard className="signup-card-container">
          <CCardBody>
            <Form>
              <CCardTitle className="text-center">Please Signup</CCardTitle>
              <CRow xs={{ gutterY: 3 }}>
                <CCol md={6}>
                  <InputField type="text" name="firstName" label="First Name" />
                </CCol>
                <CCol md={6}>
                  <InputField type="text" name="lastName" label="Last Name" />
                </CCol>
                <CCol md={6}>
                  <InputField type="email" name="email" label="Email" />
                </CCol>
                <CCol md={6}>
                  <InputField
                    type="password"
                    name="password"
                    label="Password"
                  />
                </CCol>
                <CCol md={12}>
                  <div className="signup-btn">
                    <CButton type="submit">Submit</CButton>
                  </div>
                </CCol>
              </CRow>
            </Form>
          </CCardBody>
        </CCard>
      </Formik>
    </div>
  );
};
export default Signup;
