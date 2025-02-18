"use client";
import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useMaintenance } from "@/app/context/maintenanceContext";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const AddNewTopicKingdomForm = ({
  saveAction,
  maintenanceTypeName,
  maintenanceTypeFormName,
}) => {
  const [state, formAction] = useActionState(saveAction, {});
  const { episodeTypes } = useMaintenance();

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
            <Select
              id={"episode_type_id"}
              multiple
              value={[]}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {episodeTypes?.map((episodeType) => (
                <MenuItem
                  key={episodeType?.episode_type_name}
                  value={episodeType?.episode_type_id}
                >
                  {episodeType?.episode_type_name}
                </MenuItem>
              ))}
            </Select>
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

export default AddNewTopicKingdomForm;
