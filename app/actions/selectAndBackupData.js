"use server";

async function selectAndBackupData(previousState, formData) {
    // create object with keys equal to the data_backup_name and a value equal to a function
  try {
    // call the function here based on formData.get("data_backup_name")
    // console.log the data to see if its working.
    // After it works, research a package that will allow you to export/download a json file
  } catch (error) {
    console.log("Failed to back up data", error);
    return {
      error: "Failed to back up data",
    };
  }
}

export default selectAndBackupData;
