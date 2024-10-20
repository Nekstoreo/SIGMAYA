import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StudentBioCardProps {
  studentInfo: StudentInfo
  isEditing: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StudentBioCard({ studentInfo, isEditing, handleInputChange }: StudentBioCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Biográfica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="correoElectronico">Correo Electrónico</Label>
            <Input
              id="correoElectronico"
              name="correoElectronico"
              value={studentInfo.correoElectronico}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              name="telefono"
              value={studentInfo.telefono}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="sexo">Sexo</Label>
            <Input id="sexo" value={studentInfo.sexo} readOnly />
          </div>
          <div>
            <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
            <Input id="fechaNacimiento" value={studentInfo.fechaNacimiento} readOnly />
          </div>
          <div>
            <Label htmlFor="etnia">Etnia</Label>
            <Input id="etnia" value={studentInfo.etnia} readOnly />
          </div>
          <div>
            <Label htmlFor="raza">Raza</Label>
            <Input id="raza" value={studentInfo.raza} readOnly />
          </div>
          <div>
            <Label htmlFor="ciudadano">Ciudadano</Label>
            <Input id="ciudadano" value={studentInfo.ciudadano ? "Sí" : "No"} readOnly />
          </div>
          <div>
            <Label htmlFor="ciudadania">Ciudadanía</Label>
            <Input id="ciudadania" value={studentInfo.ciudadania} readOnly />
          </div>
          <div>
            <Label htmlFor="contactoEmergencia">Contacto de Emergencia</Label>
            <Input
              id="contactoEmergencia"
              name="contactoEmergencia"
              value={studentInfo.contactoEmergencia}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="telefonoEmergencia">Teléfono de Emergencia</Label>
            <Input
              id="telefonoEmergencia"
              name="telefonoEmergencia"
              value={studentInfo.telefonoEmergencia}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}