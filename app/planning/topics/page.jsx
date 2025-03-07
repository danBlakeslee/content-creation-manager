import getAllTopics from "@/app/actions/getAllTopics";
import Heading from "@/components/Heading";
import TopicsTabsWrapper from "@/components/TopicsTabsWrapper";


const TopicsPage = async () => {
  return (
    <>
      <Heading title="Video Topic Ideas" />
      <TopicsTabsWrapper />
    </>
  );
};

export default TopicsPage;
