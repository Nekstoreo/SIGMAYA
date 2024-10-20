"use client";
import { BackButton } from "@/components/back-button";
import Navbar from "@/components/navbar";
import { StudentProfileComponent } from "@/components/student-profile";
import { useState } from "react";

export default function StudentProfilePage() {
  const [userRoles] = useState<Array<'student' | 'teacher'>>(['student', 'teacher']);
  const [userName] = useState('María García');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userRoles={userRoles} userName={userName} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <BackButton />
          <StudentProfileComponent />
        </div>
      </main>
    </div>
  );
}