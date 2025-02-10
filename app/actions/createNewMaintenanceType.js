"use server";
import { createAdminClient } from "@/config/appwrite";

async function createNewMaintenanceType(previousState, formData) {
  try {
    const { databases } = await createAdminClient();
    // Fetch maintenance types, sort by greatest to least on the id, then take that Id and that is going to be
    // the id of the new document
    const { documents: maintenanceTypes } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MAINTENANCE_TYPE
    );

    const calculatedMaintenanceId =
    maintenanceTypes?.sort((a, b) => b.$id - a.$id)[0].maintenance_type_id + 1;

    const newMaintenanceType = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_MAINTENANCE_TYPE,
      calculatedMaintenanceId.toString(),
      {
        maintenance_type_id: calculatedMaintenanceId,
        maintenance_type_name: formData.get("maintenance_name"),
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to create new maintenance type", error);
    return {
      error: "Failed to create new maintenance type",
    };
  }
}

export default createNewMaintenanceType;
