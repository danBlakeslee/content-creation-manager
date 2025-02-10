"use server";
import { createAdminClient } from "@/config/appwrite";


async function getAllMaintenanceTypes() {
  try {
    const { databases } = await createAdminClient();
    // Fetch maintenance types
    const { documents: maintenanceTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MAINTENANCE_TYPE
    );
    return maintenanceTypes;
  } catch (error) {
    console.log("Failed to get maintenance types", error);
    return {
      error: "Failed to get maintenance types",
    };
  }
}

export default getAllMaintenanceTypes;
