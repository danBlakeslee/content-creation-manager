import React from "react";
import { FaX, FaPen } from "react-icons/fa6";

const EnigmaticTopicDisplayCard = ({ enigmaticData }) => {
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
          enigmaticData.topicNotes && "mb-4"
        }`}
      >
        <div className="flex bg-white gap-4">
          <div className="text-topic-name font-bold">
            {enigmaticData.topicName}
          </div>
          {enigmaticData?.topicSource && <p>-</p>}
          <div className="text-topic-source">{enigmaticData.topicSource}</div>
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
      <div>{enigmaticData.topicNotes}</div>
    </div>
  );
};

export default EnigmaticTopicDisplayCard;
