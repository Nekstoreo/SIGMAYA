// src/models/allModels.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";

// tbl_paises
@Entity("tbl_paises")
export class Pais {
  @PrimaryGeneratedColumn("increment")
  pais_id!: number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_regiones
@Entity("tbl_regiones")
export class Region {
  @PrimaryGeneratedColumn("increment")
  region_id!:number;

  @ManyToOne(() => Pais)
  pais!:Pais;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_ciudades
@Entity("tbl_ciudades")
export class Ciudad {
  @PrimaryGeneratedColumn("increment")
  ciudad_id!:number;

  @ManyToOne(() => Region)
  region!:Region;

  @Column({ unique: true })
  nombre!:string;

  @Column()
  rural!:boolean;
}

// tbl_grupos_etnicos
@Entity("tbl_grupos_etnicos")
export class GrupoEtnico {
  @PrimaryGeneratedColumn("increment")
  etnia_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @Column("text")
  descripcion!:string;
}

// tbl_identidades_genero
@Entity("tbl_identidades_genero")
export class IdentidadGenero {
  @PrimaryGeneratedColumn("increment")
  identidad_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @Column("text")
  descripcion!:string;
}

// tbl_estado_civil
@Entity("tbl_estado_civil")
export class EstadoCivil {
  @PrimaryGeneratedColumn("increment")
  estado_civil_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_estados
@Entity("tbl_estados")
export class Estado {
  @PrimaryGeneratedColumn("increment")
  estado_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_tipos_documento
@Entity("tbl_tipos_documento")
export class TipoDocumento {
  @PrimaryGeneratedColumn("increment")
  tipo_documento_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_niveles_academicos
@Entity("tbl_niveles_academicos")
export class NivelAcademico {
  @PrimaryGeneratedColumn("increment")
  nivel_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_tipos_contrato
@Entity("tbl_tipos_contrato")
export class TipoContrato {
  @PrimaryGeneratedColumn("increment")
  tipo_contrato_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_modalidades
@Entity("tbl_modalidades")
export class Modalidad {
  @PrimaryGeneratedColumn("increment")
  modalidad_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_sedes
@Entity("tbl_sedes")
export class Sede {
  @PrimaryGeneratedColumn("increment")
  sede_id!:number;

  @Column()
  nombre!:string;

  @Column()
  ubicacion!:string;

  @Column()
  telefono!:string;

  @Column()
  email!:string;
}

// tbl_usuarios
@Entity("tbl_usuarios")
export class Usuario {
  @PrimaryGeneratedColumn("increment")
  usuario_id!:number;

  @ManyToOne(() => TipoDocumento)
  tipo_documento!:TipoDocumento;

  @Column()
  numero_documento!:string;

  @Column()
  nombres!:string;

  @Column()
  apellidos!:string;

  @Column({ unique: true })
  email_institucional!:string;

  @Column()
  email_personal!:string;

  @Column()
  telefono!:string;

  @Column()
  telefono_emergencia!:string;

  @Column()
  direccion!:string;

  @ManyToOne(() => Ciudad)
  ciudad_origen!:Ciudad;

  @ManyToOne(() => IdentidadGenero)
  genero!:IdentidadGenero;

  @ManyToOne(() => GrupoEtnico)
  etnia!:GrupoEtnico;

  @Column()
  fecha_nacimiento!:Date;

  @ManyToOne(() => EstadoCivil)
  estado_civil!:EstadoCivil;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @Column()
  fecha_creacion!:Date;

  @Column()
  foto_perfil!:string;
}

// tbl_cargos_administrativos
@Entity("tbl_cargos_administrativos")
export class CargoAdministrativo {
  @PrimaryGeneratedColumn("increment")
  cargo_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @Column("text")
  descripcion!:string;

  @Column()
  nivel_jerarquico!:number;
}

// tbl_niveles_acceso
@Entity("tbl_niveles_acceso")
export class NivelAcceso {
  @PrimaryGeneratedColumn("increment")
  nivel_acceso_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @Column("text")
  descripcion!:string;

  @Column("text")
  permisos!:string;
}

// tbl_departamentos
@Entity("tbl_departamentos")
export class Departamento {
  @PrimaryGeneratedColumn("increment")
  departamento_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @Column("text")
  descripcion!:string;

  @ManyToOne(() => Sede)
  sede!:Sede;
}

// tbl_administrativos
@Entity("tbl_administrativos")
export class Administrativo {
  @PrimaryGeneratedColumn("increment")
  administrativo_id!:number;

  @ManyToOne(() => Usuario)
  usuario!:Usuario;

  @ManyToOne(() => CargoAdministrativo)
  cargo!:CargoAdministrativo;

  @ManyToOne(() => Departamento)
  departamento!:Departamento;

  @ManyToOne(() => NivelAcceso)
  nivel_acceso!:NivelAcceso;

  @Column()
  fecha_vinculacion!:Date;
}

// tbl_escuelas
@Entity("tbl_escuelas")
export class Escuela {
  @PrimaryGeneratedColumn("increment")
  escuela_id!:number;

  @Column()
  nombre!:string;

  @ManyToOne(() => Sede)
  sede!:Sede;

  @Column()
  area_conocimiento!:string;

  @ManyToOne(() => Administrativo)
  decano!:Administrativo;

  @ManyToOne(() => Estado)
  estado!:Estado;
}

// tbl_facultades
@Entity("tbl_facultades")
export class Facultad {
  @PrimaryGeneratedColumn("increment")
  facultad_id!:number;

  @Column()
  nombre!:string;

  @ManyToOne(() => Escuela)
  escuela!:Escuela;

  @ManyToOne(() => Administrativo)
  director!:Administrativo;

  @Column()
  fecha_creacion!:Date;

  @ManyToOne(() => Estado)
  estado!:Estado;
}

// tbl_estados_estudiante
@Entity("tbl_estados_estudiante")
export class EstadoEstudiante {
  @PrimaryGeneratedColumn("increment")
  estado_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_tipos_admision
@Entity("tbl_tipos_admision")
export class TipoAdmision {
  @PrimaryGeneratedColumn("increment")
  tipo_admision_id!:number;

  @Column({ unique: true })
  nombre!:string;
}

// tbl_periodos_academicos
@Entity("tbl_periodos_academicos")
export class PeriodoAcademico {
  @PrimaryGeneratedColumn("increment")
  periodo_id!:number;

  @Column()
  anio!:number;

  @Column()
  semestre!:string;

  @Column()
  fecha_inicio!:Date;

  @Column()
  fecha_fin!:Date;

  @ManyToOne(() => Estado)
  estado!:Estado;
}

// tbl_estudiantes
@Entity("tbl_estudiantes")
export class Estudiante {
  @PrimaryGeneratedColumn("increment")
  estudiante_id!:number;

  @ManyToOne(() => Usuario)
  usuario!:Usuario;

  @ManyToOne(() => EstadoEstudiante)
  estado!:EstadoEstudiante;

  @Column()
  condicion_especial!:string;

  @ManyToOne(() => TipoAdmision)
  tipo_admision!:TipoAdmision;

  @Column()
  fecha_ingreso!:Date;

  @ManyToOne(() => PeriodoAcademico)
  cohorte!:PeriodoAcademico;

  @Column()
  promedio_acumulado!:number;
}

// tbl_profesores
@Entity("tbl_profesores")
export class Profesor {
  @PrimaryGeneratedColumn("increment")
  profesor_id!:number;

  @ManyToOne(() => Usuario)
  usuario!:Usuario;

  @ManyToOne(() => NivelAcademico)
  nivel_academico!:NivelAcademico;

  @ManyToOne(() => TipoContrato)
  tipo_contrato!:TipoContrato;

  @Column()
  fecha_vinculacion!:Date;

  @Column()
  especialidad!:string;
}

// tbl_credenciales
@Entity("tbl_credenciales")
export class Credencial {
  @PrimaryGeneratedColumn("increment")
  credencial_id!:number;

  @ManyToOne(() => Usuario)
  usuario!:Usuario;

  @Column({ unique: true })
  username!:string;

  @Column()
  password_hash!:string;

  @Column()
  fecha_creacion!:Date;

  @Column()
  fecha_expiracion_password!:Date;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @Column()
  intentos_fallidos!:number;

  @Column()
  fecha_ultimo_acceso!:Date;

  @Column()
  ip_ultimo_acceso!:string;

  @Column()
  bloqueado!:boolean;
}

// tbl_programas_academicos
@Entity("tbl_programas_academicos")
export class ProgramaAcademico {
  @PrimaryGeneratedColumn("increment")
  programa_id!:number;

  @Column({ unique: true })
  nombre!:string;

  @ManyToOne(() => Facultad)
  facultad!:Facultad;

  @ManyToOne(() => NivelAcademico)
  nivel!:NivelAcademico;

  @Column()
  duracion_semestres!:number;

  @ManyToOne(() => Profesor)
  director!:Profesor;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @ManyToOne(() => Modalidad)
  modalidad!:Modalidad;
}

// tbl_materias
@Entity("tbl_materias")
export class Materia {
  @PrimaryGeneratedColumn("increment")
  materia_id!:string;

  @Column({ unique: true })
  nombre!:string;

  @Column()
  tipo_programa!:string;

  @Column("text")
  descripcion!:string;
}

// tbl_cursos
@Entity("tbl_cursos")
export class Curso {
  @PrimaryGeneratedColumn("increment")
  curso_id!:string;

  @ManyToOne(() => Materia)
  materia!:Materia;

  @Column()
  titulo!:string;

  @Column()
  creditos!:number;

  @Column()
  intensidad_horaria!:number;

  @Column("text")
  contenido_tematico!:string;

  @ManyToOne(() => Estado)
  estado!:Estado;
}

// tbl_secciones
@Entity("tbl_secciones")
export class Seccion {
  @PrimaryGeneratedColumn("increment")
  nrc!:string;

  @ManyToOne(() => Curso)
  curso!:Curso;

  @ManyToOne(() => PeriodoAcademico)
  periodo!:PeriodoAcademico;

  @ManyToOne(() => Profesor)
  profesor!:Profesor;

  @ManyToOne(() => Sede)
  sede!:Sede;

  @Column()
  cupo_maximo!:number;

  @Column("text")
  horario!:string;

  @Column()
  aula!:string;

  @ManyToOne(() => Modalidad)
  modalidad!:Modalidad;
}

// tbl_inscripciones_curso
@Entity("tbl_inscripciones_curso")
export class InscripcionCurso {
  @PrimaryGeneratedColumn("increment")
  inscripcion_id!:number;

  @ManyToOne(() => Estudiante)
  estudiante!:Estudiante;

  @ManyToOne(() => Seccion)
  seccion!:Seccion;

  @Column()
  fecha_inscripcion!:Date;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @Column()
  nota_final!:number;
}

// tbl_programas_estudiantes
@Entity("tbl_programas_estudiantes")
export class ProgramaEstudiante {
  @PrimaryGeneratedColumn("increment")
  programa_estudiante_id!:number;

  @ManyToOne(() => Estudiante)
  estudiante!:Estudiante;

  @ManyToOne(() => ProgramaAcademico)
  programa!:ProgramaAcademico;

  @ManyToOne(() => Sede)
  sede!:Sede;

  @ManyToOne(() => PeriodoAcademico)
  periodo_ingreso!:PeriodoAcademico;

  @Column()
  creditos_aprobados!:number;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @Column()
  fecha_egreso!:Date;
}

// tbl_detalles_calificaciones
@Entity("tbl_detalles_calificaciones")
export class DetalleCalificacion {
  @PrimaryGeneratedColumn("increment")
  detalle_calificacion_id!:number;

  @ManyToOne(() => Seccion)
  seccion!:Seccion;

  @Column()
  actividad!:string;

  @Column()
  porcentaje!:number;
}

// tbl_calificaciones_parciales
@Entity("tbl_calificaciones_parciales")
export class CalificacionParcial {
  @PrimaryGeneratedColumn("increment")
  calificacion_parcial_id!:number;

  @ManyToOne(() => Estudiante)
  estudiante!:Estudiante;

  @Column()
  nota!:number;

  @Column()
  fecha_calificacion!:Date;

  @ManyToOne(() => DetalleCalificacion)
  detalle_calificacion!:DetalleCalificacion;

  @ManyToOne(() => Estado)
  estado!:Estado;

  @Column("text")
  observaciones!:string;
}

// tbl_calificaciones_finales
@Entity("tbl_calificaciones_finales")
export class CalificacionFinal {
  @PrimaryGeneratedColumn("increment")
  calificacion_final_id!:number;

  @ManyToOne(() => Seccion)
  seccion!:Seccion;

  @ManyToOne(() => Estudiante)
  estudiante!:Estudiante;

  @Column()
  nota_final!:number;

  @ManyToOne(() => Estado)
  estado!:Estado;
}

// tbl_prerrequisitos
@Entity("tbl_prerrequisitos")
export class Prerrequisito {
  @PrimaryGeneratedColumn("increment")
  prerrequisito_id!:number;

  @ManyToOne(() => Materia)
  materia!:Materia;

  @ManyToOne(() => Materia)
  prerrequisito_materia!:Materia;
}
