import React from "react";
import CourseInfoTeacherComponent from "@/components/course-info-teacher";
import Navbar from "@/components/navbar";
import { BackButton } from "@/components/back-button";

export default function CourseInfoTeacher() {
  const initialCourseInfo = {
    nrc: "12345",
    nombre: "Programación Avanzada",
    codigo: "COMP301",
    periodo: "2023-2",
    horario: "Lunes y Miércoles, 10:00 - 11:30",
    aula: "B201",
    profesor: "Dr. Juan Pérez",
    departamento: "Ciencias de la Computación",
    creditos: 4,
    cupoMaximo: 30,
    estudiantesInscritos: 25,
  };

  const initialStudents = [
    {
      id: "001",
      nombre: "Ana García",
      notas: { parcial1: 4.5, parcial2: null, proyecto: 4.2, final: null },
      asistencia: {},
    },
    {
      id: "002",
      nombre: "Carlos López",
      notas: { parcial1: 3.8, parcial2: null, proyecto: 4.0, final: null },
      asistencia: {},
    },
    {
      id: "003",
      nombre: "María Rodríguez",
      notas: { parcial1: 4.2, parcial2: null, proyecto: 4.5, final: null },
      asistencia: {},
    },
  ];

  const classDates = [
    "2023-08-01",
    "2023-08-03",
    "2023-08-08",
    "2023-08-10",
    "2023-08-15",
    "2023-08-17",
    "2023-08-22",
    "2023-08-24",
    "2023-08-29",
    "2023-08-31",
  ];

  const teacherName = "Dr. Juan Pérez";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userName={teacherName} userRoles={["teacher"]} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <BackButton />
          <CourseInfoTeacherComponent
            initialCourseInfo={initialCourseInfo}
            initialStudents={initialStudents}
            classDates={classDates}
          />
        </div>
      </main>
    </div>
  );
}
