import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Course {
  nrc: string;
  materia: string;
  curso: string;
  seccion: string;
  titulo: string;
  estado: "En Curso" | "Cancelado" | "Finalizado";
  creditos: number;
}

interface Props {
  periodName: string;
  courses: Course[];
}

export function CoursesTable({ periodName, courses }: Props) {
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cursos Inscritos - {periodName}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NRC</TableHead>
              <TableHead>Materia</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Sección</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Créditos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.nrc}>
                <TableCell>{course.nrc}</TableCell>
                <TableCell>{course.materia}</TableCell>
                <TableCell>{course.curso}</TableCell>
                <TableCell>{course.seccion}</TableCell>
                <TableCell>
                  <Link
                    href={`formation-tracking/course-info?course=${
                      course.materia + course.curso
                    }`}
                    className="text-blue-500 hover:underline"
                  >
                    {course.titulo}
                  </Link>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      course.estado === "En Curso"
                        ? "bg-yellow-200 text-yellow-800"
                        : course.estado === "Cancelado"
                        ? "bg-red-200 text-red-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {course.estado}
                  </span>
                </TableCell>
                <TableCell>{course.creditos}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
