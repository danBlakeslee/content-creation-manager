"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import DailyTopicDisplay from "../TopicDisplay/DailyTopicDisplay";
import NewTopicFormWrapper from "../FormWrappers/NewTopicFormWrapper";
import { useRouter, useParams } from "next/navigation";



function getTabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DailyTopicsTabs = ({ subTabs, lowestIndex }) => {
  const {day, subtype} = useParams();
  const [activeTab, setActiveTab] = useState(parseInt(subtype, 10) || lowestIndex);
  const router = useRouter();

  const changeTab = (e, newTab) => {
    setActiveTab(newTab);
    router.push(`/planning/topics/${day}/${newTab}`, undefined, {shallow: true});
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
                value={tab?.typeId}
                {...getTabProps(tab?.typeId)}
              />
            ))}
          </Tabs>
        </Box>
        <NewTopicFormWrapper />
        {subTabs?.map((tab, index) => (
          <CustomTabPanel key={index} activeTab={activeTab} index={index}>
            <DailyTopicDisplay />
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
};

export default DailyTopicsTabs;
