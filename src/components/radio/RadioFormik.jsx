import { useField } from "formik";
import React from "react";

const RadioFormik = ({ label, ...props }) => {
  console.log(props);
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log(meta);
  return (
    <div className="flex items-center gap-x-3">
      <label className="cursor-pointer custom-radio">
        <input type="radio" className="hidden" {...field} {...props} />
        <div className="w-full h-full bg-white rounded-full"></div>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default RadioFormik;
