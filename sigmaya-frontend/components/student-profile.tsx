import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { StudentInfoCard } from '@/components/student-info-card'
import { StudentBioCard } from '@/components/student-bio-card'
import { StudentGeneralCard } from '@/components/student-general-card'
import { StudentAcademicCard } from '@/components/student-academic-card'


const initialStudentInfo: StudentInfo = {
  nombre: "Juan Pérez",
  codigo: "20210001",
  periodo: "2023-2",
  estadoAcademico: "Activo",
  horasGlobales: 60,
  pgaGlobal: 3.8,
  avisosInscripcion: ["Pendiente pago de matrícula"],
  retenciones: ["Ninguna"],
  correoElectronico: "juan.perez@universidad.edu",
  telefono: "+1234567890",
  sexo: "Masculino",
  fechaNacimiento: "1999-05-15",
  etnia: "Hispano",
  raza: "Mestizo",
  ciudadano: true,
  ciudadania: "Colombiana",
  contactoEmergencia: "María Pérez",
  telefonoEmergencia: "+0987654321",
  nivel: "Pregrado",
  clase: "Sophomore",
  estatus: "Tiempo completo",
  tipoAlumno: "Regular",
  residencia: "Urbana",
  campus: "Principal",
  primerPeriodoAsistencia: "2021-1",
  periodoMatriculado: "2023-2",
  ultimoPeriodoAsistencia: "2023-1",
  licenciaAusentarse: "N/A",
  solicitudesGraduacion: ["Ninguna"],
  grado: "Licenciatura",
  planEstudios: "Ingeniería de Sistemas",
  nivelAcademico: "Tercer año",
  programa: "Ingeniería",
  escuela: "Escuela de Ingeniería",
  carrera: "Ingeniería de Sistemas",
  departamento: "Departamento de Computación",
  concentracion: "Desarrollo de Software",
  especialidad: "Inteligencia Artificial",
  tipoAdmision: "Regular",
  periodoAdmision: "2021-1",
  periodoCatalogo: "2021",
  cursosInscritos: 5,
  totalHoras: 60,
  horasInscritas: 15,
  horasCobro: 15,
  horasCEU: 0,
  minimoHoras: 12,
  maximoHoras: 18
}

export function StudentProfileComponent() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>(initialStudentInfo)
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setStudentInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Aquí iría la lógica para guardar los cambios en el backend
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Perfil del Estudiante</h1>
      
      <div className="flex items-center mb-6">
        <Avatar className="w-24 h-24 mr-4">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt={studentInfo.nombre} />
          <AvatarFallback>{studentInfo.nombre.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">{studentInfo.nombre}</h2>
          <p className="text-gray-600">Código: {studentInfo.codigo}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StudentInfoCard studentInfo={studentInfo} />
        <StudentBioCard studentInfo={studentInfo} isEditing={isEditing} handleInputChange={handleInputChange} />
        <StudentGeneralCard studentInfo={studentInfo} />
        <StudentAcademicCard studentInfo={studentInfo} />
      </div>

      <div className="mt-6 flex justify-end">
        {isEditing ? (
          <>
            <Button onClick={handleSave} className="mr-2">Guardar Cambios</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancelar</Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Editar Información</Button>
        )}
      </div>
    </div>
  )
}