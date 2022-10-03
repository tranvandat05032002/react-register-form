import { useField } from "formik";
import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownFormik = ({
  labelText,
  data,
  name,
  dropdownLabel = "Select your job",
  setValue,
}) => {
  const [field, meta] = useField({ name });
  console.log(meta);
  const [label, setLabel] = useState(dropdownLabel);
  const { show, setShow, nodeRef } = useClickOutside();
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  React.useEffect(() => {
    if (field.value === "") setLabel(dropdownLabel);
  }, [field.value]);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label className="cursor-pointer">{labelText}</label>
      <div className="relative" ref={nodeRef}>
        <div
          className="bg-white flex items-center justify-between  py-2 px-4 rounded-lg cursor-pointer border-gray-100"
          onClick={() => setShow(!show)}
        >
          <span>{label}</span>
        </div>
        <div
          className={`absolute top-full left-0 w-full rounded-lg bg-white ${
            show ? "" : "hidden"
          }`}
        >
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <div
                key={item.id}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={handleClickDropdownItem}
                data-value={item.value}
              >
                {item.text}
              </div>
            ))}
        </div>
      </div>
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default DropdownFormik;
