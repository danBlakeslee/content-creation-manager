"use client";
import Heading from "@/components/Heading";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import NewTopicFormWrapper from "../FormWrappers/NewTopicFormWrapper";
import EnigmaticTopicContainer from "../TopicContainers/EnigmaticTopicContainer";
import DailyTopicContainer from "../TopicContainers/DailyTopicContainer";
import { tabsConfig } from "@/app/helpers/helperObjects";

function getTabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopicsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (e, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={activeTab} onChange={changeTab}>
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
        <CustomTabPanel activeTab={activeTab} index={0}>
          <EnigmaticTopicContainer />
        </CustomTabPanel>
        <CustomTabPanel activeTab={activeTab} index={1}>
          <DailyTopicContainer subTabs={tabsConfig?.monday} />
        </CustomTabPanel>
        <CustomTabPanel activeTab={activeTab} index={2}>
          Tuesday Alien Topics
        </CustomTabPanel>
        <CustomTabPanel activeTab={activeTab} index={3}>
          Wednesday Cryptid Topics
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
      </Box>
    </>
  );
};

export default TopicsTabs;
