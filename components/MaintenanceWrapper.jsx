"use client";
import { MaintenanceProvider } from "@/app/context/maintenanceContext";
import React from "react";

const MaintenanceWrapper = ({ children }) => {
  return <MaintenanceProvider>{children}</MaintenanceProvider>;
};

export default MaintenanceWrapper;
