import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { InteractiveScheduleComponent } from '@/components/interactive-schedule'
import { StudentTab } from '@/components/student-tab'

interface Class {
  id: number
  name: string
  code: string
  schedule: string
  professor: string
}

interface StudentTabsProps {
  classes: Class[]
}

const tabData = [
  {
    value: 'admission',
    title: 'Admisión y Matrícula',
    sections: [
      {
        heading: 'Admisión a otros programas académicos',
        description: 'Consulta o diligencia tu solicitud de admisión.',
        buttonText: 'Ir a Admisiones',
        buttonAction: () => alert('Ir a Admisiones')
      },
      {
        heading: 'Gestión Documentos Digitales de Matrícula - UNIVERSIDAD',
        description: 'Gestiona aquí en forma digital los documentos requeridos para tu proceso de matrícula de pregrado y postgrado.',
        buttonText: 'Gestionar Documentos',
        buttonAction: () => alert('Gestionar Documentos')
      },
      {
        heading: 'Proceso de matrícula y actualización de datos - Colegio',
        description: 'Gestiona aquí en forma digital los documentos requeridos para formalizar tu proceso de matrícula del colegio y actualización de datos.',
        buttonText: 'Actualizar Datos',
        buttonAction: () => alert('Actualizar Datos')
      }
    ]
  },
  {
    value: 'academic',
    title: 'Información Académica',
    sections: [
      {
        heading: 'Registro de cursos y estado de cuenta',
        description: 'Inscribe tus cursos, realiza tu matrícula y analiza tu estado de cuenta.',
        buttonText: 'Ir a Registro',
        buttonAction: () => alert('Ir a Registro')
      },
      {
        heading: 'Perfil del Estudiante',
        description: 'Visualiza tu información académica en un solo sitio.',
        buttonText: 'Ver Perfil',
        buttonAction: () => alert('Ver Perfil')
      },
      {
        heading: 'Seguimiento a la formación',
        description: 'Analiza, revisa, planea y proyecta tu proceso formativo.',
        buttonText: 'Ver Seguimiento',
        buttonAction: () => alert('Ver Seguimiento')
      },
      {
        heading: 'Proceso de Titulación',
        description: 'Ejecuta paso a paso las actividades para el proceso de Titulación.',
        buttonText: 'Iniciar Proceso',
        buttonAction: () => alert('Iniciar Proceso')
      }
    ]
  },
  {
    value: 'evaluation',
    title: 'Evaluación y Feedback',
    sections: [
      {
        heading: 'Evaluación docente',
        description: 'Evalúa tus docentes en línea.',
        buttonText: 'Iniciar Evaluación',
        buttonAction: () => alert('Iniciar Evaluación')
      },
      {
        heading: 'Encuesta General',
        description: '',
        buttonText: 'Responder Encuesta',
        buttonAction: () => alert('Responder Encuesta')
      },
      {
        heading: 'Encuesta de seguimiento apropiación de plataformas',
        description: 'Queremos saber cómo te has sentido con el uso de Teams, Moodle y Brightspace y escuchar tus recomendaciones.',
        buttonText: 'Responder Encuesta',
        buttonAction: () => alert('Responder Encuesta')
      }
    ]
  },
  {
    value: 'services',
    title: 'Servicios',
    sections: [
      {
        heading: 'Solicitud de servicios',
        description: 'Solicitud de servicios (certificados, pecuniarios y otros) para el Colegio Medellín, UPB Seccional Bucaramanga y UPB Seccional Montería.',
        buttonText: 'Solicitar Servicio',
        buttonAction: () => alert('Solicitar Servicio')
      },
      {
        heading: 'Validación acceso - Recursos Digitales Biblioteca',
        description: 'Verifica si se encuentra actualizada la información requerida para acceder a los recursos digitales de la Biblioteca.',
        buttonText: 'Verificar Acceso',
        buttonAction: () => alert('Verificar Acceso')
      }
    ]
  }
]

export function StudentTabs({ classes }: StudentTabsProps) {
  return (
    <Tabs defaultValue="schedule" className="space-y-4">
      <TabsList>
        <TabsTrigger value="schedule">Horario</TabsTrigger>
        {tabData.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>{tab.title}</TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="schedule">
        <InteractiveScheduleComponent />
      </TabsContent>

      {tabData.map(tab => (
        <StudentTab key={tab.value} value={tab.value} title={tab.title} sections={tab.sections} />
      ))}
    </Tabs>
  )
}