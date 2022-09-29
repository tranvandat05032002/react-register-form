import { Form } from "formik";
import React from "react";
import { useForm } from "react-hook-form";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const RegisterHook = () => {
  //onSubmit
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  // useForm
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();
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
          name="useName"
          placeholder="Enter your user name"
          id="userName"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-sm">
          please enter at least one character
        </p>
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
        <p className="text-red-500 text-sm">
          please enter at least one character
        </p>
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
        <p className="text-red-500 text-sm">
          please enter at least one character
        </p>
      </div>
      {/* gender radio */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook name="gender" control={control} value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="Female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>

      {/* DropDown */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          name="job"
          dropdownLabel="Select your job"
          setValue={setValue}
        ></DropdownHook>
      </div>

      {/* button */}
      <button
        type="submit"
        className="w-full py-2 rounded-lg text-white font-thin mt-5 bg-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
