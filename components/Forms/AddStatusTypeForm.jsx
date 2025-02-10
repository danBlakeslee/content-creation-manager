"use client";
import createNewStatusType from "@/app/actions/createNewStatusType";
import {useEffect} from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";

const AddStatusTypeForm = () => {
  const [state, formAction] = useActionState(createNewStatusType, {});


  useEffect(() => {
    if(state.error){
      toast.error(state.error);
    }

    if(state.success) {
      toast.success("New Status Type Added Successfully");
    }

  }, [state])

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-6/12">
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="status_name" className="block text-gray-700 font-bold mb-2">
              Status Type Name
            </label>
            <input
              type="text"
              id="status_name"
              name="status_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the Name of the status Type"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="status_color" className="block text-gray-700 font-bold mb-2">
              Status Color
            </label>
            <input
              type="text"
              id="status_color"
              name="status_color"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the color of the status type"
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

export default AddStatusTypeForm;
