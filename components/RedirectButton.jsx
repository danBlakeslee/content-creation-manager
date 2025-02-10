"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";

const RedirectButton = ({ redirectLink }) => {
  const router = useRouter();

  function handleRedirect() {
    router.push(redirectLink);
  }
  return (
    <button className="bg-slate-200 rounded-full px-2 py-2" onClick={handleRedirect}>
      <FaChevronRight />
    </button>
  );
};

export default RedirectButton;
