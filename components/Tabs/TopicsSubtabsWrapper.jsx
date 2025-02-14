"use client";
import { useEffect } from "react";
import { useTopics } from "@/app/context/topicContext";


const TopicsSubtabWrapper = ({allTopics, children}) => {
  const {updateTopics} = useTopics();

  useEffect(() => {
    if(allTopics) {
      updateTopics(allTopics);
    }
  }, [allTopics]);


  return (
    <>
    {children}
    </>
  );
};

export default TopicsSubtabWrapper;
