import React from "react";

const TabPanel = ({ children, index, value }) => {
  return index === value && <div className="tab-panels">{children}</div>;
};

export default TabPanel;
