import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TabTemplate } from '@/components/tab-template'
import Link from 'next/link'

interface Class {
  id: string
  name: string
  classroom: string
  schedule: string
  students: number
}

interface TeacherTabsProps {
  classes: Class[]
}

const tabData = [
  {
    value: 'classes',
    title: 'Clases',
    sections: [
      {
        heading: 'Lista de Clases',
        description: '',
        buttonText: '',
        buttonAction: () => {}
      }
    ]
  },
  {
    value: 'grades',
    title: 'Calificaciones',
    sections: [
      {
        heading: 'Calificaciones',
        description: 'Aquí puedes gestionar las calificaciones de tus estudiantes.',
        buttonText: '',
        buttonAction: () => {}
      }
    ]
  },
  {
    value: 'schedule',
    title: 'Horario',
    sections: [
      {
        heading: 'Horario',
        description: 'Aquí puedes ver tu horario de clases.',
        buttonText: '',
        buttonAction: () => {}
      }
    ]
  },
  {
    value: 'messages',
    title: 'Mensajes',
    sections: [
      {
        heading: 'Mensajes',
        description: 'Aquí puedes ver y gestionar tus mensajes.',
        buttonText: '',
        buttonAction: () => {}
      }
    ]
  }
]

export function TeacherTabs({ classes }: TeacherTabsProps) {
  return (
    <Tabs defaultValue="classes" className="space-y-4">
      <TabsList>
        {tabData.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>{tab.title}</TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="classes">
        <Card>
          <CardHeader>
            <CardTitle>Lista de Clases</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>NRC</TableHead>
                  <TableHead>Nombre de la Clase</TableHead>
                  <TableHead>Salón</TableHead>
                  <TableHead>Horario</TableHead>
                  <TableHead>Alumnos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((class_) => (
                  <TableRow key={class_.id}>
                    <TableCell>
                      <Link href={`/clase/${class_.id.split(' ').join('-')}`} className="text-blue-600 hover:underline">
                        {class_.id}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link href={`/clase/${class_.id.split(' ').join('-')}`} className="text-blue-600 hover:underline">
                        {class_.name}
                      </Link>
                    </TableCell>
                    <TableCell>{class_.classroom}</TableCell>
                    <TableCell>{class_.schedule}</TableCell>
                    <TableCell>{class_.students}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      {tabData.map(tab => (
        <TabTemplate key={tab.value} value={tab.value} title={tab.title} sections={tab.sections} />
      ))}
    </Tabs>
  )
}