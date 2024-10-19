import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

interface Props {
  courseInfo: CourseInfo;
}

export default function CourseDetails({ courseInfo }: Props) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Detalles del Curso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>NRC:</strong> {courseInfo.nrc}
          </div>
          <div>
            <strong>Materia:</strong> {courseInfo.materia}
          </div>
          <div>
            <strong>Curso:</strong> {courseInfo.curso}
          </div>
          <div>
            <strong>Título:</strong> {courseInfo.titulo}
          </div>
          <div>
            <strong>Créditos:</strong> {courseInfo.creditos}
          </div>
          <div>
            <strong>Profesor:</strong> {courseInfo.profesor}
          </div>
          <div className="col-span-2">
            <strong>Horario:</strong> {courseInfo.horario}
          </div>
          <div className="col-span-2">
            <strong>Descripción:</strong> {courseInfo.descripcion}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
