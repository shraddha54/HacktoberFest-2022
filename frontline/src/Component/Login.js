import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CRow,
  CCol,
  CButton,
  CLink,
} from "@coreui/react";
import InputField from "./Form-Fields/InputField";
import "./Login.css";
import axios from "axios";
import { LOGIN } from "../Constants/Url";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const loginInitialvalues = {
    email: "",
    password: "",
  };

  const loginOnSubmit = (values, { resetForm }) => {
    axios.post(`${LOGIN}/`, values).then(
      (res) => {
        navigate("/user/gps");
      },
      (error) => {
        console.log("error", error);
      }
    );
    resetForm({ values: "" });
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="login-form">
      <Formik
        initialValues={loginInitialvalues}
        validationSchema={loginValidationSchema}
        onSubmit={loginOnSubmit}
      >
        <CCard className="login-card">
          <CCardBody>
            <Form>
              <CCardTitle className="text-center">Please Login</CCardTitle>
              <CRow xs={{ gutterY: 3 }}>
                <CCol md={12}>
                  <InputField type="email" name="email" label="Email" />
                </CCol>
                <CCol md={12}>
                  <InputField
                    type="password"
                    name="password"
                    label="Password"
                  />
                </CCol>
                <CCol md={12}>
                  <CButton type="submit">Login</CButton>
                </CCol>
                <CCol md={12}>
                  <Link to="/signup" className="signup-link">
                    Signup
                  </Link>
                </CCol>
                <CCol md={12}>
                  <Link to="/" className="forgot-link">
                    Forgot password
                  </Link>
                </CCol>
              </CRow>
            </Form>
          </CCardBody>
        </CCard>
      </Formik>
    </div>
  );
};
export default Login;
