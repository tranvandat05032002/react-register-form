import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputFormik from "../input/InputFormik";
import RadioFormik from "../radio/RadioFormik";
import DropdownFormik from "../dropdown/DropdownFormik";
const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        passWord: "",
        email: "",
        gender: "male",
        job: "",
        term: false,
      }}
      onSubmit={(values, actions) => {
        console.log(actions);
        console.log(values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          actions.resetForm();
        }, 2000);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[300px] mx-auto my-10"
            autoComplete="off"
          >
            <InputFormik
              name="userName"
              id="userName"
              placeholder="Enter your username"
              type="text"
              label="UserName"
            ></InputFormik>

            <InputFormik
              name="passWord"
              id="passWord"
              placeholder="Enter your password"
              label="Password"
              type="text"
            ></InputFormik>

            <InputFormik
              name="email"
              id="email"
              placeholder="Enter your email address"
              label="Email"
              type="email"
            ></InputFormik>

            <div className="flex flex-col gap-3 mb-5">
              <label className="cursor-pointer">Gender</label>
              <div className="flex items-center gap-5">
                <RadioFormik
                  name="gender"
                  value="male"
                  label="Male"
                ></RadioFormik>
                <RadioFormik
                  name="gender"
                  value="female"
                  label="Female"
                ></RadioFormik>
              </div>
            </div>

            <DropdownFormik
              labelText="Your job"
              data={dropdownData}
              name="job"
              dropdownLabel="Select your job"
              setValue={formik.setFieldValue}
            ></DropdownFormik>

            <button
              type="submit"
              className={`w-full py-3 px-4 mt-5 font-normal text-white bg-blue-500 rounded-lg ${
                formik.isSubmitting ? "opacity-50" : ""
              }`}
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 mx-auto border-2 border-t-0 border-white rounded-full border-t-transparent animate-spin transition-all"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
