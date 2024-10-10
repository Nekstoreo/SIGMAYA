"use client";

import { useState, useEffect } from "react";
import { Book, ClipboardList, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/navbar";
import { QuickLinks } from "@/components/quick-links";
import { StudentTabs } from "@/components/student-tabs";
import { CourseRegistration } from '@/components/course-registration'

interface Class {
  id: number;
  name: string;
  code: string;
  schedule: string;
  professor: string;
}

const classes: Class[] = [
  {
    id: 1,
    name: "Matemáticas Avanzadas",
    code: "MAT301",
    schedule: "Lun, Mie 10:00-11:30",
    professor: "Dr. Álvarez",
  },
  {
    id: 2,
    name: "Programación en Python",
    code: "CS202",
    schedule: "Mar, Jue 14:00-15:30",
    professor: "Dra. Rodríguez",
  },
  {
    id: 3,
    name: "Literatura Contemporánea",
    code: "LIT405",
    schedule: "Vie 09:00-12:00",
    professor: "Prof. Martínez",
  },
];

const quickLinks = [
  { name: "Registro de cursos", icon: Book, href: "#registro-cursos" },
  { name: "Perfil del Estudiante", icon: Users, href: "#perfil-estudiante" },
  {
    name: "Evaluación docente",
    icon: ClipboardList,
    href: "#evaluacion-docente",
  },
  {
    name: "Solicitud de servicios",
    icon: Briefcase,
    href: "#solicitud-servicios",
  },
];

export default function StudentDashboard() {
  const [userRoles, setUserRoles] = useState<
    Array<"student" | "teacher" | "friend">
  >(["student", "teacher"]);
  const [userName, setUserName] = useState("María García");
  const [currentView, setCurrentView] = useState('')

  useEffect(() => {
    // Obtener el hash inicial
    const hash = window.location.hash.replace('#', '')
    setCurrentView(hash)

    // Escuchar cambios en el hash
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '')
      setCurrentView(newHash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleBackToDashboard = () => {
    window.location.hash = ''
    setCurrentView('')
  }

  const renderContent = () => {
    switch (currentView) {
      case 'registro-cursos':
        return (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Registro de Cursos</h2>
              <button
                onClick={handleBackToDashboard}
                className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Volver al Dashboard
              </button>
            </div>
            <CourseRegistration />
          </>
        )
      default:
        return (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Panel de Estudiante</h1>
            <QuickLinks links={quickLinks} />
            <StudentTabs classes={classes} />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={userName} userRoles={userRoles}  />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
