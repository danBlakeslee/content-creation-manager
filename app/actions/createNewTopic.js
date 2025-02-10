"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createNewTopic(previousState, formData) {
  const formattedFormData = Array.from(formData.entries()).map(
    (keyValuePair) => {
      return { name: keyValuePair[0], value: keyValuePair[1] };
    }
  );

  const calculatedTopicSource = [];

  // look for all sets of source fields using recursion. Starting at 1 and going until there are no more fields.
  function calculateSourceTopicField(sourceSetNumber) {
    const sourceFields = [...formattedFormData]?.filter((field) =>
      field?.name?.includes(sourceSetNumber)
    );

    if (sourceFields.length > 0) {
      calculatedTopicSource.push(sourceFields);
      calculateSourceTopicField(sourceSetNumber + 1);
    } else {
      return;
    }
  }

  calculateSourceTopicField(1);

  const dataConfig = {
    covered: !!formData.get("covered") === "Yes",
    episodeType: formData.get("episode_type"),
    topic_name: formData.get("topic_name"),
    topicKingdom: formData.get("topic_kingdom"),
    topicSubtype: formData.get("topic_subtype"),
    topic_notes: formData.get("topic_notes"),
    topicSource: calculatedTopicSource,
  };

  // THIS DATA CONFIG LET ME ADD THIS RECORD SUCCESSFULLY.
  //   const dataConfig = {
  //     covered: true,
  //     episodeType: "2",
  //     topic_name: "Test Topic",
  //     topicKingdom: "1",
  //     topicSubtype: "1",
  //     topic_notes: "Test Notes.",
  //     topicSource: [
  //       {
  //         source_title: "Personal Experience",
  //         source_content:
  //           "Can use my own EVP as an example. Not all instances are Random",
  //         source_notes: "",
  //         $id: ID.unique().toString(),
  //       },
  //       {
  //         source_title: "Sightings S1, E2 Ghost Special 24:46",
  //         source_content: "Direct Answer to Questions",
  //         source_notes: "",
  //         $id: ID.unique().toString(),
  //       },
  //     ],
  //   };

  try {
    const { databases } = await createAdminClient();
    // const newTopic = await databases.createDocument(
    //   process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    //   process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC,
    //   ID.unique(),
    //   dataConfig
    // );

    console.log(dataConfig);
    return {
      success: true,
    };

    // revalidatePath("/planning/schedule", "layout");
  } catch (error) {
    console.log("Failed to create new topic", error, dataConfig);
    return {
      error: "Failed to create new topic",
    };
  }
}

export default createNewTopic;
