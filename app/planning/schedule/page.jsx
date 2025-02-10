import getAllPlannedVideos from "@/app/actions/getAllPlannedVideos";
import EpisodeTableWrapper from "@/components/EpisodeTableWrapper";
import NewEpisodeFormWrapper from "@/components/FormWrappers/NewEpisodeFormWrapper";
import Heading from "@/components/Heading";
import React from "react";

const SchedulePage = async () => {
  const allEpisodes = await getAllPlannedVideos();
  return (
    <>
      <Heading title="Posting Schedule" />
      <NewEpisodeFormWrapper />
      <EpisodeTableWrapper allEpisodes={allEpisodes} />
    </>
  );
};

export default SchedulePage;
