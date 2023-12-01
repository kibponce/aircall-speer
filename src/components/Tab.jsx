import React from "react";

const Tab = ({ label, onClick, isSelected = false }) => {
  return (
    <li onClick={onClick} className={`${isSelected ? "active" : ""}`}>
      <div>{label}</div>
    </li>
  );
};

export default Tab;
