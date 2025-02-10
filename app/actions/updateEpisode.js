"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";

const updateEpisode = async (episodeData, episodeId) => {
  try {
    const { databases } = await createAdminClient();
    // update episode
    console.log(episodeData);
    databases.updateRelationshipAttribute
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE,
      episodeId,
      episodeData
    );

    revalidatePath("/planning/schedule", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to update episode", error.response);
    return {
      error: "Failed to update episode",
    };
  }
};

export default updateEpisode;
