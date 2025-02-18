import React from "react";
import DailyTopicsTabs from "../Tabs/DailyTopicsTabs";

const DailyTopicContainer = ({ subTabs }) => {
  const lowestIndex = subTabs?.sort((a, b) => b.subTab - a.subTab)[0]?.typeId;
  return (
    <>
      <DailyTopicsTabs
        subTabs={subTabs}
        lowestIndex={parseInt(lowestIndex.toString(), 10)}
      />
    </>
  );
};

export default DailyTopicContainer;
