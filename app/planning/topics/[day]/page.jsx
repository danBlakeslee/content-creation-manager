import getAllTopics from "@/app/actions/getAllTopics";
import getTopicsByEpisodeTypes from "@/app/actions/getTopicsByEpisodeTypes";
import { tabsConfig } from "@/app/helpers/helperObjects";
import Heading from "@/components/Heading";
import TopicsTabsWrapper from "@/components/TopicsTabsWrapper";

const TopicsDayPage = async ({ params }) => {
  return (
    <>
      <Heading title="Video Topic Ideas" />
      <TopicsTabsWrapper />
    </>
  );
};

export default TopicsDayPage;
