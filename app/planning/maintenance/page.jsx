import getAllMaintenanceTypes from "@/app/actions/getAllMaintenanceTypes";
import MaintenanceFormWrapper from "@/components/FormWrappers/MaintenanceFormWrapper";
import Heading from "@/components/Heading";

const MaintenancePage = async () => {
  const allMaintenanceTypes = await getAllMaintenanceTypes();

  return (
    <>
      <Heading title="Lookup Maintenance" />
      <MaintenanceFormWrapper allMaintenanceTypes={allMaintenanceTypes} />
    </>
  );
};

export default MaintenancePage;
