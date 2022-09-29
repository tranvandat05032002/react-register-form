import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      type="text"
      className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-500 transition-all"
      {...field}
      {...props}
    />
  );
};

export default InputHook;
