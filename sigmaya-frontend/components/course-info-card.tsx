import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface CourseInfo {
  nrc: string;
  nombre: string;
  codigo: string;
  periodo: string;
  horario: string;
  aula: string;
  profesor: string;
  departamento: string;
  creditos: number;
  cupoMaximo: number;
  estudiantesInscritos: number;
}

interface CourseInfoCardProps {
  courseInfo: CourseInfo;
}

export function CourseInfoCard({ courseInfo }: CourseInfoCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>
          {courseInfo.nombre} - {courseInfo.horario}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <Label className="font-semibold">NRC:</Label>
            <span className="ml-2">{courseInfo.nrc}</span>
          </div>
          <div>
            <Label className="font-semibold">Código:</Label>
            <span className="ml-2">{courseInfo.codigo}</span>
          </div>
          <div>
            <Label className="font-semibold">Período:</Label>
            <span className="ml-2">{courseInfo.periodo}</span>
          </div>
          <div>
            <Label className="font-semibold">Aula:</Label>
            <span className="ml-2">{courseInfo.aula}</span>
          </div>
          <div>
            <Label className="font-semibold">Profesor:</Label>
            <span className="ml-2">{courseInfo.profesor}</span>
          </div>
          <div>
            <Label className="font-semibold">Departamento:</Label>
            <span className="ml-2">{courseInfo.departamento}</span>
          </div>
          <div>
            <Label className="font-semibold">Créditos:</Label>
            <span className="ml-2">{courseInfo.creditos}</span>
          </div>
          <div>
            <Label className="font-semibold">Cupo Máximo:</Label>
            <span className="ml-2">{courseInfo.cupoMaximo}</span>
          </div>
          <div>
            <Label className="font-semibold">Inscritos:</Label>
            <span className="ml-2">{courseInfo.estudiantesInscritos}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}