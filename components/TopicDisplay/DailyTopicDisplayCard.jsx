import React from "react";
import { FaX, FaPen } from "react-icons/fa6";

const DailyTopicDisplayCard = ({ topicData }) => {
  const handleDelete = () => {
    alert("Delete functionality");
  };

  const handleEdit = () => {
    alert("Edit Functionality");
  };
  return (
    <div className="bg-white mb-5 shadow px-3 py-3 border border-r-slate-300 border-l-slate-300 border-t-slate-500 border-b-slate-500">
      <div
        className={`flex items-center justify-between ${
          topicData?.topicNotes && "mb-4"
        }`}
      >
        <div className="bg-white gap-4">
          <div className="text-topic-name font-bold">
            {topicData?.topicName}
          </div>
          <ul>
            {topicData?.topicSource?.map((source, index) => (
              <li className="mb-3" key={index}>
                <div
                  className={`bg-white whitespace-pre-wrap ${
                    source?.sourceContent?.length &&
                    source?.sourceContent?.length < 100 &&
                    "flex gap-4"
                  }`}
                >
                  <div className="text-topic-source font-bold">
                    {source?.sourceTitle}
                  </div>
                  {source?.sourceContent?.length &&
                  source?.sourceContent?.length < 100 ? (
                    <p>-</p>
                  ) : (
                    ""
                  )}
                  <div className="whitespace-pre-wrap">
                    {source?.sourceContent || ""}
                  </div>
                </div>
                <div className="italic">{source?.sourceNotes || ""}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-slate-200 rounded-full px-2 py-2"
            onClick={handleEdit}
          >
            <FaPen />
          </button>
          <button
            className="bg-slate-200 rounded-full px-2 py-2"
            onClick={handleDelete}
          >
            <FaX />
          </button>
        </div>
      </div>
      <div>{topicData?.topicNotes}</div>
    </div>
  );
};

export default DailyTopicDisplayCard;
