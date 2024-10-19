import React from "react";
import CourseDetails from "@/components/course-details";
import GradesTable from "@/components/grades-table";
import { GradeCalculator } from "@/components/grade-calculator";

interface CourseInfo {
  nrc: string;
  materia: string;
  curso: string;
  titulo: string;
  creditos: number;
  descripcion: string;
  profesor: string;
  horario: string;
}

const courseInfo: CourseInfo = {
  nrc: "12345",
  materia: "MAT",
  curso: "301",
  titulo: "Cálculo Avanzado",
  creditos: 4,
  descripcion:
    "Este curso cubre temas avanzados de cálculo, incluyendo series, cálculo vectorial y ecuaciones diferenciales.",
  profesor: "Dr. Juan Pérez",
  horario: "Lunes y Miércoles, 10:00 - 11:30",
};

const initialGrades: Grade[] = [
  { id: 1, descripcion: "Parcial 1", calificacion: 4.2, porcentaje: 25 },
  { id: 2, descripcion: "Parcial 2", calificacion: null, porcentaje: 25 },
  { id: 3, descripcion: "Trabajos", calificacion: 4.5, porcentaje: 20 },
  { id: 4, descripcion: "Examen Final", calificacion: null, porcentaje: 30 },
];

interface Grade {
  id: number;
  descripcion: string;
  calificacion: number | null;
  porcentaje: number;
}

export default function CourseInfo({ course }: { course: string }) {
  const evaluations = initialGrades.map((grade) => ({
    id: grade.id,
    name: grade.descripcion,
    weight: grade.porcentaje,
    grade: grade.calificacion,
  }));

  return (
    <div className="container mx-auto py-8">
      {course == "MAT301" ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Información del Curso</h1>
          <CourseDetails courseInfo={courseInfo} />
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            <GradesTable grades={initialGrades} />
            <GradeCalculator initialEvaluations={evaluations} />
          </div>
        </>
      ) : (
        <div className="text-center text-2xl text-red-500">
          No se encontró el curso solicitado o no tienes permisos para verlo.
        </div>
      )}
    </div>
  );
}
