import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Student {
  id: string;
  nombre: string;
  notas: { [key: string]: number | null };
}

interface StudentGradesTableProps {
  students: Student[];
  handleGradeChange: (
    studentId: string,
    assignment: string,
    value: string
  ) => void;
}

export function StudentGradesTable({
  students,
  handleGradeChange,
}: StudentGradesTableProps) {
  return (
    <Card className="mb-6 p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Parcial 1</TableHead>
            <TableHead>Parcial 2</TableHead>
            <TableHead>Proyecto</TableHead>
            <TableHead>Final</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.nombre}</TableCell>
              {Object.entries(student.notas).map(([assignment, grade]) => (
                <TableCell key={assignment}>
                  <Input
                    type="number"
                    value={grade !== null ? grade : ""}
                    onChange={(e) =>
                      handleGradeChange(student.id, assignment, e.target.value)
                    }
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
