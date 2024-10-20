import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StudentAcademicCardProps {
  studentInfo: StudentInfo
}

export function StudentAcademicCard({ studentInfo }: StudentAcademicCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Académica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="grado">Grado</Label>
            <Input id="grado" value={studentInfo.grado} readOnly />
          </div>
          <div>
            <Label htmlFor="planEstudios">Plan de Estudios</Label>
            <Input id="planEstudios" value={studentInfo.planEstudios} readOnly />
          </div>
          <div>
            <Label htmlFor="nivelAcademico">Nivel Académico</Label>
            <Input id="nivelAcademico" value={studentInfo.nivelAcademico} readOnly />
          </div>
          <div>
            <Label htmlFor="programa">Programa</Label>
            <Input id="programa" value={studentInfo.programa} readOnly />
          </div>
          <div>
            <Label htmlFor="escuela">Escuela</Label>
            <Input id="escuela" value={studentInfo.escuela} readOnly />
          </div>
          <div>
            <Label htmlFor="carrera">Carrera</Label>
            <Input id="carrera" value={studentInfo.carrera} readOnly />
          </div>
          <div>
            <Label htmlFor="departamento">Departamento</Label>
            <Input id="departamento" value={studentInfo.departamento} readOnly />
          </div>
          <div>
            <Label htmlFor="concentracion">Concentración</Label>
            <Input id="concentracion" value={studentInfo.concentracion} readOnly />
          </div>
          <div>
            <Label htmlFor="especialidad">Especialidad</Label>
            <Input id="especialidad" value={studentInfo.especialidad} readOnly />
          </div>
          <div>
            <Label htmlFor="tipoAdmision">Tipo de Admisión</Label>
            <Input id="tipoAdmision" value={studentInfo.tipoAdmision} readOnly />
          </div>
          <div>
            <Label htmlFor="periodoAdmision">Período de Admisión</Label>
            <Input id="periodoAdmision" value={studentInfo.periodoAdmision} readOnly />
          </div>
          <div>
            <Label htmlFor="periodoCatalogo">Período del Catálogo</Label>
            <Input id="periodoCatalogo" value={studentInfo.periodoCatalogo} readOnly />
          </div>
          <div>
            <Label htmlFor="cursosInscritos">Cursos Inscritos</Label>
            <Input id="cursosInscritos" value={studentInfo.cursosInscritos} readOnly />
          </div>
          <div>
            <Label htmlFor="totalHoras">Total de Horas</Label>
            <Input id="totalHoras" value={studentInfo.totalHoras} readOnly />
          </div>
          <div>
            <Label htmlFor="horasInscritas">Horas Inscritas</Label>
            <Input id="horasInscritas" value={studentInfo.horasInscritas} readOnly />
          </div>
          <div>
            <Label htmlFor="horasCobro">Horas de Cobro</Label>
            <Input id="horasCobro" value={studentInfo.horasCobro} readOnly />
          </div>
          <div>
            <Label htmlFor="horasCEU">Horas CEU</Label>
            <Input id="horasCEU" value={studentInfo.horasCEU} readOnly />
          </div>
          <div>
            <Label htmlFor="minimoHoras">Mínimo de Horas</Label>
            <Input id="minimoHoras" value={studentInfo.minimoHoras} readOnly />
          </div>
          <div>
            <Label htmlFor="maximoHoras">Máximo de Horas</Label>
            <Input id="maximoHoras" value={studentInfo.maximoHoras} readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}