import allTopics from "../../enigmaticTestData.json";
import EnigmaticTopicSectionWrapper from "./EnigmaticTopicSectionWrapper";

const EnigmaticTopicDisplay = () => {
  const getUniqueRecordAndSubtype = Array.from(
    new Set([...allTopics].map((topic) => topic.topicSubtype))
  );

  return (
    <>
      {getUniqueRecordAndSubtype?.map((subtype, index) => (
        <EnigmaticTopicSectionWrapper
          key={index}
          subType={subtype}
          topicData={[...allTopics].filter(
            (topic) => topic.topicSubtype === subtype
          )}
        />
      ))}
    </>
  );
};

export default EnigmaticTopicDisplay;
