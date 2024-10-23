"use client";

import { useState } from "react";
import { Book, Calendar, ClipboardList, MessageSquare } from "lucide-react";
import { TeacherTabs } from "@/components/teacher-tabs";
import Navbar from "@/components/navbar";
import { QuickLinks } from "@/components/quick-links";

const classes = [
  {
    id: "1234 5678",
    name: "Matemáticas Avanzadas",
    classroom: "B09 112",
    schedule: "Lun, Mie 10:00-11:30",
    students: 30,
  },
  {
    id: "2345 6789",
    name: "Programación en Python",
    classroom: "B10 201",
    schedule: "Mar, Jue 14:00-15:30",
    students: 25,
  },
  {
    id: "3456 7890",
    name: "Estadística Aplicada",
    classroom: "B08 105",
    schedule: "Vie 09:00-12:00",
    students: 20,
  },
];

const quickLinks = [
  { name: "Lista de Clases", icon: Book, href: "#clases" },
  { name: "Calificaciones", icon: ClipboardList, href: "#calificaciones" },
  { name: "Horario", icon: Calendar, href: "#horario" },
  { name: "Mensajes", icon: MessageSquare, href: "#mensajes" },
];

export default function TeacherDashboardComponent() {
  const [teacherName, setTeacherName] = useState("Dr. Juan Pérez");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={teacherName} userRoles={["teacher"]} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Panel del Profesor
          </h1>
          <QuickLinks links={quickLinks} />
          <TeacherTabs classes={classes} />
        </div>
      </main>
    </div>
  );
}
