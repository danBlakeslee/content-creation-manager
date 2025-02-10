import React from "react";
import NewTopicFormWrapper from "../FormWrappers/NewTopicFormWrapper";
import DailyTopicDisplay from "../TopicDisplay/DailyTopicDisplay";
import DailyTopicsTabs from "../Tabs/DailyTopicsTabs";

const DailyTopicContainer = ({subTabs}) => {
// When I fetch topic data, this is where it should be fetched. Should make an action
// called getTopicsByEpisodeTypes and pass in the IDs from the subtabs prop to get only the records
// that need to be displayed in the DailyTopicsTabs. The rest of the filtering can be
// done in the topics component to ensure I pull the covered topics out.
  return (
    <>
      <DailyTopicsTabs subTabs={subTabs} />
    </>
  );
};

export default DailyTopicContainer;
