import React from "react";
import TopicsTabs from "./Tabs/TopicsTabs";

const TopicsTabsWrapper = ({allTopics}) => {
  return (
    <>
      <TopicsTabs allTopics={allTopics} />
    </>
  );
};

export default TopicsTabsWrapper;
