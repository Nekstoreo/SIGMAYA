# Esquema de Base de Datos SIGMAYA

## 1. Estructura Organizacional

### Tabla: tbl_sedes
- **sede_id** (PK, BIGINT): Identificador único de la sede
- **nombre** (VARCHAR(100)): Nombre oficial de la sede
- **ubicacion** (VARCHAR(200)): Dirección física completa
- **director_id** (FK -> tbl_administrativos): Referencia al director actual
- **telefono** (VARCHAR(20)): Teléfono principal de contacto
- **email** (VARCHAR(100)): Correo electrónico institucional de la sede

Descripción: Representa las diferentes sedes físicas de la universidad. Cada sede funciona como una unidad administrativa independiente pero coordinada.

### Tabla: tbl_escuelas
- **escuela_id** (PK, BIGINT): Identificador único de la escuela
- **nombre** (VARCHAR(100)): Nombre oficial de la escuela
- **sede_id** (FK -> tbl_sedes): Sede a la que pertenece
- **area_conocimiento** (VARCHAR(50)): Área principal de conocimiento
- **decano_id** (FK -> tbl_administrativos): Decano actual
- **estado_id** (FK -> tbl_estados): Estado de la escuela

Descripción: Agrupa facultades relacionadas bajo un mismo campo de conocimiento.

### Tabla: tbl_facultades
- **facultad_id** (PK, BIGINT): Identificador único de la facultad
- **nombre** (VARCHAR(100)): Nombre oficial de la facultad
- **escuela_id** (FK -> tbl_escuelas): Escuela a la que pertenece
- **director_id** (FK -> tbl_administrativos): Director actual
- **fecha_creacion** (DATE): Fecha de establecimiento
- **estado_id** (FK -> tbl_estados): Estado de la facultad

Descripción: Unidad académica que administra programas específicos dentro de un área de conocimiento.

## 2. Gestión de Usuarios

### Tabla: tbl_usuarios
- **usuario_id** (PK, BIGINT): Identificador único del usuario
- **tipo_documento** (FK -> tbl_tipos_documento): Tipo de documento de identidad
- **numero_documento** (VARCHAR(20)): Número de documento de identidad
- **nombres** (VARCHAR(100)): Nombres completos
- **apellidos** (VARCHAR(100)): Apellidos completos
- **email_institucional** (VARCHAR(100)): Correo institucional
- **email_personal** (VARCHAR(100)): Correo personal
- **telefono** (VARCHAR(20)): Teléfono principal
- **telefono_emergencia** (VARCHAR(20)): Teléfono de emergencia
- **direccion** (VARCHAR(200)): Dirección de residencia
- **ciudad_origen** (FK -> tbl_ciudades): Ciudad de origen
- **genero** (FK -> tbl_identidades_genero): Identidad de género
- **etnia** (FK -> tbl_grupos_etnicos): Grupo étnico
- **fecha_nacimiento** (DATE): Fecha de nacimiento
- **estado_civil_id** (FK -> tbl_estado_civil): Estado civil
- **estado_id** (FK -> tbl_estados): Estado del usuario
- **fecha_creacion** (DATE): Fecha de creación del usuario
- **foto_perfil** (VARCHAR): Ruta de la imagen de perfil

Descripción: Almacena la información básica común para todos los usuarios del sistema.

### Tabla: tbl_tipos_documento
- **tipo_documento_id** (PK, BIGINT): Identificador único del tipo de documento
- **nombre** (VARCHAR(50)): Nombre del tipo de documento

Descripción: Catálogo de tipos de documentos de identidad.

### Tabla: tbl_paises
- **pais_id** (PK, BIGINT): Identificador único del país
- **nombre** (VARCHAR(100)): Nombre oficial del país

Descripción: Catálogo de países para información geográfica.

### Tabla: tbl_regiones
- **region_id** (PK, BIGINT): Identificador único de la región
- **pais_id** (FK -> tbl_paises): País al que pertenece
- **nombre** (VARCHAR(100)): Nombre oficial de la región

Descripción: División administrativa de un país en regiones.

### Tabla: tbl_ciudades
- **ciudad_id** (PK, BIGINT): Identificador único de la ciudad
- **region_id** (FK -> tbl_regiones): Región a la que pertenece
- **nombre** (VARCHAR(100)): Nombre oficial de la ciudad
- **rural** (BOOLEAN): Indicador de zona rural

Descripción: Información detallada de ciudades y zonas urbanas.

### Tabla: tbl_grupos_etnicos 
- **etnia_id** (PK, BIGINT): Identificador único del grupo étnico
- **nombre** (VARCHAR(100)): Nombre oficial del grupo
- **descripcion** (TEXT): Descripción detallada

Descripción: Catálogo de grupos étnicos para información demográfica.

### Tabla: tbl_identidades_genero
- **identidad_id** (PK, BIGINT): Identificador única de la identidad de género
- **nombre** (VARCHAR(100)): Nombre oficial de la identidad
- **descripcion** (TEXT): Descripción detallada

Descripción: Catálogo de identidades de género para información demográfica.

### Tabla: tbl_estado_civil
- **estado_civil_id** (PK, BIGINT): Identificador único del estado civil
- **nombre** (VARCHAR(50)): Nombre del estado civil

Descripción: Catálogo de estados civiles para información demográfica.

### Tabla: tbl_estados
- **estado_id** (PK, BIGINT): Identificador único del estado
- **nombre** (VARCHAR(50)): Nombre del estado

Descripción: Catálogo de estados para información de usuarios y entidades.

### Tabla: tbl_credenciales
- **credencial_id** (PK, BIGINT): Identificador único de la credencial
- **usuario_id** (FK -> tbl_usuarios): Usuario asociado
- **username** (VARCHAR(50)): Nombre de usuario
- **password_hash** (VARCHAR(100)): Hash de la contraseña
- **fecha_creacion** (DATE): Fecha de creación
- **fecha_expiracion_password** (DATE): Fecha de expiración de la contraseña
- **estado_id** (FK -> tbl_estados): Estado de la credencial
- **intentos_fallidos** (INT): Contador de intentos fallidos
- **fecha_ultimo_acceso** (DATE): Fecha del último acceso
- **ip_ultimo_acceso** (VARCHAR(20)): Dirección IP del último acceso
- **bloqueado** (BOOLEAN): Indicador de cuenta bloqueada

Descripción: Almacena las credenciales de acceso para los usuarios del sistema.

## 2.1 Estudiantes

### Tabla: tbl_estudiantes
- **estudiante_id** (PK, FK -> tbl_usuarios): ID del usuario como estudiante
- **estado_id** (FK -> tbl_estados_estudiante): Estado académico actual
- **condicion_especial** (VARCHAR(100)): Condiciones especiales o discapacidades
- **tipo_admision_id** (FK -> tbl_tipos_admision): Tipo de admisión ej. 'NUEVO', 'TRANSFERENCIA'
- **fecha_ingreso** (DATE): Fecha de primer ingreso
- **cohorte_id** (FK -> tbl_periodos_academicos): Cohorte de ingreso
- **promedio_acumulado** (DECIMAL(3,2)): Promedio de calificaciones del estudiante

Descripción: Información específica para usuarios con rol de estudiante.

### Tabla: tbl_estados_estudiante
- **estado_id** (PK, BIGINT): Identificador único del estado académico
- **nombre** (VARCHAR(50)): Nombre del estado académico

Descripción: Catálogo de estados académicos para estudiantes.

### Tabla: tbl_tipos_admision
- **tipo_admision_id** (PK, BIGINT): Identificador único del tipo de admisión
- **nombre** (VARCHAR(50)): Nombre del tipo de admisión

Descripción: Catálogo de tipos de admisión para estudiantes.

## 2.2 Profesores

### Tabla: tbl_profesores
- **profesor_id** (PK, FK -> tbl_usuarios): ID del usuario como profesor
- **nivel_academico_id** (FK -> tbl_niveles_academicos): Nivel académico
- **tipo_contrato_id** (FK -> tbl_tipos_contrato): Tipo de contrato
- **fecha_vinculacion** (DATE): Fecha de inicio en la institución
- **especialidad** (VARCHAR): Área de especialización del profesor

Descripción: Información específica para usuarios con rol de profesor.

### Tabla: tbl_niveles_academicos
- **nivel_id** (PK, BIGINT): Identificador único del nivel académico
- **nombre** (VARCHAR(50)): Nombre del nivel académico

Descripción: Catálogo de niveles académicos para profesores.

### Tabla: tbl_tipos_contrato
- **tipo_contrato_id** (PK, BIGINT): Identificador único del tipo de contrato
- **nombre** (VARCHAR(50)): Nombre del tipo de contrato

Descripción: Catálogo de tipos de contrato para profesores.

## 2.3 Administrativos

### Tabla: tbl_administrativos
- **administrativo_id** (PK, FK -> tbl_usuarios): ID del usuario como administrativo
- **cargo_id** (FK -> tbl_cargos_administrativos): Cargo administrativo
- **departamento_id** (FK -> tbl_departamentos): Departamento al que pertenece
- **nivel_acceso_id** (FK -> tbl_niveles_acceso): Nivel de acceso
- **fecha_vinculacion** (DATE): Fecha de inicio en la institución

Descripción: Información específica para usuarios con rol administrativo.

### Tabla: tbl_cargos_administrativos
- **cargo_id** (PK, BIGINT): Identificador único del cargo administrativo
- **nombre** (VARCHAR(100)): Nombre del cargo
- **descripcion** (TEXT): Descripción detallada
- **nivel_jerarquico** (INT): Nivel jerárquico

Descripción: Catálogo de cargos administrativos.

### Tabla: tbl_departamentos
- **departamento_id** (PK, BIGINT): Identificador único del departamento
- **nombre** (VARCHAR(100)): Nombre del departamento
- **descripcion** (TEXT): Descripción detallada
- **sede_id** (FK -> tbl_sedes): Sede a la que pertenece

Descripción: División administrativa de la universidad en departamentos.

### Tabla: tbl_niveles_acceso
- **nivel_acceso_id** (PK, BIGINT): Identificador único del nivel de acceso
- **nombre** (VARCHAR(50)): Nombre del nivel de acceso
- **descripcion** (TEXT): Descripción detallada
- **permisos** (TEXT): Lista de permisos asociados

Descripción: Catálogo de niveles de acceso para usuarios administrativos.

## 3. Gestión Académica

### Tabla: tbl_niveles_academicos
- **nivel_id** (PK, BIGINT): Identificador único del nivel académico
- **nombre** (VARCHAR(50)): Nombre del nivel académico
- **descripcion** (TEXT): Descripción detallada

Descripción: Catálogo de niveles académicos para programas y cursos.

### Tabla: tbl_modalidades
- **modalidad_id** (PK, BIGINT): Identificador único de la modalidad
- **nombre** (VARCHAR(50)): Nombre de la modalidad

Descripción: Catálogo de modalidades de programas académicos.

### Tabla: tbl_programas_academicos
- **programa_id** (PK, BIGINT): Identificador único del programa
- **nombre** (VARCHAR(100)): Nombre oficial del programa
- **facultad_id** (FK -> tbl_facultades): Facultad que lo administra
- **nivel** (FK -> tbl_niveles_academicos): Nivel académico
- **duracion_semestres** (INT): Duración estándar en semestres
- **director_id** (FK -> tbl_profesores): Director del programa
- **estado_id** (FK -> tbl_estados): Estado del programa
- **modalidad** (FK -> tbl_modalidades): Modalidad del programa

Descripción: Define los programas académicos ofrecidos, incluyendo información general y administrativa.

### Tabla: tbl_materias
- **materia_id** (PK, CHAR(4)): Identificador único de la materia
- **nombre** (VARCHAR(100)): Nombre oficial de la materia
- **tipo_programa** (VARCHAR(50)): Tipo de programa académico
- **descripcion** (TEXT): Descripción general del contenido

Descripción: Define las materias base de los programas académicos.

### Tabla: tbl_cursos
- **curso_id** (PK, CHAR(4)): Identificador único del curso
- **materia_id** (FK -> tbl_materias): Materia base del curso
- **titulo** (VARCHAR(100)): Título específico del curso
- **creditos** (INT): Créditos asignados
- **intensidad_horaria** (INT): Horas totales del curso
- **contenido_tematico** (TEXT): Contenido detallado (JSON)
- **estado_id** (FK -> tbl_estados): Estado del curso

Descripción: Define los cursos específicos que se ofrecen dentro de una materia.

### Tabla: tbl_prerrequisitos
- **prerrequisito_id** (PK, BIGINT): Identificador único del prerrequisito
- **materia_id** (FK -> tbl_materias): Materia principal
- **prerrequisito_materia_id** (FK -> tbl_materias): Materia prerrequisito

Descripción: Define los prerrequisitos necesarios para cursar una materia específica.

### Tabla: tbl_secciones
- **nrc** (PK, CHAR(5)): Número de referencia del curso
- **curso_id** (FK -> tbl_cursos): Curso al que pertenece
- **periodo_id** (FK -> tbl_periodos_academicos): Período académico
- **profesor_id** (FK -> tbl_profesores): Profesor asignado
- **sede_id** (FK -> tbl_sedes): Sede donde se imparte
- **cupo_maximo** (INT): Capacidad máxima de estudiantes
- **horario** (TEXT): Horario detallado (JSON)
- **aula** (VARCHAR(50)): Ubicación física de la clase
- **modalidad** (FK -> tbl_modalidades): Modalidad de la sección

Descripción: Define las secciones específicas de un curso en un período académico, incluyendo horarios y ubicaciones.

## 4. Gestión de Períodos e Inscripciones

### Tabla: tbl_periodos_academicos
- **periodo_id** (PK, BIGINT): Identificador único del período
- **anio** (INT): Año académico
- **semestre** (VARCHAR(50)): Semestre académico
- **fecha_inicio** (DATE): Fecha de inicio del período
- **fecha_fin** (DATE): Fecha de finalización
- **estado_id** (FK -> tbl_estados): Estado del período

Descripción: Define los períodos académicos y sus características.

### Tabla: tbl_inscripciones_curso
- **inscripcion_id** (PK, BIGINT): Identificador único de la inscripción
- **estudiante_id** (FK -> tbl_estudiantes): Estudiante inscrito
- **nrc** (FK -> tbl_secciones): Sección del curso
- **fecha_inscripcion** (DATE): Fecha de inscripción
- **estado_id** (FK -> tbl_estados): Estado de la inscripción
- **nota_final** (DECIMAL(3,2)): Nota final del estudiante en la inscripción

Descripción: Registro de inscripciones de estudiantes en cursos específicos.

### Tabla: tbl_programas_estudiantes
- **programa_estudiante_id** (PK, BIGINT): Identificador único de la relación
- **estudiante_id** (FK -> tbl_estudiantes): Estudiante
- **programa_id** (FK -> tbl_programas_academicos): Programa académico
- **sede_id** (FK -> tbl_sedes): Sede donde cursa
- **periodo_ingreso_id** (FK -> tbl_periodos_academicos): Período de ingreso
- **creditos_aprobados** (INT): Total de créditos aprobados
- **estado_id** (FK -> tbl_estados): Estado de la relación
- **fecha_egreso** (DATE): Fecha de egreso del estudiante

Descripción: Relación entre estudiantes y programas académicos.

## 4.1 Gestión de Notas por Curso y Profesor

### Tabla: tbl_detalles_calificaciones
- **detalle_calificacion_id** (PK, BIGINT): Identificador único del detalle de calificación
- **nrc** (FK -> tbl_secciones): Número de referencia del curso
- **actividad** (VARCHAR(100)): Nombre de la actividad
- **porcentaje** (DECIMAL(3, 2)): Porcentaje de la actividad en la nota final

Descripción: Detalles de las actividades de evaluación de un curso.

### Tabla: tbl_calificaciones_parciales
- **calificacion_parcial_id** (PK, BIGINT): Identificador único de la calificación parcial
- **estudiante_id** (FK -> tbl_estudiantes): Estudiante evaluado
- **nota** (DECIMAL(3, 2)): Nota obtenida
- **fecha_calificacion** (DATE): Fecha de registro de la calificación
- **detalle_calificacion_id** (FK -> tbl_detalles_calificaciones): Detalle de calificación
- **estado_id** (FK -> tbl_estados): Estado de la calificación
- **observaciones** (TEXT): Observaciones adicionales

### Tabla: tbl_calificaciones_finales
- **calificacion_final_id** (PK, BIGINT): Identificador único de la calificación final
- **nrc** (FK -> tbl_secciones): Número de referencia del curso
- **estudiante_id** (FK -> tbl_estudiantes): Estudiante evaluado
- **nota_final** (DECIMAL(3, 2)): Nota final del estudiante
- **estado_id** (FK -> tbl_estados): Estado de la calificación

Descripción: Almacena las cal ificaciones finales de los estudiantes en los cursos que han tomado.

## 5. Auditoría

### Tabla: tbl_auditoria_usuarios
- **auditoria_id** (PK, BIGINT): Identificador único de la auditoría
- **usuario_id** (FK -> tbl_usuarios): Usuario afectado
- **accion** (VARCHAR(50)): Acción realizada
- **fecha_accion** (DATE): Fecha de la acción
- **descripcion** (TEXT): Descripción detallada de la acción

Descripción: Registro de acciones realizadas sobre los usuarios del sistema.

### Tabla: tbl_auditoria_inscripciones
- **auditoria_id** (PK, BIGINT): Identificador único de la auditoría
- **inscripcion_id** (FK -> tbl_inscripciones_curso): Inscripción afectada
- **accion** (VARCHAR(50)): Acción realizada
- **fecha_accion** (DATE): Fecha de la acción
- **descripcion** (TEXT): Descripción detallada de la acción

Descripción: Registro de acciones realizadas sobre las inscripciones de cursos.

## 6. Índices

### Índices Únicos

#### tbl_sedes
- idx_nombre (nombre)

#### tbl_escuelas
- idx_nombre (nombre)
- idx_sede_id (sede_id)

#### tbl_facultades
- idx_nombre (nombre)
- idx_escuela_id (escuela_id)

#### tbl_usuarios
- idx_email_institucional (email_institucional)
- idx_numero_documento (numero_documento)

#### tbl_tipos_documento
- idx_nombre (nombre)

#### tbl_paises
- idx_nombre (nombre)

#### tbl_regiones
- idx_nombre (nombre)
- idx_pais_id (pais_id)

#### tbl_ciudades
- idx_nombre (nombre)
- idx_region_id (region_id)

#### tbl_grupos_etnicos
- idx_nombre (nombre)

#### tbl_identidades_genero
- idx_nombre (nombre)

#### tbl_estado_civil
- idx_nombre (nombre)

#### tbl_estados
- idx_nombre (nombre)

#### tbl_credenciales
- idx_usuario_id (usuario_id)
- idx_username (username)

#### tbl_estudiantes
- idx_estado_id (estado_id)
- idx_cohorte_id (cohorte_id)

#### tbl_estados_estudiante
- idx_nombre (nombre)

#### tbl_tipos_admision
- idx_nombre (nombre)

#### tbl_profesores
- idx_nivel_academico_id (nivel_academico_id)
- idx_tipo_contrato_id (tipo_contrato_id)

#### tbl_niveles_academicos
- idx_nombre (nombre)

#### tbl_tipos_contrato
- idx_nombre (nombre)

#### tbl_administrativos
- idx_cargo_id (cargo_id)
- idx_departamento_id (departamento_id)

#### tbl_cargos_administrativos
- idx_nombre (nombre)

#### tbl_departamentos
- idx_nombre (nombre)
- idx_sede_id (sede_id)

#### tbl_niveles_acceso
- idx_nombre (nombre)

#### tbl_modalidades
- idx_nombre (nombre)

#### tbl_programas_academicos
- idx_nombre (nombre)
- idx_facultad_id (facultad_id)
- idx_estado_id (estado_id)

#### tbl_materias
- idx_nombre (nombre)

#### tbl_cursos
- idx_materia_id (materia_id)
- idx_estado_id (estado_id)

#### tbl_prerrequisitos
- idx_materia_id (materia_id)
- idx_prerrequisito_materia_id (prerrequisito_materia_id)

#### tbl_secciones
- idx_curso_id (curso_id)
- idx_periodo_id (periodo_id)
- idx_profesor_id (profesor_id)
- idx_sede_id (sede_id)

#### tbl_periodos_academicos
- idx_anio (anio)
- idx_semestre (semestre)
- idx_estado_id (estado_id)

#### tbl_inscripciones_curso
- idx_estudiante_id (estudiante_id)
- idx_nrc (nrc)
- idx_estado_id (estado_id)

#### tbl_programas_estudiantes
- idx_estudiante_id (estudiante_id)
- idx_programa_id (programa_id)
- idx_sede_id (sede_id)
- idx_periodo_ingreso_id (periodo_ingreso_id)
- idx_estado_id (estado_id)

#### tbl_detalles_calificaciones
- idx_nrc (nrc)

#### tbl_calificaciones_parciales
- idx_estudiante_id (estudiante_id)
- idx_detalle_calificacion_id (detalle_calificacion_id)
- idx_estado_id (estado_id)

#### tbl_calificaciones_finales
- idx_nrc (nrc)
- idx_estudiante_id (estudiante_id)
- idx_estado_id (estado_id)

#### tbl_auditoria_usuarios
- idx_usuario_id (usuario_id)
- idx_fecha_accion (fecha_accion)

#### tbl_auditoria_inscripciones
- idx_inscripcion_id (inscripcion_id)
- idx_fecha_accion (fecha_accion)

# Restricciones y Reglas de Negocio

1. Inscripciones
   - Un estudiante no puede inscribir dos secciones del mismo curso en un período
   - Los créditos totales inscritos no deben exceder el máximo permitido
- Las inscripciones solo son permitidas durante los períodos establecidos en el calendario académico
   - Debe validarse que el estudiante cumpla con los prerrequisitos y correquisitos del curso
   - No se permite inscribir cursos de más de dos niveles diferentes del programa
   - La inscripción en cursos de último nivel requiere haber completado un porcentaje mínimo de créditos del programa

1. Gestión de Notas
   - Las notas finales deben estar en el rango de 0.0 a 5.0
   - La nota mínima de aprobación es 3.0 para pregrado, 3.5 para posgrado, 4.0 para maestría y doctorado
   - Las modificaciones de notas después del cierre del período requieren autorización especial
   - Se debe mantener un registro histórico de cambios de notas

2. Asignación de Profesores
   - Un profesor no puede tener más de 4 secciones del mismo curso en un período
   - La carga académica total debe respetar el tipo de contrato del profesor
   - Los profesores deben tener las cualificaciones mínimas requeridas para el nivel del curso
   - Se debe mantener un balance en la distribución de carga académica

3. Gestión de Programas
   - Los cambios en la estructura curricular no pueden afectar a estudiantes en curso
   - La actualización de prerrequisitos requiere un período de transición
   - El total de créditos electivos no puede superar el porcentaje establecido del programa
   - Los programas deben mantener el mínimo de créditos requeridos por el Ministerio de Educación

4. Gestión de Períodos Académicos
   - Solo puede haber un período regular activo por sede
   - Los períodos intersemestrales tienen restricciones especiales de carga académica
   - El cierre de período requiere la publicación de todas las notas
   - La apertura de un nuevo período requiere el cierre formal del anterior

5. Control de Cupos
   - Las secciones no pueden exceder su cupo máximo establecido
   - Se debe mantener un mínimo de estudiantes para la apertura de una sección
   - Los cupos para estudiantes de intercambio o convenios tienen prioridades especiales
   - Se pueden establecer cupos reservados para poblaciones específicas

6. Restricciones de Horarios
   - No se permiten cruces de horario para un mismo estudiante
   - Los profesores no pueden tener secciones con horarios solapados
   - Debe existir un tiempo mínimo entre clases para cambios de aula
   - Los horarios deben respetar las franjas establecidas por la universidad

7. Gestión Administrativa
   - Los cambios en información sensible requieren aprobación multinivel
   - La asignación de roles administrativos debe seguir la jerarquía establecida
   - Las modificaciones en la estructura organizacional requieren documentación formal
   - Los cambios en sedes y facultades requieren aprobación del consejo superior

8. Control de Estados
   - La inactivación de usuarios debe mantener el historial académico
   - El cambio de estado de programas debe considerar estudiantes activos
   - La suspensión de estudiantes debe seguir el reglamento estudiantil
   - Los cambios de estado en secciones deben notificar a los afectados

9.  Gestión de Documentación
    - Todo programa debe mantener documentación actualizada del registro calificado
    - Los syllabus de los cursos deben actualizarse cada período
    - Se debe mantener registro de las homologaciones y convalidaciones
    - La documentación de grado debe estar completa antes de la ceremonia

10. Control de Calidad Académica
    - Los programas deben mantener indicadores mínimos de retención
    - Se debe monitorear el rendimiento académico por cohortes
    - Las evaluaciones docentes son obligatorias cada período
    - Los indicadores de deserción deben mantenerse bajo límites establecidos

11. Restricciones Financieras
    - La inscripción de cursos requiere estar al día financieramente
    - Las becas y descuentos deben validarse cada período
    - Los pagos de matrícula deben registrarse antes del inicio de clases
    - Los convenios financieros deben actualizarse según normativa vigente

12. Gestión de Graduación
    - El cumplimiento de requisitos de grado debe ser verificado automáticamente
    - Los trabajos de grado deben registrarse y aprobarse formalmente
    - Las ceremonias de grado deben programarse según el calendario académico
    - Los documentos de grado deben seguir la normativa vigente

13. Auditoría y Trazabilidad
    - Todos los cambios en información académica deben registrar usuario y fecha
    - Las modificaciones de notas deben incluir justificación
    - Los cambios en la estructura curricular deben documentarse
    - Las excepciones a las reglas deben ser autorizadas y registradas

14. Integridad Referencial
    - No se permite eliminar registros con referencias activas
    - Las actualizaciones en cascada deben ser controladas
    - Los registros históricos deben preservarse indefinidamente
    - La fusión de registros debe mantener la consistencia de datos
