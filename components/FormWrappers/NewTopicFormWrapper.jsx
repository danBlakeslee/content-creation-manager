"use client";
import { useState } from "react";
import AddNewEpisodeForm from "../Forms/AddNewEpisodeForm";
import AddButton from "../AddButton";
import AddNewTopicForm from "../Forms/AddNewTopicForm";

const NewTopicFormWrapper = (props) => {
  // using the maintenance episode types, I should use the topicType prop and find the correct names.
  const [isAdding, setIsAdding] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full mt-5">
        <div className="bg-white border-2 border-topic-name flex justify-between shadow-lg rounded-lg p-4 w-4/12 mb-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            Add New Topic
          </h2>
          <AddButton showFormFunction={setIsAdding} addState={isAdding} />
        </div>
      </div>
      {isAdding && (
        <div className="flex justify-center w-full">
          <AddNewTopicForm />
        </div>
      )}
    </>
  );
};

export default NewTopicFormWrapper;
