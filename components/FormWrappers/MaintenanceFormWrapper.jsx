"use client";
import { useState, useEffect } from "react";
import MaintenanceFormSelector from "../MaintenanceFormSelector";
import { maintenanceTypes } from "@/app/helpers/helperObjects";
import AddStatusTypeForm from "../Forms/AddStatusTypeForm";
import CommonAddForm from "../Forms/CommonAddForm";
import createNewTopicKingdom from "@/app/actions/createNewTopicKingdom";
import createNewMaintenanceType from "@/app/actions/createNewMaintenanceType";
import createNewEpisodeType from "@/app/actions/createNewEpisodeType";
import createNewTopicSubtype from "@/app/actions/createNewTopicSubtype";
import AddNewTopicSubtypeForm from "../Forms/AddNewTopicSubtypeForm";

const MaintenanceFormWrapper = ({ allMaintenanceTypes }) => {
  const [maintenanceType, setMaintenanceType] = useState(null);

  useEffect(() => {
    if (!allMaintenanceTypes.length) {
      toast.error(allMaintenanceTypes?.error);
    }
  }, [allMaintenanceTypes]);

  return (
    <>
      {" "}
      <MaintenanceFormSelector
        allMaintenanceTypes={allMaintenanceTypes}
        updateMaintenanceType={setMaintenanceType}
      />
      {maintenanceType === maintenanceTypes.episodeType && (
        <CommonAddForm
          saveAction={createNewEpisodeType}
          maintenanceTypeName={"Episode Type"}
          maintenanceTypeFormName={"episode_name"}
        />
      )}
      {maintenanceType === maintenanceTypes.statusType && <AddStatusTypeForm />}
      {maintenanceType === maintenanceTypes.maintenanceType && (
        <CommonAddForm
          saveAction={createNewMaintenanceType}
          maintenanceTypeName={"Maintenance Type"}
          maintenanceTypeFormName={"maintenance_name"}
        />
      )}
      {maintenanceType === maintenanceTypes.topicKingdom && (
        <CommonAddForm
          saveAction={createNewTopicKingdom}
          maintenanceTypeName={"Topic Kingdom"}
          maintenanceTypeFormName={"topic_kingdom_name"}
        />
      )}
      {maintenanceType === maintenanceTypes.topicSubtype && (
        <AddNewTopicSubtypeForm
          saveAction={createNewTopicSubtype}
          maintenanceTypeName={"Topic Subtype"}
          maintenanceTypeFormName={"topic_subtype_name"}
        />
      )}
    </>
  );
};

export default MaintenanceFormWrapper;
