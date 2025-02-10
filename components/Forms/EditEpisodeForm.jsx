import React, { useState, useEffect } from "react";
import { useMaintenance } from "@/app/context/maintenanceContext";
import { daysOfTheWeek } from "@/app/helpers/helperObjects";

const EditEpisodeForm = ({ table, row, retrieveModalState, modalState }) => {
  const { episodeTypes, statusTypes } = useMaintenance();

  useEffect(() => {
    const rowProp = row?.original;
    rowProp.episode_type_id = rowProp.episode_type.episode_type_id;
    rowProp.episode_status_id = rowProp.episode_status.episode_status_id;

    retrieveModalState(rowProp);
  }, [row]);

  const updateFormState = (field, value) => {
    retrieveModalState({ ...modalState, [field]: value });
  };

  return (
    <div>
      <form>
        <div>
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
            onChange={(e) => updateFormState("episode_number", e.target.value)}
            value={modalState?.episode_number || ""}
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
            value={modalState?.day_of_week || ""}
            onChange={(e) => updateFormState("day_of_week", e.target.value)}
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
            value={modalState?.episode_type_id || ""}
            onChange={(e) => updateFormState("episode_type_id", e.target.value)}
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
            value={modalState?.episode_type_number || ""}
            onChange={(e) =>
              updateFormState("episode_type_number", e.target.value)
            }
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
            value={modalState?.episode_name || ""}
            onChange={(e) => updateFormState("episode_name", e.target.value)}
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
            value={modalState?.source || "None"}
            onChange={(e) => updateFormState("source", e.target.value)}
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
            value={modalState?.youtube_name || ""}
            onChange={(e) => updateFormState("youtube_name", e.target.value)}
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
            value={modalState?.episode_status_id || ""}
            onChange={(e) =>
              updateFormState("episode_status_id", e.target.value)
            }
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
      </form>
    </div>
  );
};

export default EditEpisodeForm;
