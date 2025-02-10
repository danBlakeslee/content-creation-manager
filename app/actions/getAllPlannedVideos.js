"use server";
import { createAdminClient } from "@/config/appwrite";
import { Query } from "node-appwrite";

const getAllPlannedVideos = async () => {
  try {
    const { databases } = await createAdminClient();
    // Fetch planned epsisodes
    const { documents: plannedEpisodes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE,
      [Query.limit(1000), Query.orderAsc("episode_number")]
    );

    return plannedEpisodes;
  } catch (error) {
    console.log("Failed to get episodes", error);
    return {
      error: "Failed to get episodes"
    }
  }
};

export default getAllPlannedVideos;
