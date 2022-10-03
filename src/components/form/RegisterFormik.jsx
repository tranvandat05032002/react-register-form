import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputFormik from "../input/InputFormik";
import RadioFormik from "../radio/RadioFormik";
import DropdownFormik from "../dropdown/DropdownFormik";
import CheckboxFormik from "../checkbox/CheckboxFormik";
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
      validationSchema={Yup.object({
        userName: Yup.string().required("Please enter your user name"),
        passWord: Yup.string()
          .min(8, "Your password must be at least 8 character or greater")
          .required("Please enter your password")
          .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
            message: "Your password must have least 1 character or 1 number",
          }),
        email: Yup.string()
          .email("Must be valid email address")
          .required("Please enter your email"),
        gender: Yup.string().required("Please select your gender"),
        job: Yup.string()
          .required("Please select your job")
          .oneOf(
            ["teacher", "developer", "doctor", "constructor"],
            "The job isn't in the selection"
          ),
        term: Yup.boolean().required("Please accept the terms and conditions"),
      })}
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
        const watchGender = formik.values.gender;
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
                  checked={watchGender === "male"}
                ></RadioFormik>
                <RadioFormik
                  name="gender"
                  value="female"
                  label="Female"
                  checked={watchGender === "female"}
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

            <CheckboxFormik name="term">
              I accept the term conditions
            </CheckboxFormik>

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
