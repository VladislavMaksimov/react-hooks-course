import React from "react";

export const SimpleFormField = ({ label, name, type, value, onChange }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};
