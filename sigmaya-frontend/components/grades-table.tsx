import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Grade {
  id: number;
  descripcion: string;
  calificacion: number | null;
  porcentaje: number;
}

interface Props {
  grades: Grade[];
}

export default function GradesTable({ grades }: Props) {
  return (
    <Card className="mb-6 w-full lg:w-3/4">
      <CardHeader>
        <CardTitle>Notas del Curso</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Descripción</TableHead>
              <TableHead>Calificación</TableHead>
              <TableHead>Porcentaje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade) => (
              <TableRow key={grade.id}>
                <TableCell>{grade.descripcion}</TableCell>
                <TableCell>
                  <span
                    className={`${
                      grade.calificacion !== null && grade.calificacion >= 3.0
                        ? "bg-green-200 text-green-800 p-1 rounded-md"
                        : "bg-red-200 text-red-800 p-1 rounded-md"
                    }`}
                  >
                    {grade.calificacion !== null ? grade.calificacion.toFixed(2) : "-"}
                  </span>
                </TableCell>
                <TableCell>{grade.porcentaje}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}