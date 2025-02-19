"use server";
import { createAdminClient } from "@/config/appwrite";

async function getAllDataBackupTypes() {
  try {
    const { databases } = await createAdminClient();
    const { documents: dataBackupTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_DATA_BACKUP
    );
    return dataBackupTypes;
  } catch (error) {
    console.log("Failed to get data backup types", error);
    return {
      error: "Failed to get data backup types",
    };
  }
}

export default getAllDataBackupTypes;
