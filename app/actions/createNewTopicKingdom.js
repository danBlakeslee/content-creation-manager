"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { episodeTypeDataArray } from "../helpers/helperObjects";

async function createNewTopicKingdom(
  selectedEpisodeTypes,
  previousState,
  formData
) {
  try {
    const { databases } = await createAdminClient();
    // Fetch topic kingdoms, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document
    const { documents: topicKingdoms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_KINGDOM
    );

    const calculatedTopicKingdomId = topicKingdoms?.length
      ? topicKingdoms?.sort((a, b) => b.$id - a.$id)[0].topic_kingdom_id + 1
      : 1;

    const episodeTypeIds = selectedEpisodeTypes?.map((episodeTypeName) => {
      return episodeTypeDataArray
        ?.find((episodeType) => episodeType.typeName === episodeTypeName)
        ?.typeId?.toString();
    });

    const newTopicKingdom = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_KINGDOM,
      calculatedTopicKingdomId.toString(),
      {
        topic_kingdom_id: calculatedTopicKingdomId,
        topic_kingdom_name: formData.get("topic_kingdom_name"),
        episodeType: episodeTypeIds,
      }
    );

    revalidatePath("/planning/maintenance");
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new topic kingdom", error);
    return {
      error: "Failed to create new topic kingdom",
    };
  }
}

export default createNewTopicKingdom;
