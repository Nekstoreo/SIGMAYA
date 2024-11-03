CREATE TABLE tbl_paises (
    pais_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE tbl_regiones (
    region_id BIGINT PRIMARY KEY,
    pais_id BIGINT REFERENCES tbl_paises(pais_id),
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE tbl_ciudades (
    ciudad_id BIGINT PRIMARY KEY,
    region_id BIGINT REFERENCES tbl_regiones(region_id),
    nombre VARCHAR(100) UNIQUE,
    rural BOOLEAN
);

CREATE TABLE tbl_grupos_etnicos (
    etnia_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT
);

CREATE TABLE tbl_identidades_genero (
    identidad_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT
);

CREATE TABLE tbl_estado_civil (
    estado_civil_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_estados (
    estado_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_documento (
    tipo_documento_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_niveles_academicos (
    nivel_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_contrato (
    tipo_contrato_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_modalidades (
    modalidad_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);


CREATE TABLE tbl_sedes (
    sede_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(200),
    telefono VARCHAR(20),
    email VARCHAR(100),
    UNIQUE (nombre)
);

CREATE TABLE tbl_usuarios (
    usuario_id BIGINT PRIMARY KEY,
    tipo_documento BIGINT REFERENCES tbl_tipos_documento(tipo_documento_id),
    numero_documento VARCHAR(20),
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    email_institucional VARCHAR(100) UNIQUE,
    email_personal VARCHAR(100),
    telefono VARCHAR(20),
    telefono_emergencia VARCHAR(20),
    direccion VARCHAR(200),
    ciudad_origen BIGINT REFERENCES tbl_ciudades(ciudad_id),
    genero BIGINT REFERENCES tbl_identidades_genero(identidad_id),
    etnia BIGINT REFERENCES tbl_grupos_etnicos(etnia_id),
    fecha_nacimiento DATE,
    estado_civil_id BIGINT REFERENCES tbl_estado_civil(estado_civil_id),
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    fecha_creacion DATE,
    foto_perfil VARCHAR
);

CREATE TABLE tbl_cargos_administrativos (
    cargo_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT,
    nivel_jerarquico INT
);

CREATE TABLE tbl_niveles_acceso (
    nivel_acceso_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE,
    descripcion TEXT,
    permisos TEXT
);

CREATE TABLE tbl_departamentos (
    departamento_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT,
    sede_id BIGINT REFERENCES tbl_sedes(sede_id)
);


CREATE TABLE tbl_administrativos (
    administrativo_id BIGINT PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    cargo_id BIGINT REFERENCES tbl_cargos_administrativos(cargo_id),
    departamento_id BIGINT REFERENCES tbl_departamentos(departamento_id),
    nivel_acceso_id BIGINT REFERENCES tbl_niveles_acceso(nivel_acceso_id),
    fecha_vinculacion DATE
);

CREATE TABLE tbl_escuelas (
    escuela_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sede_id BIGINT REFERENCES tbl_sedes(sede_id),
    area_conocimiento VARCHAR(50),
    decano_id BIGINT REFERENCES tbl_administrativos(administrativo_id),
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    UNIQUE (nombre)
);

CREATE TABLE tbl_facultades (
    facultad_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    escuela_id BIGINT REFERENCES tbl_escuelas(escuela_id),
    director_id BIGINT REFERENCES tbl_administrativos(administrativo_id),
    fecha_creacion DATE,
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    UNIQUE (nombre)
);

CREATE TABLE tbl_estados_estudiante (
    estado_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_admision (
    tipo_admision_id BIGINT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_periodos_academicos (
    periodo_id BIGINT PRIMARY KEY,
    anio INT,
    semestre VARCHAR(50),
    fecha_inicio DATE,
    fecha_fin DATE,
    estado_id BIGINT REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_estudiantes (
    estudiante_id BIGINT PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    estado_id BIGINT REFERENCES tbl_estados_estudiante(estado_id),
    condicion_especial VARCHAR(100),
    tipo_admision_id BIGINT REFERENCES tbl_tipos_admision(tipo_admision_id),
    fecha_ingreso DATE,
    cohorte_id BIGINT REFERENCES tbl_periodos_academicos(periodo_id),
    promedio_acumulado DECIMAL(3,2)
);

CREATE TABLE tbl_profesores (
    profesor_id BIGINT PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    nivel_academico_id BIGINT REFERENCES tbl_niveles_academicos(nivel_id),
    tipo_contrato_id BIGINT REFERENCES tbl_tipos_contrato(tipo_contrato_id),
    fecha_vinculacion DATE,
    especialidad VARCHAR
);

CREATE TABLE tbl_credenciales (
    credencial_id BIGINT PRIMARY KEY,
    usuario_id BIGINT REFERENCES tbl_usuarios(usuario_id),
    username VARCHAR(50),
    password_hash VARCHAR(100),
    fecha_creacion DATE,
    fecha_expiracion_password DATE,
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    intentos_fallidos INT,
    fecha_ultimo_acceso DATE,
    ip_ultimo_acceso VARCHAR(20),
    bloqueado BOOLEAN,
    UNIQUE (username)
);

CREATE TABLE tbl_programas_academicos (
    programa_id BIGINT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    facultad_id BIGINT REFERENCES tbl_facultades(facultad_id),
    nivel_id BIGINT REFERENCES tbl_niveles_academicos(nivel_id),
    duracion_semestres INT,
    director_id BIGINT REFERENCES tbl_profesores(profesor_id),
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    modalidad_id BIGINT REFERENCES tbl_modalidades(modalidad_id)
);

CREATE TABLE tbl_materias (
    materia_id CHAR(4) PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    tipo_programa VARCHAR(50),
    descripcion TEXT
);

CREATE TABLE tbl_cursos (
    curso_id CHAR(4) PRIMARY KEY,
    materia_id CHAR(4) REFERENCES tbl_materias(materia_id),
    titulo VARCHAR(100),
    creditos INT,
    intensidad_horaria INT,
    contenido_tematico TEXT,
    estado_id BIGINT REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_secciones (
    nrc CHAR(5) PRIMARY KEY,
    curso_id CHAR(4) REFERENCES tbl_cursos(curso_id),
    periodo_id BIGINT REFERENCES tbl_periodos_academicos(periodo_id),
    profesor_id BIGINT REFERENCES tbl_profesores(profesor_id),
    sede_id BIGINT REFERENCES tbl_sedes(sede_id),
    cupo_maximo INT,
    horario TEXT,
    aula VARCHAR(50),
    modalidad_id BIGINT REFERENCES tbl_modalidades(modalidad_id)
);

CREATE TABLE tbl_inscripciones_curso (
    inscripcion_id BIGINT PRIMARY KEY,
    estudiante_id BIGINT REFERENCES tbl_estudiantes(estudiante_id),
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    fecha_inscripcion DATE,
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    nota_final DECIMAL(3,2)
);

CREATE TABLE tbl_programas_estudiantes (
    programa_estudiante_id BIGINT PRIMARY KEY,
    estudiante_id BIGINT REFERENCES tbl_estudiantes(estudiante_id),
    programa_id BIGINT REFERENCES tbl_programas_academicos(programa_id),
    sede_id BIGINT REFERENCES tbl_sedes(sede_id),
    periodo_ingreso_id BIGINT REFERENCES tbl_periodos_academicos(periodo_id),
    creditos_aprobados INT,
    estado_id BIGINT REFERENCES tbl_estados(estado_id),
    fecha_egreso DATE
);

CREATE TABLE tbl_detalles_calificaciones (
    detalle_calificacion_id BIGINT PRIMARY KEY,
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    actividad VARCHAR(100),
    porcentaje DECIMAL(3,2)
);

CREATE TABLE tbl_calificaciones_parciales (
    calificacion_parcial_id BIGINT PRIMARY KEY,
    estudiante_id BIGINT REFERENCES tbl_estudiantes(estudiante_id),
    nota DECIMAL(3,2),
    fecha_calificacion DATE,
    detalle_calificacion_id BIGINT REFERENCES tbl_detalles_calificaciones(detalle_calificacion_id),
    estado_id BIGINT REFERENCES tbl_estados (estado_id),
    observaciones TEXT
);

CREATE TABLE tbl_calificaciones_finales (
    calificacion_final_id BIGINT PRIMARY KEY,
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    estudiante_id BIGINT REFERENCES tbl_estudiantes(estudiante_id),
    nota_final DECIMAL(3,2),
    estado_id BIGINT REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_prerrequisitos (
    prerrequisito_id BIGINT PRIMARY KEY,
    materia_id CHAR(4) REFERENCES tbl_materias(materia_id),
    prerrequisito_materia_id CHAR(4) REFERENCES tbl_materias(materia_id)
);