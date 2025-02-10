"use server";

import updateEpisode from "../actions/updateEpisode";

const updateEpisodeHelper = async (episodeData) => {
  const asdf = await updateEpisode(episodeData);
  return asdf;
};

export default updateEpisodeHelper;
