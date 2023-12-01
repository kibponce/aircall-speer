import React from "react";

const Tabs = ({ value, onChange, children }) => {
  return (
    <div className="tabs">
      <ul className="tabs-nav">
        {children.map((child, index) => {
          // clone the child elements so we can send custom property values
          return React.cloneElement(child, {
            key: index,
            onClick: () => {
              // return index as the value to determine the active tab
              onChange(index);
            },
            isSelected: value === index,
          });
        })}
      </ul>
    </div>
  );
};

export default Tabs;
