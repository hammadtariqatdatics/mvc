import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import userSchema from "../schemas/Validation";
import axios from "axios";

export default function Register() {
  const initialUserData = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const data = await axios.post("http://localhost:5000/users/create", values);
    console.log(data);
  };

  return (
    <div class="container">
      <Formik
        initialValues={initialUserData}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <label>Name</label>
          <br/>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <br />
          <label>Email</label>
          <br/>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <br />
          <label>Password</label>
          <br/>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <br />
          <br/>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
