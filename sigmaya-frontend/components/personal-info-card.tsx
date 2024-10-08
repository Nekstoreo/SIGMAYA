import { Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface PersonalInfoCardProps {
  userName: string
  userRoles: Array<'Estudiante' | 'Profesor' | 'Exalumno/Amigo'>
}

export default function PersonalInfoCard({ userName, userRoles }: PersonalInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Información Personal
          <Button variant="ghost" size="sm">
            <Edit2 className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Nombre:</strong> {userName}</p>
          <p><strong>Roles:</strong> {userRoles.map((role, index) => (
            <Badge key={index} className="mr-2">{role}</Badge>
          ))}</p>
          <p><strong>Email:</strong> {userName.toLowerCase().replace(' ', '.')}@universidad.edu</p>
        </div>
      </CardContent>
    </Card>
  )
}