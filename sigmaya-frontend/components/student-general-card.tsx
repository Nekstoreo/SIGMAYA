import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StudentGeneralCardProps {
  studentInfo: StudentInfo
}

export function StudentGeneralCard({ studentInfo }: StudentGeneralCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información General</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nivel">Nivel</Label>
            <Input id="nivel" value={studentInfo.nivel} readOnly />
          </div>
          <div>
            <Label htmlFor="clase">Clase</Label>
            <Input id="clase" value={studentInfo.clase} readOnly />
          </div>
          <div>
            <Label htmlFor="estatus">Estatus</Label>
            <Input id="estatus" value={studentInfo.estatus} readOnly />
          </div>
          <div>
            <Label htmlFor="tipoAlumno">Tipo de Alumno</Label>
            <Input id="tipoAlumno" value={studentInfo.tipoAlumno} readOnly />
          </div>
          <div>
            <Label htmlFor="residencia">Residencia</Label>
            <Input id="residencia" value={studentInfo.residencia} readOnly />
          </div>
          <div>
            <Label htmlFor="campus">Campus</Label>
            <Input id="campus" value={studentInfo.campus} readOnly />
          </div>
          <div>
            <Label htmlFor="primerPeriodoAsistencia">Primer Período de Asistencia</Label>
            <Input id="primerPeriodoAsistencia" value={studentInfo.primerPeriodoAsistencia} readOnly />
          </div>
          <div>
            <Label htmlFor="periodoMatriculado">Período Matriculado</Label>
            <Input id="periodoMatriculado" value={studentInfo.periodoMatriculado} readOnly />
          </div>
          <div>
            <Label htmlFor="ultimoPeriodoAsistencia">Último Período de Asistencia</Label>
            <Input id="ultimoPeriodoAsistencia" value={studentInfo.ultimoPeriodoAsistencia} readOnly />
          </div>
          <div>
            <Label htmlFor="licenciaAusentarse">Licencia para Ausentarse</Label>
            <Input id="licenciaAusentarse" value={studentInfo.licenciaAusentarse} readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}