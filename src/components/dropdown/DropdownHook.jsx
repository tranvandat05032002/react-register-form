import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownHook = ({
  control,
  setValue,
  name,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const [label, setLabel] = useState(dropdownLabel);

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="flex items-center justify-between px-3 py-2 bg-white border rounded-lg cursor-pointer border-gray-200"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-white rounded-lg ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={handleClickDropdownItem}
          data-value="Teacher"
          className="px-3 py-2 cursor-pointer hover:bg-gray-200"
        >
          Teacher
        </div>
        <div
          onClick={handleClickDropdownItem}
          data-value="Developer"
          className="px-3 py-2 cursor-pointer hover:bg-gray-200"
        >
          Developer
        </div>
        <div
          onClick={handleClickDropdownItem}
          data-value="Doctor"
          className="px-3 py-2 cursor-pointer hover:bg-gray-200"
        >
          Doctor
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;
