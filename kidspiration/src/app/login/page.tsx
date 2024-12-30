"use client";
  2 import { Button, Checkbox, Label } from "flowbite-react";
  3 import { Formik, Field, Form, ErrorMessage } from "formik";
  4 import * as Yup from "yup";
  5
  6 export default function Login() {
  7   // Formik initial values and validation schema using Yup
  8   const initialValues = {
  9     email: "",
 10     password: "",
 11   };
 12
 13   const validationSchema = Yup.object({
 14     email: Yup.string()
 15       .email("Invalid email address")
 16       .required("Email is required"),
 17     password: Yup.string()
 18       .min(6, "Password must be at least 6 characters long")
 19       .required("Password is required"),
 20   });
 21
 22   const handleSubmit = (values: any) => {
 23     // Handle form submission
 24     console.log(values);
