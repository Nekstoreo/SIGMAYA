export interface CourseInfo {
  nrc: string;
  nombre: string;
  codigo: string;
  periodo: string;
  horario: string;
  aula: string;
  profesor: string;
  departamento: string;
  creditos: number;
  cupoMaximo: number;
  estudiantesInscritos: number;
}
export interface Notas {
  parcial1: number | null;
  parcial2: number | null;
  proyecto: number | null;
  final: number | null;
  [key: string]: number | null;
}
interface Asistencia {
  [date: string]: boolean;
}
export interface Student {
  id: string;
  nombre: string;
  notas: Notas;
  asistencia: Asistencia;
}
