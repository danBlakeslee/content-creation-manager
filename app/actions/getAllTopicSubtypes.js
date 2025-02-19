"use server";
import { createAdminClient } from "@/config/appwrite";

async function getAllTopicSubtypes() {
  try {
    const { databases } = await createAdminClient();
    const { documents: subTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_SUBTYPE
    );
    return subTypes;
  } catch (error) {
    console.log("Failed to get topic subtypes", error);
    return {
      error: "Failed to get topic subtypes",
    };
  }
}

export default getAllTopicSubtypes;
