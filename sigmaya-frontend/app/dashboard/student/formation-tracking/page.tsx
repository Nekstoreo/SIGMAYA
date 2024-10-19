"use client";
import { BackButton } from "@/components/back-button";
import { FormationTrackingComponent } from "@/components/formation-tracking";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function SeguimientoFormacionPage() {
  const [userRoles] = useState<Array<"student" | "teacher">>([
    "student",
    "teacher",
  ]);
  const [userName] = useState("María García");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        userName={userName}
        userRoles={userRoles}
        onRoleChange={() => (window.location.hash = "")}
      />
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <BackButton />
          <FormationTrackingComponent />
        </div>
      </main>
    </div>
  );
}
