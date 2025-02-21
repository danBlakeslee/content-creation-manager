"use server";
import { createAdminClient } from "@/config/appwrite";
import { Query } from "node-appwrite";

async function getAllStatusTypes() {
  try {
    const { databases } = await createAdminClient();
    // Fetch status types
    const { documents: statusTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STATUS_TYPE,
      [Query.limit(25)]
    );
    return statusTypes;
  } catch (error) {
    console.log("Failed to get status types", error);
    return {
      error: "Failed to get status types",
    };
  }
}

export default getAllStatusTypes;
