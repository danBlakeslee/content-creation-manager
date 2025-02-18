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
