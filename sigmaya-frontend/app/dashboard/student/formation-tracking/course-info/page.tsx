"use client";
import { BackButton } from "@/components/back-button";
import CourseInfo from "@/components/course-info";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SeguimientoFormacionPage() {
  const [userRoles] = useState<Array<"student" | "teacher">>([
    "student",
    "teacher",
  ]);
  const [userName] = useState("María García");
  const searchParams = useSearchParams();
  const course = searchParams.get("course") ?? "";

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
          <CourseInfo course={course} />
        </div>
      </main>
    </div>
  );
}
