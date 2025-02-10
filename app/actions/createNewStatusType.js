"use server";
import { createAdminClient } from "@/config/appwrite";

async function createNewStatusType(previousState, formData) {
  try {
    const { databases } = await createAdminClient();
    // Fetch status types, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document
    const { documents: statusTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STATUS_TYPE
    );

    const calculatedStatusId =
    statusTypes?.sort((a, b) => b.$id - a.$id)[0].episode_status_id + 1;

    const newStatusType = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STATUS_TYPE,
      calculatedStatusId.toString(),
      {
        episode_status_id: calculatedStatusId,
        episode_status_name: formData.get("status_name"),
        associated_color: formData.get("status_color")
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new status type", error);
    return {
      error: "Failed to create new status type",
    };
  }
}

export default createNewStatusType;
