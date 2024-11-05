CREATE TABLE tbl_paises (
    pais_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE tbl_departamentos (
    departamento_id SERIAL PRIMARY KEY,
    pais_id INTEGER REFERENCES tbl_paises(pais_id),
    nombre VARCHAR(100) UNIQUE
);

CREATE TABLE tbl_ciudades (
    ciudad_id SERIAL PRIMARY KEY,
    departamento_id INTEGER REFERENCES tbl_departamentos(departamento_id),
    nombre VARCHAR(100) UNIQUE,
    rural BOOLEAN
);

CREATE TABLE tbl_roles_usuario (
    rol_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE,
    descripcion TEXT
);

CREATE TABLE tbl_grupos_etnicos (
    etnia_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT
);

CREATE TABLE tbl_identidades_genero (
    identidad_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT
);

CREATE TABLE tbl_estado_civil (
    estado_civil_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_estados (
    estado_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_documento (
    tipo_documento_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_niveles_academicos (
    nivel_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_contrato (
    tipo_contrato_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_modalidades (
    modalidad_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_sedes (
    sede_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(200),
    telefono VARCHAR(20),
    email VARCHAR(100),
    UNIQUE (nombre)
);

CREATE TABLE tbl_usuarios (
    usuario_id CHAR(9) PRIMARY KEY,
    tipo_documento INTEGER REFERENCES tbl_tipos_documento(tipo_documento_id),
    numero_documento VARCHAR(20),
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    email_institucional VARCHAR(100) UNIQUE,
    email_personal VARCHAR(100),
    telefono VARCHAR(20),
    telefono_emergencia VARCHAR(20),
    direccion VARCHAR(200),
    ciudad_origen INTEGER REFERENCES tbl_ciudades(ciudad_id),
    genero INTEGER REFERENCES tbl_identidades_genero(identidad_id),
    etnia INTEGER REFERENCES tbl_grupos_etnicos(etnia_id),
    fecha_nacimiento DATE,
    estado_civil INTEGER REFERENCES tbl_estado_civil(estado_civil_id),
    estado INTEGER REFERENCES tbl_estados(estado_id),
    fecha_creacion DATE,
    foto_perfil VARCHAR,
    rol_id INTEGER REFERENCES tbl_roles_usuario(rol_id)
);

CREATE TABLE tbl_cargos_administrativos (
    cargo_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT,
    nivel_jerarquico INT
);

CREATE TABLE tbl_niveles_acceso (
    nivel_acceso_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE,
    descripcion TEXT,
    permisos TEXT
);

CREATE TABLE tbl_areas_administrativas (
    area_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    descripcion TEXT,
    sede_id INTEGER REFERENCES tbl_sedes(sede_id)
);

CREATE TABLE tbl_administrativos (
    administrativo_id CHAR(9) PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    cargo_id INTEGER REFERENCES tbl_cargos_administrativos(cargo_id),
    area_id INTEGER REFERENCES tbl_areas_administrativas(area_id),
    nivel_acceso_id INTEGER REFERENCES tbl_niveles_acceso(nivel_acceso_id),
    fecha_vinculacion DATE
);

CREATE TABLE tbl_escuelas (
    escuela_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sede_id INTEGER REFERENCES tbl_sedes(sede_id),
    area_conocimiento VARCHAR(50),
    decano_id CHAR(9) REFERENCES tbl_administrativos(administrativo_id),
    estado_id INTEGER REFERENCES tbl_estados(estado_id),
    UNIQUE (nombre)
);

CREATE TABLE tbl_facultades (
    facultad_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    escuela_id INTEGER REFERENCES tbl_escuelas(escuela_id),
    director_id CHAR(9) REFERENCES tbl_administrativos(administrativo_id),
    fecha_creacion DATE,
    estado_id INTEGER REFERENCES tbl_estados(estado_id),
    UNIQUE (nombre)
);

CREATE TABLE tbl_estados_estudiante (
    estado_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_tipos_admision (
    tipo_admision_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE
);

CREATE TABLE tbl_periodos_academicos (
    periodo_id SERIAL PRIMARY KEY,
    anio INT,
    semestre INT,
    fecha_inicio DATE,
    fecha_fin DATE,
    estado_id INTEGER REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_estudiantes (
    estudiante_id CHAR(9) PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    estado_id INTEGER REFERENCES tbl_estados_estudiante(estado_id),
    condicion_especial VARCHAR(100),
    tipo_admision_id INTEGER REFERENCES tbl_tipos_admision(tipo_admision_id),
    fecha_ingreso DATE,
    cohorte_id INTEGER REFERENCES tbl_periodos_academicos(periodo_id)
);

CREATE TABLE tbl_profesores (
    profesor_id CHAR(9) PRIMARY KEY REFERENCES tbl_usuarios(usuario_id),
    nivel_academico_id INTEGER REFERENCES tbl_niveles_academicos(nivel_id),
    tipo_contrato_id INTEGER REFERENCES tbl_tipos_contrato(tipo_contrato_id),
    fecha_vinculacion DATE DEFAULT CURRENT_DATE,
    especialidad VARCHAR
);

CREATE TABLE tbl_credenciales (
    credencial_id SERIAL PRIMARY KEY,
    usuario_id CHAR(9) REFERENCES tbl_usuarios(usuario_id),
    username VARCHAR(50),
    password_hash VARCHAR(100),
    fecha_creacion DATE DEFAULT CURRENT_DATE,
    fecha_expiracion_password DATE DEFAULT CURRENT_DATE + INTERVAL '90 days',
    estado_id INTEGER REFERENCES tbl_estados(estado_id),
    intentos_fallidos INT,
    fecha_ultimo_acceso DATE,
    ip_ultimo_acceso VARCHAR(20),
    bloqueado BOOLEAN,
    UNIQUE (username)
);

CREATE TABLE tbl_programas_academicos (
    programa_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    facultad_id INTEGER REFERENCES tbl_facultades(facultad_id),
    nivel_id INTEGER REFERENCES tbl_niveles_academicos(nivel_id),
    duracion_semestres INT,
    director_id CHAR(9) REFERENCES tbl_profesores(profesor_id),
    estado_id INTEGER REFERENCES tbl_estados(estado_id),
    modalidad_id INTEGER REFERENCES tbl_modalidades(modalidad_id)
);

CREATE TABLE tbl_materias (
    materia_id CHAR(4) PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE,
    nivel_academico_id INTEGER REFERENCES tbl_niveles_academicos(nivel_id),
    descripcion TEXT
);

CREATE TABLE tbl_cursos (
    curso_id CHAR(4) PRIMARY KEY,
    materia_id CHAR(4) REFERENCES tbl_materias(materia_id),
    titulo VARCHAR(100),
    creditos INT,
    intensidad_horaria INT,
    contenido_tematico TEXT,
    estado_id INTEGER REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_secciones (
    nrc CHAR(5) PRIMARY KEY,
    curso_id CHAR(4) REFERENCES tbl_cursos(curso_id),
    periodo_id INTEGER REFERENCES tbl_periodos_academicos(periodo_id),
    profesor_id CHAR(9) REFERENCES tbl_profesores(profesor_id),
    sede_id INTEGER REFERENCES tbl_sedes(sede_id),
    cupo_maximo INT,
    horario TEXT,
    aula VARCHAR(50),
    modalidad_id INTEGER REFERENCES tbl_modalidades(modalidad_id)
);

CREATE TABLE tbl_inscripciones_curso (
    inscripcion_id SERIAL PRIMARY KEY,
    estudiante_id CHAR(9) REFERENCES tbl_estudiantes(estudiante_id),
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    fecha_inscripcion DATE DEFAULT CURRENT_DATE,
    estado_id INTEGER REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_programas_estudiantes (
    programa_estudiante_id SERIAL PRIMARY KEY,
    estudiante_id CHAR(9) REFERENCES tbl_estudiantes(estudiante_id),
    programa_id INTEGER REFERENCES tbl_programas_academicos(programa_id),
    sede_id INTEGER REFERENCES tbl_sedes(sede_id),
    periodo_ingreso_id INTEGER REFERENCES tbl_periodos_academicos(periodo_id),
    estado_id INTEGER REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_detalles_calificaciones (
    detalle_calificacion_id SERIAL PRIMARY KEY,
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    actividad VARCHAR(100),
    porcentaje DECIMAL(3,2)
);

CREATE TABLE tbl_calificaciones_parciales (
    calificacion_parcial_id SERIAL PRIMARY KEY,
    estudiante_id CHAR(9) REFERENCES tbl_estudiantes(estudiante_id),
    nota DECIMAL(3,2),
    fecha_calificacion DATE DEFAULT CURRENT_DATE,
    detalle_calificacion_id INTEGER REFERENCES tbl_detalles_calificaciones(detalle_calificacion_id),
    estado_id INTEGER REFERENCES tbl_estados (estado_id),
    observaciones TEXT
);

CREATE TABLE tbl_calificaciones_finales (
    calificacion_final_id SERIAL PRIMARY KEY,
    nrc CHAR(5) REFERENCES tbl_secciones(nrc),
    estudiante_id CHAR(9) REFERENCES tbl_estudiantes(estudiante_id),
    nota_final DECIMAL(3,2),
    estado_id INTEGER REFERENCES tbl_estados(estado_id)
);

CREATE TABLE tbl_prerrequisitos (
    prerrequisito_id SERIAL PRIMARY KEY,
    materia_id CHAR(4) REFERENCES tbl_materias(materia_id),
    prerrequisito_materia_id CHAR(4) REFERENCES tbl_materias(materia_id)
);

--- Procedimientos almacenados, Trigger y funciones

CREATE SEQUENCE seq_materia_id
START WITH 1
INCREMENT BY 1;

CREATE OR REPLACE FUNCTION generate_materia_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.materia_id := LPAD(nextval('seq_materia_id')::text, 4, '0');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_materias
BEFORE INSERT ON tbl_materias
FOR EACH ROW
EXECUTE FUNCTION generate_materia_id();

CREATE SEQUENCE seq_curso_id
START WITH 1
INCREMENT BY 1;

CREATE OR REPLACE FUNCTION generate_curso_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.curso_id := LPAD(nextval('seq_curso_id')::text, 4, '0');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_cursos
BEFORE INSERT ON tbl_cursos
FOR EACH ROW
EXECUTE FUNCTION generate_curso_id();

CREATE SEQUENCE seq_nrc
START WITH 1
INCREMENT BY 1;

CREATE OR REPLACE FUNCTION generate_nrc()
RETURNS TRIGGER AS $$
BEGIN
    NEW.nrc := LPAD(nextval('seq_nrc')::text, 5, '0');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_secciones
BEFORE INSERT ON tbl_secciones
FOR EACH ROW
EXECUTE FUNCTION generate_nrc();

CREATE SEQUENCE seq_usuario_id
START WITH 1
INCREMENT BY 1;

CREATE OR REPLACE FUNCTION generate_usuario_id()
RETURNS TRIGGER AS $$
BEGIN
    NEW.usuario_id := LPAD(nextval('seq_usuario_id')::text, 9, '0');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_insert_usuarios
BEFORE INSERT ON tbl_usuarios
FOR EACH ROW
EXECUTE FUNCTION generate_usuario_id();

-- Función para generar credenciales con contraseña bcrypt basada en el número de documento
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE OR REPLACE FUNCTION generate_temp_credentials()
RETURNS TRIGGER AS $$
BEGIN
    -- Genera y guarda un hash bcrypt basado en el número de documento como contraseña inicial
    INSERT INTO tbl_credenciales (
        usuario_id,
        username,
        password_hash,
        estado_id,
        ip_ultimo_acceso
    ) VALUES (
        NEW.usuario_id,
        LOWER(NEW.nombres || '.' || NEW.apellidos),  -- Nombre de usuario basado en nombres y apellidos
        crypt(NEW.numero_documento, gen_salt('bf')), -- Hasheado bcrypt del número de documento
        1,                                           -- Estado activo por defecto
        NULL                                         -- IP inicial en NULL
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para insertar credenciales tras cada inserción en tbl_usuarios
CREATE TRIGGER after_usuario_insert
AFTER INSERT ON tbl_usuarios
FOR EACH ROW
EXECUTE FUNCTION generate_temp_credentials();

----------------------------------------------------------
-- Insertar datos de prueba para cada tabla
-- dominio web de la universidad: www.universidad.com
----------------------------------------------------------
-- tbl_paises
INSERT INTO tbl_paises (pais_id, nombre) VALUES
(1, 'Colombia');

-- tbl_departamentos
INSERT INTO tbl_departamentos (departamento_id, pais_id, nombre) VALUES
(1, 1, 'Antioquia'),
(2, 1, 'Atlántico'),
(3, 1, 'Bolívar'),
(4, 1, 'Boyacá'),
(5, 1, 'Caldas'),
(6, 1, 'Caquetá'),
(7, 1, 'Cauca'),
(8, 1, 'Cesar'),
(9, 1, 'Chocó'),
(10, 1, 'Córdoba'),
(11, 1, 'Cundinamarca'),
(12, 1, 'Guainía'),
(13, 1, 'Guaviare'),
(14, 1, 'Huila'),
(15, 1, 'La Guajira'),
(16, 1, 'Magdalena'),
(17, 1, 'Meta'),
(18, 1, 'Nariño'),
(19, 1, 'Norte de Santander'),
(20, 1, 'Putumayo'),
(21, 1, 'Quindío'),
(22, 1, 'Risaralda'),
(23, 1, 'San Andrés y Providencia'),
(24, 1, 'Santander'),
(25, 1, 'Sucre'),
(26, 1, 'Tolima'),
(27, 1, 'Valle del Cauca'),
(28, 1, 'Vaupés'),
(29, 1, 'Vichada');

-- tbl_ciudades
INSERT INTO tbl_ciudades (ciudad_id, departamento_id, nombre, rural) VALUES
(1, 1, 'Medellín', FALSE),
(2, 1, 'Envigado', FALSE),
(3, 1, 'Bello', FALSE),
(4, 1, 'Itagüí', FALSE),
(5, 1, 'Sabaneta', FALSE),
(6, 1, 'Rionegro', FALSE),
(7, 1, 'La Estrella', FALSE),
(8, 1, 'Caldas', FALSE),
(9, 1, 'Copacabana', FALSE),
(10, 1, 'Girardota', FALSE);
-- tbl_roles_usuario
INSERT INTO tbl_roles_usuario (rol_id, nombre, descripcion) VALUES
(1, 'Estudiante', 'Rol para estudiantes'),
(2, 'Profesor', 'Rol para profesores'),
(3, 'Administrativo', 'Rol para administrativos');

-- tbl_grupos_etnicos
INSERT INTO tbl_grupos_etnicos (etnia_id, nombre, descripcion) VALUES
(1, 'Afrodescendiente', 'Personas de ascendencia africana'),
(2, 'Indígena', 'Personas de ascendencia indígena'),
(3, 'Mestizo', 'Personas de ascendencia mixta');

-- tbl_identidades_genero
INSERT INTO tbl_identidades_genero (identidad_id, nombre, descripcion) VALUES
(1, 'Masculino', 'Identidad de género masculina'),
(2, 'Femenino', 'Identidad de género femenina'),
(3, 'No binario', 'Identidad de género no binaria');

-- tbl_estado_civil
INSERT INTO tbl_estado_civil (estado_civil_id, nombre) VALUES
(1, 'Soltero/a'),
(2, 'Casado/a'),
(3, 'Unión libre'),
(4, 'Divorciado/a'),
(5, 'Viudo/a');

-- tbl_estados: Estados de los registros como periodo académico, usuario, etc.
INSERT INTO tbl_estados (estado_id, nombre) VALUES
(1, 'En curso'),
(2, 'Inactivo'),
(3, 'Terminado'),
(4, 'Cancelado');

-- tbl_tipos_documento
INSERT INTO tbl_tipos_documento (tipo_documento_id, nombre) VALUES
(1, 'Cédula de ciudadanía'),
(2, 'Tarjeta de identidad'),
(3, 'Cédula de extranjería'),
(4, 'Pasaporte');

-- tbl_niveles_academicos
INSERT INTO tbl_niveles_academicos (nivel_id, nombre) VALUES
(1, 'Técnico'),
(2, 'Tecnólogo'),
(3, 'Profesional'),
(4, 'Especialización'),
(5, 'Maestría'),
(6, 'Doctorado');

-- tbl_tipos_contrato
INSERT INTO tbl_tipos_contrato (tipo_contrato_id, nombre) VALUES
(1, 'Tiempo completo'),
(2, 'Medio tiempo'),
(3, 'Por horas');

-- tbl_modalidades
INSERT INTO tbl_modalidades (modalidad_id, nombre) VALUES
(1, 'Presencial'),
(2, 'Virtual'),
(3, 'Distancia');

-- tbl_sedes
INSERT INTO tbl_sedes (sede_id, nombre, ubicacion, telefono, email) VALUES
(1, 'Sede Pricipal', 'Carrera 70 # 52-21', '1234567', 'sede.pricipal@universidad.com');

-- tbl_usuarios
INSERT INTO tbl_usuarios (
    usuario_id, tipo_documento, numero_documento, nombres, apellidos, email_institucional,
    email_personal, telefono, telefono_emergencia, direccion, ciudad_origen, genero, etnia,
    fecha_nacimiento, estado_civil, estado, fecha_creacion, foto_perfil, rol_id
) VALUES
-- Administrativos
('000000001', 1, '100001', 'Carlos', 'Pérez', 'carlos.perez@universidad.com',
    'cperez@gmail.com', '3001234567', '3009876543', 'Calle 123', 1, 1, 3, '1980-05-10', 2, 1, CURRENT_DATE, NULL, 3),
('000000002', 1, '100002', 'Ana', 'Gómez', 'ana.gomez@universidad.com',
    'agomez@hotmail.com', '3012345678', '3019876543', 'Carrera 456', 2, 2, 1, '1985-08-20', 1, 1, CURRENT_DATE, NULL, 3),
('000000003', 1, '100003', 'Luis', 'Martínez', 'luis.martinez@universidad.com',
    'lmartinez@yahoo.com', '3023456789', '3029876543', 'Avenida 789', 3, 1, 2, '1978-03-15', 4, 1, CURRENT_DATE, NULL, 3),

-- Profesores
('000000004', 1, '100004', 'María', 'Fernández', 'maria.fernandez@universidad.com',
    'mfernandez@gmail.com', '3034567890', '3039876543', 'Calle 101', 4, 2, 2, '1975-09-12', 1, 1, CURRENT_DATE, NULL, 2),
('000000005', 1, '100005', 'José', 'Rodríguez', 'jose.rodriguez@universidad.com',
    'jrodriguez@hotmail.com', '3045678901', '3049876543', 'Carrera 202', 5, 1, 1, '1982-11-23', 2, 1, CURRENT_DATE, NULL, 2),
('000000006', 1, '100006', 'Lucía', 'Mejía', 'lucia.mejia@universidad.com',
    'lmejia@gmail.com', '3056789012', '3059876543', 'Avenida 303', 6, 3, 3, '1986-07-17', 3, 1, CURRENT_DATE, NULL, 2),

-- Estudiantes
('000000007', 1, '100007', 'Juan', 'García', 'juan.garcia@universidad.com',
    'jgarcia@gmail.com', '3067890123', '3069876543', 'Calle 404', 7, 1, 1, '2001-04-11', 1, 1, CURRENT_DATE, NULL, 1),
('000000008', 1, '100008', 'Sofía', 'López', 'sofia.lopez@universidad.com',
    'slopez@hotmail.com', '3078901234', '3079876543', 'Carrera 505', 8, 2, 2, '2002-12-09', 2, 1, CURRENT_DATE, NULL, 1),
('000000009', 1, '100009', 'Andrés', 'Jiménez', 'andres.jimenez@universidad.com',
    'ajimenez@gmail.com', '3089012345', '3089876543', 'Avenida 606', 9, 3, 3, '2000-05-06', 3, 1, CURRENT_DATE, NULL, 1),
('000000010', 1, '100010', 'Laura', 'Hernández', 'laura.hernandez@universidad.com',
    'lhernandez@yahoo.com', '3090123456', '3099876543', 'Calle 707', 10, 2, 1, '2001-09-30', 1, 1, CURRENT_DATE, NULL, 1),
('000000011', 1, '100011', 'Daniel', 'Ortiz', 'daniel.ortiz@universidad.com',
    'dortiz@gmail.com', '3101234567', '3109876543', 'Carrera 808', 1, 1, 2, '1999-02-18', 4, 1, CURRENT_DATE, NULL, 1),
('000000012', 1, '100012', 'Camila', 'Moreno', 'camila.moreno@universidad.com',
    'cmoreno@hotmail.com', '3112345678', '3119876543', 'Avenida 909', 2, 2, 1, '2003-08-24', 2, 1, CURRENT_DATE, NULL, 1),
('000000013', 1, '100013', 'Sebastián', 'Rojas', 'sebastian.rojas@universidad.com',
    'srojas@gmail.com', '3123456789', '3129876543', 'Calle 1001', 3, 3, 3, '2001-11-29', 3, 1, CURRENT_DATE, NULL, 1),
('000000014', 1, '100014', 'Valentina', 'Vargas', 'valentina.vargas@universidad.com',
    'vvargas@hotmail.com', '3134567890', '3139876543', 'Carrera 1102', 4, 2, 2, '2002-07-21', 1, 1, CURRENT_DATE, NULL, 1),
('000000015', 1, '100015', 'Mateo', 'Cruz', 'mateo.cruz@universidad.com',
    'mcruz@yahoo.com', '3145678901', '3149876543', 'Avenida 1203', 5, 1, 1, '2000-03-13', 2, 1, CURRENT_DATE, NULL, 1),
('000000016', 1, '100016', 'Natalia', 'Castillo', 'natalia.castillo@universidad.com',
    'ncastillo@gmail.com', '3156789012', '3159876543', 'Calle 1304', 6, 3, 3, '2003-10-01', 3, 1, CURRENT_DATE, NULL, 1),
('000000017', 1, '100017', 'Julián', 'Muñoz', 'julian.munoz@universidad.com',
    'jmunoz@hotmail.com', '3167890123', '3169876543', 'Carrera 1405', 7, 1, 2, '2002-06-05', 1, 1, CURRENT_DATE, NULL, 1),
('000000018', 1, '100018', 'Isabella', 'Peña', 'isabella.pena@universidad.com',
    'ipena@gmail.com', '3178901234', '3179876543', 'Avenida 1506', 8, 2, 1, '2001-12-15', 4, 1, CURRENT_DATE, NULL, 1),
('000000019', 1, '100019', 'Tomás', 'Suárez', 'tomas.suarez@universidad.com',
    'tsuarez@yahoo.com', '3189012345', '3189876543', 'Calle 1607', 9, 1, 3, '2000-07-18', 2, 1, CURRENT_DATE, NULL, 1);

-- tbl_cargos_administrativos
INSERT INTO tbl_cargos_administrativos (cargo_id, nombre, descripcion, nivel_jerarquico) VALUES
(1, 'Rector', 'Máxima autoridad de la universidad', 1),
(2, 'Vicerrector', 'Segunda autoridad de la universidad', 2),
(3, 'Decano', 'Jefe de una facultad', 3),
(4, 'Director de programa', 'Jefe de un programa académico', 4),
(5, 'Coordinador académico', 'Responsable de la coordinación académica', 5),
(6, 'Secretario académico', 'Encargado de la secretaría académica', 6),
(7, 'Jefe de departamento', 'Jefe de un departamento académico', 7),
(8, 'Coordinador de investigación', 'Responsable de la coordinación de investigación', 8),
(9, 'Coordinador de extensión', 'Responsable de la coordinación de extensión', 9),
(10, 'Coordinador de bienestar universitario', 'Responsable de la coordinación de bienestar universitario', 10);

-- tbl_niveles_acceso
INSERT INTO tbl_niveles_acceso (nivel_acceso_id, nombre, descripcion, permisos) VALUES
(1, 'Básico', 'Acceso básico a la plataforma', 'Leer, escribir, actualizar'),
(2, 'Avanzado', 'Acceso avanzado a la plataforma', 'Leer, escribir, actualizar, eliminar'),
(3, 'Administrador', 'Acceso total a la plataforma', 'Leer, escribir, actualizar, eliminar, administrar');

-- tbl_areas_administrativas
INSERT INTO tbl_areas_administrativas (area_id, nombre, descripcion, sede_id) VALUES
(1, 'Académica', 'Área académica de la universidad', 1),
(2, 'Investigación', 'Área de investigación de la universidad', 1),
(3, 'Extensión', 'Área de extensión de la universidad', 1),
(4, 'Bienestar universitario', 'Área de bienestar universitario de la universidad', 1);

-- tbl_administrativos
INSERT INTO tbl_administrativos (administrativo_id, cargo_id, area_id, nivel_acceso_id, fecha_vinculacion) VALUES
('000000001', 1, 1, 3, '2024-01-01'),
('000000002', 2, 1, 2, '2024-01-01'),
('000000003', 3, 1, 1, '2024-01-01'),
('000000004', 4, 1, 1, '2024-01-01');


-- tbl_escuelas
INSERT INTO tbl_escuelas (escuela_id, nombre, sede_id, area_conocimiento, decano_id, estado_id) VALUES
(1, 'Escuela de Ingeniería', 1, 'Ingeniería', '000000001', 1);

-- tbl_facultades
INSERT INTO tbl_facultades (facultad_id, nombre, escuela_id, director_id, fecha_creacion, estado_id) VALUES
(1, 'Facultad de Ingeniería de Sistemas', 1, '000000004', '2024-01-01', 1);

-- tbl_estados_estudiante
INSERT INTO tbl_estados_estudiante (estado_id, nombre) VALUES
(1, 'Activo'),
(2, 'Inactivo'),
(3, 'Suspendido'),
(4, 'Retirado');

-- tbl_tipos_admision
INSERT INTO tbl_tipos_admision (tipo_admision_id, nombre) VALUES
(1, 'Admisión regular'),
(2, 'Admisión especial'),
(3, 'Admisión por transferencia');

-- tbl_periodos_academicos
INSERT INTO tbl_periodos_academicos (periodo_id, anio, semestre, fecha_inicio, fecha_fin, estado_id) VALUES
(1, 2024, '1', '2024-01-15', '2024-05-30', 3),
(2, 2024, '2', '2024-06-15', '2024-10-30', 1);

-- tbl_estudiantes
INSERT INTO tbl_estudiantes (estudiante_id, estado_id, condicion_especial, tipo_admision_id, fecha_ingreso, cohorte_id) VALUES
('000000007', 1, NULL, 1, '2024-01-15', 1),
('000000008', 1, NULL, 1, '2024-01-15', 1),
('000000009', 1, NULL, 1, '2024-01-15', 1),
('000000010', 1, NULL, 1, '2024-01-15', 1),
('000000011', 1, NULL, 1, '2024-01-15', 1),
('000000012', 1, NULL, 1, '2024-01-15', 1),
('000000013', 1, NULL, 1, '2024-01-15', 1),
('000000014', 1, NULL, 1, '2024-01-15', 1),
('000000015', 1, NULL, 1, '2024-01-15', 1),
('000000016', 1, NULL, 1, '2024-01-15', 1),
('000000017', 1, NULL, 1, '2024-01-15', 1),
('000000018', 1, NULL, 1, '2024-01-15', 1),
('000000019', 1, NULL, 1, '2024-01-15', 1);

-- tbl_profesores
INSERT INTO tbl_profesores (profesor_id, nivel_academico_id, tipo_contrato_id, fecha_vinculacion, especialidad) VALUES
('000000004', 3, 1, '2010-05-30', 'Ingeniería de software'),
('000000005', 3, 1, '2015-03-20', 'Redes de computadores'),
('000000006', 5, 2, '2018-07-10', 'Inteligencia artificial');

-- tbl_programas_academicos
INSERT INTO tbl_programas_academicos (programa_id, nombre, facultad_id, nivel_id, duracion_semestres, director_id, estado_id, modalidad_id) VALUES
(1, 'Ingeniería de Sistemas', 1, 3, 10, '000000004', 1, 1);

-- tbl_materias: areas de conocimiento amplias
-- tbl_materias
INSERT INTO tbl_materias (materia_id, nombre, nivel_academico_id, descripcion) VALUES
('0001', 'Ciencias Basicas', 3, 'Ciencias básicas para ingeniería'),
('0002', 'Ingeniería de Software', 3, 'Desarrollo de software'),
('0003', 'Redes de Computadores', 3, 'Diseño y administración de redes'),
('0004', 'Inteligencia Artificial', 5, 'Técnicas de inteligencia artificial');

-- tbl_cursos
INSERT INTO tbl_cursos (curso_id, materia_id, titulo, creditos, intensidad_horaria, contenido_tematico, estado_id) VALUES
('0001', '0001', 'Matemáticas', 3, 64, 'Contenido temático de matemáticas', 1),
('0002', '0002', 'Desarrollo de Software I', 4, 96, 'Contenido temático de desarrollo de software I', 1),
('0003', '0003', 'Redes de Computadores I', 4, 96, 'Contenido temático de redes de computadores I', 1),
('0004', '0004', 'Inteligencia Artificial I', 4, 96, 'Contenido temático de inteligencia artificial I', 1);

INSERT INTO tbl_secciones (nrc, curso_id, periodo_id, profesor_id, sede_id, cupo_maximo, horario, aula, modalidad_id) VALUES
('00001', '0001', 1, '000000004', 1, 30, '{"dia": "Lunes", "inicio": "18:00", "fin": "20:00"}, {"dia": "Miércoles", "inicio": "18:00", "fin": "20:00"}', 'Aula 101', 1),
('00002', '0002', 1, '000000004', 1, 30, '{"dia": "Martes", "inicio": "18:00", "fin": "20:00"}, {"dia": "Jueves", "inicio": "18:00", "fin": "20:00"}', 'Aula 102', 1),
('00003', '0003', 1, '000000005', 1, 30, '{"dia": "Lunes", "inicio": "18:00", "fin": "20:00"}, {"dia": "Miércoles", "inicio": "18:00", "fin": "20:00"}', 'Aula 103', 1),
('00004', '0004', 1, '000000006', 1, 30, '{"dia": "Martes", "inicio": "18:00", "fin": "20:00"}, {"dia": "Jueves", "inicio": "18:00", "fin": "20:00"}', 'Aula 104', 1);

-- tbl_inscripciones_curso
INSERT INTO tbl_inscripciones_curso (inscripcion_id, estudiante_id, nrc, fecha_inscripcion, estado_id) VALUES
(1, '000000007', '00001', '2024-01-10', 1),
(2, '000000008', '00001', '2024-01-10', 1),
(3, '000000009', '00001', '2024-01-10', 1),
(4, '000000010', '00001', '2024-01-10', 1),
(5, '000000011', '00001', '2024-01-10', 1),
(6, '000000012', '00001', '2024-01-10', 1),
(7, '000000013', '00001', '2024-01-10', 1),
(8, '000000014', '00001', '2024-01-10', 1),
(9, '000000015', '00001', '2024-01-10', 1),
(10, '000000016', '00001', '2024-01-10', 1),
(11, '000000017', '00001', '2024-01-10', 1),
(12, '000000018', '00001', '2024-01-10', 1),
(13, '000000019', '00001', '2024-01-10', 1),
(14, '000000007', '00002', '2024-01-10', 1),
(15, '000000008', '00002', '2024-01-10', 1),
(16, '000000009', '00002', '2024-01-10', 1),
(17, '000000010', '00002', '2024-01-10', 1),
(18, '000000011', '00002', '2024-01-10', 1),
(19, '000000012', '00002', '2024-01-10', 1),
(20, '000000013', '00002', '2024-01-10', 1),
(21, '000000014', '00002', '2024-01-10', 1),
(22, '000000015', '00002', '2024-01-10', 1),
(23, '000000016', '00002', '2024-01-10', 1),
(24, '000000017', '00002', '2024-01-10', 1),
(25, '000000018', '00002', '2024-01-10', 1),
(26, '000000019', '00002', '2024-01-10', 1),
(27, '000000007', '00003', '2024-01-10', 1),
(28, '000000008', '00003', '2024-01-10', 1),
(29, '000000009', '00003', '2024-01-10', 1),
(30, '000000010', '00003', '2024-01-10', 1),
(31, '000000011', '00003', '2024-01-10', 1),
(32, '000000012', '00003', '2024-01-10', 1),
(33, '000000013', '00003', '2024-01-10', 1),
(34, '000000014', '00003', '2024-01-10', 1),
(35, '000000015', '00003', '2024-01-10', 1),
(36, '000000016', '00003', '2024-01-10', 1),
(37, '000000017', '00003', '2024-01-10', 1),
(38, '000000018', '00003', '2024-01-10', 1),
(39, '000000019', '00003', '2024-01-10', 1),
(40, '000000007', '00004', '2024-01-10', 1),
(41, '000000008', '00004', '2024-01-10', 1),
(42, '000000009', '00004', '2024-01-10', 1),
(43, '000000010', '00004', '2024-01-10', 1),
(44, '000000011', '00004', '2024-01-10', 1),
(45, '000000012', '00004', '2024-01-10', 1),
(46, '000000013', '00004', '2024-01-10', 1),
(47, '000000014', '00004', '2024-01-10', 1),
(48, '000000015', '00004', '2024-01-10', 1),
(49, '000000016', '00004', '2024-01-10', 1),
(50, '000000017', '00004', '2024-01-10', 1),
(51, '000000018', '00004', '2024-01-10', 1),
(52, '000000019', '00004', '2024-01-10', 1);

-- tbl_programas_estudiantes
INSERT INTO tbl_programas_estudiantes (programa_estudiante_id, estudiante_id, programa_id, sede_id, periodo_ingreso_id, estado_id) VALUES
(1, '000000007', 1, 1, 1, 1),
(2, '000000008', 1, 1, 1, 1),
(3, '000000009', 1, 1, 1, 1),
(4, '000000010', 1, 1, 1, 1),
(5, '000000011', 1, 1, 1, 1),
(6, '000000012', 1, 1, 1, 1),
(7, '000000013', 1, 1, 1, 1),
(8, '000000014', 1, 1, 1, 1),
(9, '000000015', 1, 1, 1, 1),
(10, '000000016', 1, 1, 1, 1),
(11, '000000017', 1, 1, 1, 1),
(12, '000000018', 1, 1, 1, 1),
(13, '000000019', 1, 1, 1, 1);

-- tbl_detalles_calificaciones
INSERT INTO tbl_detalles_calificaciones (detalle_calificacion_id, nrc, actividad, porcentaje) VALUES
(1, '00001', 'Parcial 1', 0.3),
(2, '00001', 'Parcial 2', 0.3),
(3, '00001', 'Trabajo final', 0.4),
(4, '00002', 'Parcial 1', 0.3),
(5, '00002', 'Parcial 2', 0.3),
(6, '00002', 'Trabajo final', 0.4),
(7, '00003', 'Parcial 1', 0.3),
(8, '00003', 'Parcial 2', 0.3),
(9, '00003', 'Trabajo final', 0.4),
(10, '00004', 'Parcial 1', 0.3),
(11, '00004', 'Parcial 2', 0.3),
(12, '00004', 'Trabajo final', 0.4);

-- tbl_prerrequisitos
INSERT INTO tbl_prerrequisitos (prerrequisito_id, materia_id, prerrequisito_materia_id) VALUES
(1, '0002', '0001'),
(2, '0003', '0001'),
(3, '0004', '0001');
