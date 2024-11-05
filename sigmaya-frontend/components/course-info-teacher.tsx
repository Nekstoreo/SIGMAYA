'use client'
import { useState } from "react";
import { CourseInfoCard } from "@/components/course-info-card";
import { StudentGradesTable } from "@/components/student-grades-table";
import { StudentAttendanceTable } from "@/components/student-attendance-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CourseInfo, Student, Notas } from "../types/teacher";

interface CourseInfoTeacherComponentProps {
  initialCourseInfo: CourseInfo;
  initialStudents: Student[];
  classDates: string[];
}

export default function CourseInfoTeacherComponent({
  initialCourseInfo,
  initialStudents,
  classDates,
}: CourseInfoTeacherComponentProps) {
  const [courseInfo, setCourseInfo] = useState(initialCourseInfo);
  const [students, setStudents] = useState(initialStudents);

  const handleGradeChange = (
    studentId: string,
    assignment: keyof Notas,
    value: string | null
  ) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              notas: {
                ...student.notas,
                [assignment]: value ? parseFloat(value) : null,
              },
            }
          : student
      )
    );
  };

  const handleAttendanceChange = (
    studentId: string,
    date: string,
    value: boolean
  ) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              asistencia: { ...student.asistencia, [date]: value },
            }
          : student
      )
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Información del Curso</h1>

      <CourseInfoCard courseInfo={courseInfo} />

      <Tabs defaultValue="grades" className="space-y-4">
        <TabsList>
          <TabsTrigger value="grades">Notas</TabsTrigger>
          <TabsTrigger value="attendance">Asistencia</TabsTrigger>
        </TabsList>

        <TabsContent value="grades">
          <StudentGradesTable
            students={students}
            handleGradeChange={handleGradeChange}
          />
        </TabsContent>

        <TabsContent value="attendance">
          <StudentAttendanceTable
            students={students}
            classDates={classDates}
            handleAttendanceChange={handleAttendanceChange}
          />
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button>Guardar Cambios</Button>
      </div>
    </div>
  );
}