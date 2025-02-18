"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";

async function createNewTopicSubtype(previousState, formData) {
  try {
    const { databases } = await createAdminClient();
    // Fetch topic subtype, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document
    const { documents: topicSubtypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_SUBTYPE
    );

    const calculatedTopicSubtypeId = topicSubtypes?.length
      ? topicSubtypes?.sort((a, b) => b.$id - a.$id)[0].topic_subtype_id + 1
      : 1;

    const newTopicSubtype = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_SUBTYPE,
      calculatedTopicSubtypeId.toString(),
      {
        topic_subtype_id: calculatedTopicSubtypeId,
        topic_subtype_name: formData.get("topic_subtype_name"),
        topicKingdom: formData.get("topic_kingdom"),
      }
    );

    revalidatePath("/planning/maintenance");
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new topic subtype", error);
    return {
      error: "Failed to create new topic subtype",
    };
  }
}

export default createNewTopicSubtype;
