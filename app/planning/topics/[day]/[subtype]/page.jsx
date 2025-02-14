import getAllTopics from "@/app/actions/getAllTopics";
import getTopicsByEpisodeType from "@/app/actions/getTopicByEpisodeType";
import getTopicsByEpisodeTypes from "@/app/actions/getTopicsByEpisodeTypes";
import { tabsConfig } from "@/app/helpers/helperObjects";
import Heading from "@/components/Heading";
import DailyTopicContainer from "@/components/TopicContainers/DailyTopicContainer";
import TopicsTabsWrapper from "@/components/TopicsTabsWrapper";

const TopicsSubtypePage = async ({ params }) => {
  const { day, subtype } = await params;

  const topicsByDay = await getTopicsByEpisodeType(subtype);

  return (
    <>
      <Heading title="Video Topic Ideas" />
      <TopicsTabsWrapper allTopics={topicsByDay} />
    </>
  );
};

export default TopicsSubtypePage;
