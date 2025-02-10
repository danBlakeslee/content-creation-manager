import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const TopicDisplaySection = ({ handleExpand, title }) => {
  return (
    <>
      <section className="flex justify-between bg-white mb-5 shadow px-4 py-4 border border-slate-100">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          {title}
        </h2>
        <button
          className="bg-slate-200 rounded-full px-2 py-2"
          onClick={handleExpand}
        >
          <FaChevronRight />
        </button>
      </section>
    </>
  );
};

export default TopicDisplaySection;
