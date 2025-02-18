"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Suspense, useEffect, useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import DailyTopicContainer from "../TopicContainers/DailyTopicContainer";
import {
  dayTabMapping,
  dayTabMappingReverse,
  tabsConfig,
} from "@/app/helpers/helperObjects";
import { TopicsProvider } from "@/app/context/topicContext";
import TopicsSubtabWrapper from "./TopicsSubtabsWrapper";
import { useRouter, useParams } from "next/navigation";
import Loading from "../Loading";

function getTabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopicsTabs = ({ allTopics }) => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActiveTab(dayTabMapping[params?.day] || 0);
  }, []);

  const changeTab = (e, newTab) => {
    setActiveTab(newTab);
    const dayTab = dayTabMappingReverse[newTab];
    const lowestIndex = tabsConfig[dayTab]?.sort(
      (a, b) => b.subTab - a.subTab
    )[0]?.typeId;
    router.push(`/planning/topics/${dayTab}/${lowestIndex}`);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Suspense fallback={<Loading />}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={false} onChange={changeTab}>
              <Tab label="Sunday" {...getTabProps(0)} />
              <Tab label="Monday" {...getTabProps(1)} />
              <Tab label="Tuesday" {...getTabProps(2)} />
              <Tab label="Wednesday" {...getTabProps(3)} />
              <Tab label="Thursday" {...getTabProps(4)} />
              <Tab label="Friday" {...getTabProps(5)} />
              <Tab label="Saturday" {...getTabProps(6)} />
              <Tab label="Erstwhile Enigmas" {...getTabProps(7)} />
            </Tabs>
          </Box>
          <TopicsProvider>
            <TopicsSubtabWrapper allTopics={allTopics}>
              <CustomTabPanel activeTab={activeTab} index={0}>
                <DailyTopicContainer subTabs={tabsConfig?.sunday} />
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={1}>
                <DailyTopicContainer subTabs={tabsConfig?.monday} />
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={2}>
                <DailyTopicContainer subTabs={tabsConfig?.tuesday} />
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={3}>
                <DailyTopicContainer subTabs={tabsConfig?.wednesday} />
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={4}>
                Thursday Strange Phenomena Topics
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={5}>
                Friday Fortean Topics
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={6}>
                Saturday MLSU Topics
              </CustomTabPanel>
              <CustomTabPanel activeTab={activeTab} index={7}>
                Erstwhile Enigmas
              </CustomTabPanel>
            </TopicsSubtabWrapper>
          </TopicsProvider>
        </Suspense>
      </Box>
    </>
  );
};

export default TopicsTabs;
