import React from "react";

const Tabs = ({ value, onChange, children }) => {
  // display "Tab" elements only
  const tabElements = children.filter((child) => child.type.name === "Tab");
  console.log("children", children);
  return (
    <div className="tabs">
      <ul className="tabs-nav">
        {tabElements.map((child, index) => {
          // clone the child elements so we can send custom property values
          return React.cloneElement(child, {
            key: index,
            onClick: (e) => {
              // return index as the value to determine the active tab
              onChange(e, index);
            },
            isSelected: value === index,
          });
        })}
      </ul>
    </div>
  );
};

export default Tabs;
