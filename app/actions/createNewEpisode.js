"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";


async function createNewEpisode(previousState, formData) {
  const dataConfig = {
    episode_number: parseInt(formData.get("episode_number"), 10),
    day_of_week: formData.get("day"),
    episode_type: formData.get("episode_type"),
    episode_type_number: parseInt(formData.get("episode_type_number")),
    episode_name: formData.get("episode_name"),
    source: formData.get("source"),
    youtube_name: formData.get("youtube_name"),
    episode_status: formData.get("episode_status"),
  };
  try {
    const { databases } = await createAdminClient();
    // Fetch status types, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document

    const newEpisode = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_EPISODE,
      ID.unique(),
      dataConfig
    );

    revalidatePath("/planning/schedule", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new episode", error, dataConfig);
    return {
      error: "Failed to create new episode",
    };
  }
}

export default createNewEpisode;
