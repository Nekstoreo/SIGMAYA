import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StudentInfoCardProps {
  studentInfo: StudentInfo
}

export function StudentInfoCard({ studentInfo }: StudentInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información del Alumno</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="periodo">Período</Label>
            <Input id="periodo" value={studentInfo.periodo} readOnly />
          </div>
          <div>
            <Label htmlFor="estadoAcademico">Estado Académico</Label>
            <Input id="estadoAcademico" value={studentInfo.estadoAcademico} readOnly />
          </div>
          <div>
            <Label htmlFor="horasGlobales">Horas Globales</Label>
            <Input id="horasGlobales" value={studentInfo.horasGlobales} readOnly />
          </div>
          <div>
            <Label htmlFor="pgaGlobal">PGA Global</Label>
            <Input id="pgaGlobal" value={studentInfo.pgaGlobal} readOnly />
          </div>
        </div>
        <div className="mt-4">
          <Label>Avisos de Inscripción</Label>
          <ul className="list-disc list-inside">
            {studentInfo.avisosInscripcion.map((aviso, index) => (
              <li key={index}>{aviso}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Label>Retenciones</Label>
          <ul className="list-disc list-inside">
            {studentInfo.retenciones.map((retencion, index) => (
              <li key={index}>{retencion}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}