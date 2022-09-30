import { Form } from "formik";
import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// data dropdown

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
// schemaValidation

const schemaValidation = Yup.object({
  userName: Yup.string().required("Please enter your user name"),
  password: Yup.string()
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
});
//watch
const RegisterHook = () => {
  // useForm
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    control,
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });
  const watchGender = watch("gender");
  //onSubmit
  const onSubmitHandler = (values) => {
    if (!isValid) return;

    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        reset({
          userName: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          term: false,
        });
        alert(JSON.stringify(values));
      }, 2000);
      console.log(values);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
    >
      {/* useName */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="userName" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="userName"
          placeholder="Enter your user name"
          id="userName"
          control={control}
          type="text"
        ></InputHook>
        {/* {errors.useName && (
          <p className="text-red-500 text-sm">{errors.useName.message}</p>
        )} */}
        <p className="text-red-500 text-sm">{errors?.userName?.message}</p>
      </div>

      {/* password */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          placeholder="Enter your user password"
          id="password"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-sm">{errors?.password?.message}</p>
      </div>
      {/* email address */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          placeholder="Enter your user email"
          id="email"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-sm">{errors?.email?.message}</p>
      </div>
      {/* gender radio */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="male"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        <p className="text-red-500 text-sm">{errors?.gender?.message}</p>
      </div>

      {/* DropDown */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          name="job"
          dropdownLabel={
            isSubmitSuccessful ? "Select your job" : "Select your job"
          }
          setValue={setValue}
          data={dropdownData}
        ></DropdownHook>

        <p className="text-red-500 text-sm">{errors?.job?.message}</p>
      </div>

      {/* CheckboxHook */}
      <div className="flex flex-col gap-3">
        <CheckboxHook
          control={control}
          name="term"
          text="I accept the terms conditions"
        ></CheckboxHook>
        <p className="text-red-500 text-sm">{errors?.term?.message}</p>
      </div>

      {/* button */}
      <button
        type="submit"
        className={`w-full py-2 rounded-lg text-white font-thin mt-5 bg-blue-500 ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin transition-all"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
