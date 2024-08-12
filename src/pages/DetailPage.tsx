import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { PropertyDetail } from "../components/PropertyDetail";
import { GenerateSession } from "../components/GenerateSession";
import { LoanGenerate } from "../components/LoanGenerate";

export default function DetailPage() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <PropertyDetail />
      <GenerateSession />
      <LoanGenerate />
    </div>
  );
}
