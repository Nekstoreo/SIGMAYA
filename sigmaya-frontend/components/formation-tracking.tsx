"use client";

import { useState } from "react";
import { PeriodSelector } from "@/components/period-selector";
import { CoursesTable } from "@/components/courses-table";

interface Course {
  nrc: string;
  materia: string;
  curso: string;
  seccion: string;
  titulo: string;
  estado: "En Curso" | "Cancelado" | "Finalizado";
  creditos: number;
}

interface Period {
  id: string;
  name: string;
  courses: Course[];
}

const periods: Period[] = [
  {
    id: "2023-1",
    name: "Primer Semestre 2023",
    courses: [
      {
        nrc: "12345",
        materia: "MAT",
        curso: "101",
        seccion: "001",
        titulo: "Cálculo I",
        estado: "Finalizado",
        creditos: 4,
      },
      {
        nrc: "23456",
        materia: "FIS",
        curso: "201",
        seccion: "002",
        titulo: "Física Mecánica",
        estado: "Finalizado",
        creditos: 3,
      },
      {
        nrc: "34567",
        materia: "PROG",
        curso: "301",
        seccion: "001",
        titulo: "Programación Avanzada",
        estado: "Finalizado",
        creditos: 4,
      },
    ],
  },
  {
    id: "2023-2",
    name: "Segundo Semestre 2023",
    courses: [
      {
        nrc: "45678",
        materia: "MAT",
        curso: "301",
        seccion: "001",
        titulo: "Cálculo II",
        estado: "En Curso",
        creditos: 4,
      },
      {
        nrc: "56789",
        materia: "FIS",
        curso: "301",
        seccion: "002",
        titulo: "Electromagnetismo",
        estado: "En Curso",
        creditos: 3,
      },
      {
        nrc: "67890",
        materia: "PROG",
        curso: "401",
        seccion: "001",
        titulo: "Estructuras de Datos",
        estado: "En Curso",
        creditos: 4,
      },
    ],
  },
];

export function FormationTrackingComponent() {
  // Dejar sin seleccionar el primer periodo
  const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>(
    undefined
  );

  const currentPeriod = periods.find((period) => period.id === selectedPeriod);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Seguimiento a la Formación</h1>
      <p className="mb-4">
        Analiza, revisa, planea y proyecta tu proceso formativo.
      </p>

      <PeriodSelector
        periods={periods}
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />

      {currentPeriod && (
        <CoursesTable
          periodName={currentPeriod.name}
          courses={currentPeriod.courses}
        />
      )}
    </div>
  );
}
