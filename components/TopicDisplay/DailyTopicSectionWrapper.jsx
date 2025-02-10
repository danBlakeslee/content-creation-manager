"use client";
import React, { useState } from "react";
import EnigmaticTopicDisplayCard from "./EnigmaticTopicDisplayCard";
import TopicDisplaySection from "./TopicDisplaySection";
import DailyTopicDisplayCard from "./DailyTopicDisplayCard";

const DailyTopicSectionWrapper = ({ subType, topicData, isEnigmatic }) => {
  const [expanded, setExpanded] = useState(false);

  const changeExpandedState = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-12">
      <TopicDisplaySection handleExpand={changeExpandedState} title={subType} />
      {isEnigmatic ? (
        <>
          {expanded &&
            topicData?.map((topic, index) => (
              <EnigmaticTopicDisplayCard key={index} enigmaticData={topic} />
            ))}
        </>
      ) : (
        <>
          {expanded &&
            topicData?.map((topic, index) => (
              <DailyTopicDisplayCard key={index} topicData={topic} />
            ))}
        </>
      )}
    </div>
  );
};

export default DailyTopicSectionWrapper;
