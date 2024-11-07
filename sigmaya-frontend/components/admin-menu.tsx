"use client"

import * as React from "react"
import { ChevronDown, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Datos de ejemplo
const usuarios = [
  { id: "500001", nombre: "Ana García", rol: "estudiante", carrera: "Ingeniería", semestre: 1 },
  { id: "500002", nombre: "Carlos López", rol: "profesor", contrato: "Tiempo completo" },
  { id: "500003", nombre: "María Rodríguez", rol: "administrativo" },
  { id: "500004", nombre: "Juan Martínez", rol: "estudiante", carrera: "Medicina", semestre: 1 },
  { id: "500005", nombre: "Laura Sánchez", rol: "profesor", contrato: "Medio tiempo" },
]

const materias = ["Matemáticas", "Física", "Química", "Biología", "Historia"]
const carreras = ["Ingeniería", "Medicina", "Derecho", "Economía"]

// Datos del administrador
const adminInfo = {
  nombre: "Alberto Gómez",
  rol: "Administrador",
  email: "alberto.gomez@universidad.edu",
  ultimoAcceso: "2023-05-15 09:30",
}

export default function PaginaPrincipalAdmin() {
  const [filtroRol, setFiltroRol] = React.useState("todos")
  const [filtroBusqueda, setFiltroBusqueda] = React.useState("")
  const [usuariosFiltrados, setUsuariosFiltrados] = React.useState(usuarios)

  React.useEffect(() => {
    const filtered = usuarios.filter((usuario) => {
      const cumpleRol = filtroRol === "todos" || usuario.rol === filtroRol
      const cumpleBusqueda =
        usuario.nombre.toLowerCase().includes(filtroBusqueda.toLowerCase()) ||
        usuario.id.includes(filtroBusqueda)
      return cumpleRol && cumpleBusqueda
    })
    setUsuariosFiltrados(filtered)
  }, [filtroRol, filtroBusqueda])

  return (
    <div className="p-8 relative">
      <div className="absolute top-8 right-8 flex items-center space-x-4">
        <div className="text-right">
          <p className="font-semibold">{adminInfo.nombre}</p>
          <p className="text-sm text-muted-foreground">{adminInfo.rol}</p>
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt={adminInfo.nombre} />
          <AvatarFallback><User /></AvatarFallback>
        </Avatar>
      </div>

      <h1 className="text-3xl font-bold mb-6">Panel de Administrador</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Información del Administrador</CardTitle>
          <CardDescription>Tus datos personales y última actividad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Nombre:</p>
              <p>{adminInfo.nombre}</p>
            </div>
            <div>
              <p className="font-semibold">Rol:</p>
              <p>{adminInfo.rol}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{adminInfo.email}</p>
            </div>
            <div>
              <p className="font-semibold">Último acceso:</p>
              <p>{adminInfo.ultimoAcceso}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Gestión de Usuarios</CardTitle>
          <CardDescription>Filtra y gestiona los usuarios del sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Select value={filtroRol} onValueChange={setFiltroRol}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="estudiante">Estudiantes</SelectItem>
                <SelectItem value="profesor">Profesores</SelectItem>
                <SelectItem value="administrativo">Administrativos</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre o ID"
                value={filtroBusqueda}
                onChange={(e) => setFiltroBusqueda(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usuariosFiltrados.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.id}</TableCell>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.rol}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Acciones <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuCheckboxItem>Ver detalles</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Editar</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Eliminar</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Asignación de Materias</CardTitle>
            <CardDescription>Asigna materias a estudiantes de primer semestre</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Asignar Materias</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Asignar Materias</DialogTitle>
                  <DialogDescription>
                    Selecciona el estudiante, la carrera y las materias a asignar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="estudiante" className="text-right">
                      Estudiante
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Seleccionar estudiante" />
                      </SelectTrigger>
                      <SelectContent>
                        {usuarios
                          .filter((u) => u.rol === "estudiante" && u.semestre === 1)
                          .map((estudiante) => (
                            <SelectItem key={estudiante.id} value={estudiante.id}>
                              {estudiante.nombre}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="carrera" className="text-right">
                      Carrera
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Seleccionar carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        {carreras.map((carrera) => (
                          <SelectItem key={carrera} value={carrera}>
                            {carrera}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="materias" className="text-right">
                      Materias
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="col-span-3">
                          Seleccionar Materias
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        {materias.map((materia) => (
                          <DropdownMenuCheckboxItem key={materia} checked={false}>
                            {materia}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Guardar cambios</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contratos de Profesores</CardTitle>
            <CardDescription>Información sobre los contratos de los profesores</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Tipo de Contrato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usuarios
                  .filter((u) => u.rol === "profesor")
                  .map((profesor) => (
                    <TableRow key={profesor.id}>
                      <TableCell>{profesor.nombre}</TableCell>
                      <TableCell>{profesor.contrato}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}