import { useTopics } from "@/app/context/topicContext";
import DailyTopicSectionWrapper from "./DailyTopicSectionWrapper";

const DailyTopicDisplay = () => {
  const {topics} = useTopics();
  const allCoveredTopics = [...topics].filter(
    (topic) => topic.covered
  );
  const uncoveredTopics = [...topics].filter(
    (topic) => !topic.covered
  );
  const getUniqueRecordAndSubtype = Array.from(
    new Set([...uncoveredTopics].map((topic) => topic?.topicSubtype?.name))
  );

  return (
    <>
      {allCoveredTopics?.length ? (
        <DailyTopicSectionWrapper
          subType={"Covered"}
          isEnigmatic={false}
          topicData={allCoveredTopics}
        />
      ) : (
        <></>
      )}
      {getUniqueRecordAndSubtype?.map((subtype, index) => (
        <DailyTopicSectionWrapper
          key={index}
          subType={subtype}
          isEnigmatic={false}
          topicData={[...topics].filter(
            (topic) =>
              !topic.covered &&
              topic?.topicSubtype?.name === subtype
          )}
        />
      ))}
    </>
  );
};

export default DailyTopicDisplay;
