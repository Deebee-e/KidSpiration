"use client";

import { useState } from 'react';
import { Button, Checkbox, Label, Input } from "flowbite-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {
  const [remember, setRemember] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      // Send form data to server (replace with your actual API call)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Handle successful registration (e.g., show success message, redirect)
      console.log('Registration successful!');

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration errors (e.g., display error message to user)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <Label htmlFor="username">Username</Label>
                <Field
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:focus:border-blue-300 dark:focus:ring-blue-300"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Email address</Label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:focus:border-blue-300 dark:focus:ring-blue-300"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="password">Password</Label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:focus:border-blue-300 dark:focus:ring-blue-300"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="flex items-center mb-4">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <Label htmlFor="remember" className="ml-2">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
