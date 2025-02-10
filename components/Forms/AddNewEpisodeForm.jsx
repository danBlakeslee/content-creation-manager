"use client";
import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { useMaintenance } from "@/app/context/maintenanceContext";
import { daysOfTheWeek } from "@/app/helpers/helperObjects";
import createNewEpisode from "@/app/actions/createNewEpisode";

const AddNewEpisodeForm = () => {
    const [state, formAction] = useActionState(createNewEpisode, {});
  const { episodeTypes, statusTypes } = useMaintenance();

    useEffect(() => {
      if(state.error){
        toast.error(state.error);
      }

      if(state.success) {
        toast.success("New Episode Added Successfully");
      }

    }, [state])

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-8/12">
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="episode_number"
              className="block text-gray-700 font-bold mb-2"
            >
              Episode Number
            </label>
            <input
              type="text"
              id="episode_number"
              name="episode_number"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the Name of the status type"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
              Day of Week
            </label>
            <select
              id="day"
              name="day"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Day of Week
              </option>
              {daysOfTheWeek?.map((dayOfWeek) => (
                <option key={dayOfWeek.id} value={dayOfWeek.id}>
                  {dayOfWeek.day}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="episode_type"
              className="block text-gray-700 font-bold mb-2"
            >
              Episode Type
            </label>
            <select
              id="episode_type"
              name="episode_type"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Episode Type
              </option>
              {episodeTypes?.map((episodeType) => (
                <option
                  key={episodeType.episode_type_id}
                  value={episodeType.episode_type_id}
                >
                  {episodeType.episode_type_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="episode_type_number"
              className="block text-gray-700 font-bold mb-2"
            >
              Episode Type Number
            </label>
            <input
              type="text"
              id="episode_type_number"
              name="episode_type_number"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the episode number for the select type"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="episode_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Episode Name
            </label>
            <input
              type="text"
              id="episode_name"
              name="episode_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the Name of the Episode"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="source"
              className="block text-gray-700 font-bold mb-2"
            >
              Source
            </label>
            <textarea
              id="source"
              name="source"
              rows="4"
              className="border rounded w-full py-2 px-3"
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="youtube_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Youtube Name
            </label>
            <input
              type="text"
              id="youtube_name"
              name="youtube_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter Videos Name on Youtube"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="episode_status"
              className="block text-gray-700 font-bold mb-2"
            >
              Episode Status
            </label>
            <select
              id="episode_status"
              name="episode_status"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Episode Status
              </option>
              {statusTypes?.map((statusType) => (
                <option
                  key={statusType.episode_status_id}
                  value={statusType.episode_status_id}
                >
                  {statusType.episode_status_name}
                </option>
              ))}
            </select>
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

export default AddNewEpisodeForm;
