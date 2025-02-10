"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const AddButton = ({ showFormFunction, addState }) => {
  function handleClick() {
    showFormFunction(!addState);
  }
  return (
    <button
      className="bg-slate-200 rounded-full px-2 py-2"
      onClick={handleClick}
    >
      {addState ? <FaX /> : <FaPlus />}
    </button>
  );
};

export default AddButton;
