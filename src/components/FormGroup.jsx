import React from "react";

function FormGroup({label, name, type, objRef, required}) {
  return (
    <div className="flex flex-col justify-start items-start">
      <input
        name={name}
        id={name}
        type={type}
        required={required}
        ref={objRef}
        className="w-full rounded-md p-2 bg-gray-100 border-2 border-white outline-none focus:border-gray-600"
        placeholder={label}
      />
    </div>
  );
}

export default FormGroup;
