"use server";
import { createAdminClient } from "@/config/appwrite";

async function createNewEpisodeType(previousState, formData) {
  try {
    const { databases } = await createAdminClient();
    // Fetch episode types, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document
    const { documents: episodeTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE_TYPE
    );

    const calculatedEpisodeId =
      episodeTypes?.sort((a, b) => b.$id - a.$id)[0].episode_type_id + 1;

    const newEpisodeType = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE_TYPE,
      calculatedEpisodeId.toString(),
      {
        episode_type_id: calculatedEpisodeId,
        episode_type_name: formData.get("episode_name"),
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new episode type", error);
    return {
      error: "Failed to create new episode type",
    };
  }
}

export default createNewEpisodeType;
