import allTopics from "../../mondayTestData.json";
import DailyTopicSectionWrapper from "./DailyTopicSectionWrapper";

const DailyTopicDisplay = ({ topicType }) => {
  const allCoveredTopics = [...allTopics].filter(
    (topic) => topic.covered && topic.episodeType === topicType
  );
  const uncoveredTopics = [...allTopics].filter(
    (topic) => !topic.covered && topic.episodeType === topicType
  );
  const getUniqueRecordAndSubtype = Array.from(
    new Set([...uncoveredTopics].map((topic) => topic.topicSubtype))
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
          topicData={[...allTopics].filter(
            (topic) =>
              topic.topicSubtype === subtype && topic.episodeType === topicType
          )}
        />
      ))}
    </>
  );
};

export default DailyTopicDisplay;
