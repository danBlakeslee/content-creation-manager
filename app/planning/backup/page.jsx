import DataBackupForm from "@/components/Forms/DataBackupForm";
import Heading from "@/components/Heading";

const BackupPage = async () => {

  return (
    <>
      <Heading title="Back Up" />
      <DataBackupForm />
    </>
  );
};

export default BackupPage;
