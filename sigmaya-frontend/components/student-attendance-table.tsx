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
  asistencia: { [key: string]: boolean };
}

interface StudentAttendanceTableProps {
  students: Student[];
  classDates: string[];
  handleAttendanceChange: (
    studentId: string,
    date: string,
    value: boolean
  ) => void;
}

export function StudentAttendanceTable({
  students,
  classDates,
  handleAttendanceChange,
}: StudentAttendanceTableProps) {
  return (
    <div className="overflow-x-auto">
      <Card className="mb-6 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              {classDates.map((date) => (
                <TableHead key={date}>{date}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.nombre}</TableCell>
                {classDates.map((date) => (
                  <TableCell key={date}>
                    <Input
                      type="checkbox"
                      checked={student.asistencia[date] || false}
                      onChange={(e) =>
                        handleAttendanceChange(
                          student.id,
                          date,
                          e.target.checked
                        )
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
