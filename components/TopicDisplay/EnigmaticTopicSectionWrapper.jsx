"use client";
import React, { useState } from "react";
import EnigmaticTopicDisplayCard from "./EnigmaticTopicDisplayCard";
import TopicDisplaySection from "./TopicDisplaySection";

const EnigmaticTopicSectionWrapper = ({ subType, topicData }) => {
  const [expanded, setExpanded] = useState(false);

  const changeExpandedState = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-12">
      <TopicDisplaySection handleExpand={changeExpandedState} title={subType} />
      {expanded &&
        topicData?.map((topic, index) => (
          <EnigmaticTopicDisplayCard key={index} enigmaticData={topic} />
        ))}
    </div>
  );
};

export default EnigmaticTopicSectionWrapper;
