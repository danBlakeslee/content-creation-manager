"use server";
import { createAdminClient } from "@/config/appwrite";
import { Query } from "node-appwrite";

const getAllTopics = async () => {
  try {
    const { databases } = await createAdminClient();
    // Fetch all topics
    const { documents: topics } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TOPIC,
      [Query.limit(1000)]
    );

    function formatTopicSources(sources) {
      return sources?.map((source) => {
        return {
          $id: source?.$id,
          sourceContent: source?.source_content,
          sourceNotes: source?.source_notes,
          sourceTitle: source?.source_title,
        };
      });
    }

    const formattedTopics = topics?.map((topic) => {
      const topicSources = topic?.topicSource;
      return {
        $id: topic.$id,
        covered: topic.covered,
        episodeType: topic?.episodeType?.episode_type_id,
        topicKingdom: topic?.topicKingdom?.topic_kingdom_id,
        topicSource:
          topicSources?.length > 0 ? formatTopicSources(topicSources) : [],
        topicSubtype: {name: topic?.topicSubtype?.topic_subtype_name, id:topic?.topicSubtype?.topic_subtype_id, },
        topicName: topic?.topic_name,
        topicNotes: topic?.topic_notes,
      };
    });

    return formattedTopics;
  } catch (error) {
    console.log("Failed to get topics", error);
    return {
      error: "Failed to get topics",
    };
  }
};

export default getAllTopics;
