"use client";
import React, { useState } from "react";
import TopicDisplaySection from "./TopicDisplaySection";
import DailyTopicDisplayCard from "./DailyTopicDisplayCard";

const DailyTopicSectionWrapper = ({ subType, topicData }) => {
  const [expanded, setExpanded] = useState(false);

  const changeExpandedState = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-12">
      <TopicDisplaySection handleExpand={changeExpandedState} title={subType} />

      {expanded &&
        topicData?.map((topic, index) => (
          <DailyTopicDisplayCard key={index} topicData={topic} />
        ))}
    </div>
  );
};

export default DailyTopicSectionWrapper;
