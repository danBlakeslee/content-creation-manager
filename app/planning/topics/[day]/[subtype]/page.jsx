import getTopicsByEpisodeType from "@/app/actions/getTopicByEpisodeType";
import Heading from "@/components/Heading";
import TopicsTabsWrapper from "@/components/TopicsTabsWrapper";

const TopicsSubtypePage = async ({ params }) => {
  const { subtype } = await params;

  const topicsByDay = await getTopicsByEpisodeType(subtype);

  return (
    <>
      <Heading title="Video Topic Ideas" />
      <TopicsTabsWrapper allTopics={topicsByDay} />
    </>
  );
};

export default TopicsSubtypePage;
