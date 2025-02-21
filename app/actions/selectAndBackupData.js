"use server";
import { writeJsonFile } from "write-json-file";
import { moveFile } from "move-file";
import getAllTopics from "./getAllTopics";
import getAllPlannedVideos from "./getAllPlannedVideos";
import getAllDataBackupTypes from "./getAllDataBackupTypes";
import getAllStatusTypes from "./getAllStatusTypes";
import getAllEpisodeTypes from "./getAllEpisodeTypes";
import getAllMaintenanceTypes from "./getAllMaintenanceTypes";
import getAllTopicKingdoms from "./getAllTopicKingdoms";
import getAllTopicSubtypes from "./getAllTopicSubtypes";

async function selectAndBackupData(previousState, formData) {
  const fileName = formData.get("data_backup_name");
  const dataToBackup = {
    Topics: getAllTopics,
    Episodes: getAllPlannedVideos,
    Backups: getAllDataBackupTypes,
    Statuses: getAllStatusTypes,
    EpisodeTypes: getAllEpisodeTypes,
    MaintenanceTypes: getAllMaintenanceTypes,
    TopicKingdoms: getAllTopicKingdoms,
    TopicSubtypes: getAllTopicSubtypes,
  };
  // create object with keys equal to the data_backup_name and a value equal to a function
  try {
    const dataForBackup = await dataToBackup[fileName]();
    try {
      await writeJsonFile(`${fileName}.json`, dataForBackup);

      try {
        await moveFile(
          `${process.env.FILE_SOURCE_DIRECTORY}/${fileName}.json`,
          `${process.env.DESTINATION_FILE_DIRECTORY}/${fileName}.json`,
          { overwrite: true }
        );
        return {
          success: true,
          filePath: process.env.DESTINATION_FILE_DIRECTORY,
        };
      } catch (error) {
        console.log("Failed to move file", error);
        return {
          error: "Failed to move file",
        };
      }
    } catch (error) {
      console.log("Failed to back up data", error);
      return {
        error: "Failed to back up data",
      };
    }
  } catch (error) {
    return {
      error: "Could not fetch data for backup",
    };
  }
}

export default selectAndBackupData;
