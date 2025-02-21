"use client";
import selectAndBackupData from "@/app/actions/selectAndBackupData";
import { useMaintenance } from "@/app/context/maintenanceContext";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import Loading from "../Loading";

const DataBackupForm = ({}) => {
  const [state, formAction] = useActionState(selectAndBackupData, {});
  const { dataBackupTypes } = useMaintenance();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
      setIsLoading(false);
    }

    if (state.success) {
      toast.success(`New Data Backup Added in ${state.filePath}`);
      setIsLoading(false);
    }
  }, [state]);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-8/12">
        <form action={formAction} onSubmit={() => setIsLoading(true)}>
          <div className="mb-3 flex gap-2 mt-1">
            <select
              id="data_backup_name"
              name="data_backup_name"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Data to Backup
              </option>
              {dataBackupTypes?.map((dataBackupType) => (
                <option
                  key={dataBackupType.data_backup_name}
                  value={dataBackupType.data_backup_name}
                >
                  {dataBackupType.data_backup_name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-slate-200 rounded-full px-4 py-4"
            >
              <FaChevronRight />
            </button>
          </div>
        </form>
        {isLoading && <Loading customName={"...Building JSON File"} />}
      </div>
    </>
  );
};

export default DataBackupForm;
