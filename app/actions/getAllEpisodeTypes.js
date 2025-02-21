"use server";
import { createAdminClient } from "@/config/appwrite";
import { Query } from "node-appwrite";

async function getAllEpisodeTypes() {
  try {
    const { databases } = await createAdminClient();
    // Fetch episode types
    const { documents: episodeTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE_TYPE,
      [Query.limit(50)]
    );
    return episodeTypes;
  } catch (error) {
    console.log("Failed to get episode types", error);
    return {
      error: "Failed to get episode types",
    };
  }
}

export default getAllEpisodeTypes;
