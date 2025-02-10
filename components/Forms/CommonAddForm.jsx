"use client";
import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";

const CommonAddForm = ({
  saveAction,
  maintenanceTypeName,
  maintenanceTypeFormName,
}) => {
  const [state, formAction] = useActionState(saveAction, {});

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }

    if (state.success) {
      toast.success(`New ${maintenanceTypeName} Added Successfully`);
    }
  }, [state]);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-6/12">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor={maintenanceTypeFormName}
              className="block text-gray-700 font-bold mb-2"
            >
              {maintenanceTypeName} Name
            </label>
            <input
              type="text"
              id={maintenanceTypeFormName}
              name={maintenanceTypeFormName}
              className="border rounded w-full py-2 px-3"
              placeholder={`Enter the Name of the ${maintenanceTypeName}`}
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommonAddForm;
