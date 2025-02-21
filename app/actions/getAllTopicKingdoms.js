"use server";
import { createAdminClient } from "@/config/appwrite";
import { Query } from "node-appwrite";

async function getAllTopicKingdoms() {
  try {
    const { databases } = await createAdminClient();
    // Fetch topic kingdoms
    const { documents: statusTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC_KINGDOM,
      [Query.limit(15)]
    );
    return statusTypes;
  } catch (error) {
    console.log("Failed to get topic kingdoms", error);
    return {
      error: "Failed to get topic kingdoms",
    };
  }
}

export default getAllTopicKingdoms;
