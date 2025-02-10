import React from "react";

const CustomTabPanel = (props) => {
  const { children, activeTab, index } = props;
  return <div>{activeTab === index && <>{children}</>}</div>;
};

export default CustomTabPanel;
