"use server";
import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";

const updateTopic = async (topicData, topicId) => {
// THIS DATA CONFIG LET ME SAVE EVERYTHING SUCCESSFULLY
//   const dataConfig = {
//     covered: false,
//     topic_name: "Test Topic Updated",
//     topic_notes: "Test Notes Updated.",
//     episodeType: "3",
//     topicKingdom: "2",
//     topicSubtype: "2",
//     topicSource: [
//         {
//           source_title: "Personal Experience Updated",
//           source_content:
//             "Can use my own EVP as an example. Not all instances are Random. Updated",
//           source_notes: "updated",
//           $id: "67746da2001efa9eeaf4",
//         },
//         {
//           source_title: "Sightings S1, E2 Ghost Special 24:46 Updated",
//           source_content: "Direct Answer to Questions Updated",
//           source_notes: "updated",
//           $id: "67746da2001ef8737024",
//         },
//       ],
//   }  

  try {
    const { databases } = await createAdminClient();
    // update episode
    databases.updateRelationshipAttribute
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC,
      "67746da2001efd6b62a6",
      dataConfig
    );

    // revalidatePath("/planning/schedule", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to update topic", error.response);
    return {
      error: "Failed to update topic",
    };
  }
};

export default updateTopic;
