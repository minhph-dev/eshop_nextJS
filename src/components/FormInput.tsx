import React from "react";

export default function FormInput({
  size,
  label,
  className,
  type,
  cols,
  rows,
  textarea,
  ...props
}: any) {
  if (textarea) {
    return (
      <div className={`relative w-full rounded-md ${className}`} {...props}>
        <textarea
          placeholder=" "
          className="form-input w-full block outline-none border border-gray-500 focus:border-blue-700 hover:border-black rounded-md px-4"
          name=""
          id=""
          cols={cols}
          rows={rows}
        ></textarea>
        <label className="form-label inline-block absolute top-2/4 -translate-y-2/4 left-4 select-none pointer-events-none text-base text-gray-500">
          {label}
        </label>
      </div>
    );
  }
  switch (size) {
    case "large":
      return (
        <div className={`relative w-full rounded-md ${className}`} {...props}>
          <input
            className="form-input h-14 w-full block outline-none border border-gray-500 focus:border-blue-700 hover:border-black rounded-md px-4"
            type={type}
            placeholder=" "
          />
          <label className="form-label inline-block absolute top-2/4 -translate-y-2/4 left-4 select-none pointer-events-none text-base text-gray-500">
            {label}
          </label>
        </div>
      );
    case "small":
      return (
        <div className={`relative w-full rounded-md ${className}`} {...props}>
          <input
            className="form-input h-10 w-full block outline-none border border-gray-500 focus:border-blue-700 hover:border-black rounded-md px-4"
            type={type}
            placeholder=" "
          />
          <label className="form-label inline-block absolute top-2/4 -translate-y-2/4 left-4 select-none pointer-events-none text-base text-gray-500">
            {label}
          </label>
        </div>
      );
    default:
      return null;
  }
}