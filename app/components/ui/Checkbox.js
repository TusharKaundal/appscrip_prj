import React from "react";

const Checkbox = ({ label, checked, onChange, id }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
    }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
    />

    <label htmlFor={id}>{label}</label>
  </div>
);

export default Checkbox;
