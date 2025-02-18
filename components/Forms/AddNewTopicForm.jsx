"use client";
import createNewTopic from "@/app/actions/createNewTopic";
import React, { useState, useActionState, useEffect } from "react";
import { ID } from "node-appwrite";
import { useMaintenance } from "@/app/context/maintenanceContext";
import { FaPlus, FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { tabsConfig } from "@/app/helpers/helperObjects";

const AddNewTopicForm = () => {
  const { day, subtype } = useParams();
  const [state, formAction] = useActionState(
    createNewTopic.bind(null, { day, subtype }),
    {}
  );
  const { episodeTypes, statusTypes, topicKingdoms, topicSubtypes } =
    useMaintenance();
  const [sourceRows, setSourceRows] = useState([]);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }

    if (state.success) {
      toast.success("New Episode Added Successfully");
    }
  }, [state]);

  const addSourceRow = () => {
    setSourceRows([...sourceRows, ID.unique()]);
  };

  const episodeTypeIdsByDay = tabsConfig[day]?.map(
    (episodeType) => episodeType.typeId
  );

  const filteredTopicKingdoms = topicKingdoms?.filter((topicKingdom) =>
    topicKingdom?.episodeType?.some((episodeType) =>
      episodeTypeIdsByDay?.includes(episodeType?.episode_type_id)
    )
  );

  const filteredTopicSubTypes = topicSubtypes?.filter((topicSubtype) =>
    filteredTopicKingdoms?.some(
      (topicKingdom) =>
        topicSubtype?.topicKingdom?.topic_kingdom_id ===
        topicKingdom?.topic_kingdom_id
    )
  );

  const removeSourceRow = (sourceRow) => {
    setSourceRows(sourceRows?.filter((row) => row !== sourceRow));
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg mb-5 p-6 w-8/12">
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="covered"
              className="block text-gray-700 font-bold mb-2"
            >
              Covered
            </label>
            <select
              id="covered"
              name="covered"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select if Topic Has been Covered
              </option>
              <option key="Yes" value="Yes">
                Yes
              </option>
              <option key="No" value="No">
                No
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="topic_name"
              className="block text-gray-700 font-bold mb-2"
            >
              Topic Name
            </label>
            <input
              type="text"
              id="topic_name"
              name="topic_name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter the Name of the topic"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="topic_notes"
              className="block text-gray-700 font-bold mb-2"
            >
              Topic Notes
            </label>
            <input
              type="text"
              id="topic_notes"
              name="topic_notes"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter notes about the topic"
            />
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
              htmlFor="topic_kingdom"
              className="block text-gray-700 font-bold mb-2"
            >
              Topic Kingdom
            </label>
            <select
              id="topic_kingdom"
              name="topic_kingdom"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Topic Kingdom
              </option>
              {filteredTopicKingdoms?.map((topicKingdom) => (
                <option
                  key={topicKingdom.topic_kingdom_id}
                  value={topicKingdom.topic_kingdom_id}
                >
                  {topicKingdom.topic_kingdom_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="topic_subtype"
              className="block text-gray-700 font-bold mb-2"
            >
              Topic Subtype
            </label>
            <select
              id="topic_subtype"
              name="topic_subtype"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option key={123} value={0}>
                Select Topic Subtype
              </option>
              {filteredTopicSubTypes?.map((topicSubtype) => (
                <option
                  key={topicSubtype.topic_subtype_id}
                  value={topicSubtype.topic_subtype_id}
                >
                  {topicSubtype.topic_subtype_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center gap-5 mb-5">
            <div>Add Source</div>
            <div>
              <button
                onClick={addSourceRow}
                className="bg-slate-200 rounded-full px-2 py-2"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {sourceRows?.map((sourceRow, index) => (
            <div
              key={sourceRow}
              className="mt-3 mb-3 p-6 rounded-sm border-2 border-slate-300"
            >
              <div className="flex justify-end">
                <button
                  className="bg-slate-200 rounded-full px-2 py-2"
                  onClick={() => removeSourceRow(sourceRow)}
                >
                  <FaX />
                </button>
              </div>
              <div className="mb-5">
                <label
                  htmlFor={`source_title_${index + 1}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Source
                </label>
                <input
                  type="text"
                  id={`source_title_${index + 1}`}
                  name={`source_title_${index + 1}`}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter a Descriptor of the Source"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor={`source_content_${index + 1}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Source Content
                </label>
                <textarea
                  id={`source_content_${index + 1}`}
                  name={`source_content_${index + 1}`}
                  rows="4"
                  className="border rounded w-full py-2 px-3"
                ></textarea>
              </div>
              <div className="mb-5">
                <label
                  htmlFor={`source_notes_${index + 1}`}
                  className="block text-gray-700 font-bold mb-2"
                >
                  Source Notes
                </label>
                <textarea
                  id={`source_notes_${index + 1}`}
                  name={`source_notes_${index + 1}`}
                  rows="3"
                  className="border rounded w-full py-2 px-3"
                ></textarea>
              </div>
            </div>
          ))}

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

export default AddNewTopicForm;
