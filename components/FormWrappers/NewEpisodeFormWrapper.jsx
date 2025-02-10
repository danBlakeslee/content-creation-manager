"use client";
import { useState } from "react";
import AddNewEpisodeForm from "../Forms/AddNewEpisodeForm";
import AddButton from "../AddButton";

const NewEpisodeFormWrapper = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="bg-white flex justify-between shadow-lg rounded-lg p-4 w-4/12 mb-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            Add New Episode
          </h2>
          <AddButton showFormFunction={setIsAdding} addState={isAdding} />
        </div>
      </div>
      {isAdding && (
        <div className="flex justify-center w-full">
          <AddNewEpisodeForm />
        </div>
      )}
    </>
  );
};

export default NewEpisodeFormWrapper;
