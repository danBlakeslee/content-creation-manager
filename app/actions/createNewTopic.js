"use server";
import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createNewTopic(params, previousState, formData) {
  // this is necessary because formData is not an object literal. Here I convert the data into an object literal.
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

  function extractFieldValue(sourceFieldArray, fieldNamePiece) {
    const foundField = sourceFieldArray?.find((field) =>
      field.name.includes(fieldNamePiece)
    );
    return foundField?.value || "";
  }

  const formattedTopicSource = calculatedTopicSource?.map((source) => {
    return {
      source_title: extractFieldValue(source, "title"),
      source_content: extractFieldValue(source, "content"),
      source_notes: extractFieldValue(source, "notes"),
      $id: ID.unique().toString(),
    };
  });

  const dataConfig = {
    covered: !!(formData.get("covered") === "Yes"),
    episodeType: formData.get("episode_type"),
    topic_name: formData.get("topic_name"),
    topicKingdom: formData.get("topic_kingdom"),
    topicSubtype: formData.get("topic_subtype"),
    topic_notes: formData.get("topic_notes"),
    topicSource: formattedTopicSource,
  };

  try {
    const { databases } = await createAdminClient();
    const newTopic = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC,
      ID.unique(),
      dataConfig
    );
    
    revalidatePath(`/planning/topics/${params?.day}/${params?.subType}`, "layout");
    return {
      success: true,
    };

  } catch (error) {
    console.log("Failed to create new topic", error, dataConfig);
    return {
      error: "Failed to create new topic",
    };
  }
}

export default createNewTopic;
