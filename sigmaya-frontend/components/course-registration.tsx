'use client'

import { useState } from 'react'
import { Search, Filter, Calendar, AlertCircle } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface Materia {
  id: number
  codigo: string
  nombre: string
  creditos: number
  seccion: string
  profesor: string
  cupos: number
  horario: string
  aula: string
}

const materias: Materia[] = [
  {
    id: 1,
    codigo: 'ING301',
    nombre: 'Ingeniería de Software',
    creditos: 4,
    seccion: '001',
    profesor: 'Dr. López',
    cupos: 5,
    horario: 'Lun, Mie 14:00-15:30',
    aula: 'B-201'
  },
  {
    id: 2,
    codigo: 'MAT202',
    nombre: 'Cálculo III',
    creditos: 4,
    seccion: '002',
    profesor: 'Dra. Sánchez',
    cupos: 3,
    horario: 'Mar, Jue 10:00-11:30',
    aula: 'A-301'
  },
]

export default function CourseRegistration() {
  const [materiasSeleccionadas, setMateriasSeleccionadas] = useState<Materia[]>([])
  const [busqueda, setBusqueda] = useState('')
  const [creditosTotal, setCreditosTotal] = useState(0)

  const agregarMateria = (materia: Materia) => {
    if (materiasSeleccionadas.find(m => m.id === materia.id)) {
      return
    }
    
    const nuevoTotal = creditosTotal + materia.creditos
    if (nuevoTotal > 21) {
      alert('No puedes inscribir más de 21 créditos')
      return
    }
    
    setMateriasSeleccionadas([...materiasSeleccionadas, materia])
    setCreditosTotal(nuevoTotal)
  }

  const removerMateria = (materia: Materia) => {
    setMateriasSeleccionadas(materiasSeleccionadas.filter(m => m.id !== materia.id))
    setCreditosTotal(creditosTotal - materia.creditos)
  }

  const materiasFiltradas = materias.filter(materia => 
    materia.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    materia.codigo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre o código de materia..."
          className="flex-1 outline-none"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Materias Disponibles</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {materiasFiltradas.map(materia => (
                <div key={materia.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{materia.nombre}</p>
                    <p className="text-sm text-gray-600">
                      {materia.codigo} - {materia.profesor}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {materia.horario}
                    </div>
                  </div>
                  <Button 
                    onClick={() => agregarMateria(materia)}
                    disabled={materiasSeleccionadas.some(m => m.id === materia.id)}
                  >
                    Agregar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Materias Seleccionadas</h3>
            <p className="text-sm text-gray-500">
              Créditos totales: {creditosTotal}/21
            </p>
          </CardHeader>
          <CardContent>
            {materiasSeleccionadas.length === 0 ? (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  No has seleccionado ninguna materia aún
                </AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-4">
                {materiasSeleccionadas.map(materia => (
                  <div key={materia.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{materia.nombre}</p>
                      <p className="text-sm text-gray-600">
                        {materia.codigo} - {materia.profesor}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {materia.horario}
                      </div>
                    </div>
                    <Button 
                      variant="destructive"
                      onClick={() => removerMateria(materia)}
                    >
                      Remover
                    </Button>
                  </div>
                ))}

                <div className="mt-6">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Confirmar Inscripción
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}