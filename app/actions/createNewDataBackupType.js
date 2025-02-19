"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createNewDataBackupType(previousState, formData) {
  try {
    const { databases } = await createAdminClient();

    const newDataBackupType = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_DATA_BACKUP,
      ID.unique(),
      {
        data_backup_name: formData.get("data_backup_name"),
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new data backup type", error);
    return {
      error: "Failed to create new data backup type",
    };
  }
}

export default createNewDataBackupType;
