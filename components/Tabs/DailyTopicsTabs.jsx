"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import DailyTopicDisplay from "../TopicDisplay/DailyTopicDisplay";
import NewTopicFormWrapper from "../FormWrappers/NewTopicFormWrapper";



function getTabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DailyTopicsTabs = ({ subTabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (e, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <Box sx={{ width: "100%", marginTop: "1.5rem" }}>
        <Box sx={{ borderBottom: 2, borderColor: "#156082", marginBottom: "1.5rem" }}>
          <Tabs value={activeTab} onChange={changeTab}>
            {subTabs?.map((tab, index) => (
              <Tab
                key={index}
                sx={{ color: "#156082", fontWeight: "Bold" }}
                label={tab?.typeName}
                {...getTabProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        <NewTopicFormWrapper />
        {subTabs?.map((tab, index) => (
          <CustomTabPanel key={index} activeTab={activeTab} index={index}>
            <DailyTopicDisplay topicType={tab?.typeId} />
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
};

export default DailyTopicsTabs;
