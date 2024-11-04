// src/repositories/allRepositories.ts
import AppDataSource from "../config/database";
import { Repository } from "typeorm";
import {
  Pais,
  Region,
  Ciudad,
  GrupoEtnico,
  IdentidadGenero,
  EstadoCivil,
  Estado,
  TipoDocumento,
  NivelAcademico,
  TipoContrato,
  Modalidad,
  Sede,
  Usuario,
  CargoAdministrativo,
  NivelAcceso,
  Departamento,
  Administrativo,
  Escuela,
  Facultad,
  EstadoEstudiante,
  TipoAdmision,
  PeriodoAcademico,
  Estudiante,
  Profesor,
  Credencial,
  ProgramaAcademico,
  Materia,
  Curso,
  Seccion,
  InscripcionCurso,
  ProgramaEstudiante,
  DetalleCalificacion,
  CalificacionParcial,
  CalificacionFinal,
  Prerrequisito,
} from "../models/allModels";

// Repositorio para tbl_paises
export class PaisRepository extends Repository<Pais> {
  constructor() {
    super(Pais, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Pais[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Pais | null> {
    return await this.findOneBy({ pais_id: id });
  }

  async createPais(paisData: Partial<Pais>): Promise<Pais> {
    const pais = this.create(paisData);
    return await this.save(pais);
  }

  async updatePais(id: number, paisData: Partial<Pais>): Promise<Pais | null> {
    const pais = await this.findById(id);
    if (!pais) {
      return null;
    }
    Object.assign(pais, paisData);
    return await this.save(pais);
  }

  async deletePais(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}
// Repositorio para tbl_regiones
export class RegionRepository extends Repository<Region> {
  constructor() {
    super(Region, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Region[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Region | null> {
    return await this.findOneBy({ region_id: id });
  }

  async createRegion(regionData: Partial<Region>): Promise<Region> {
    const region = this.create(regionData);
    return await this.save(region);
  }

  async updateRegion(
    id: number,
    regionData: Partial<Region>
  ): Promise<Region | null> {
    const region = await this.findById(id);
    if (!region) {
      return null;
    }
    Object.assign(region, regionData);
    return await this.save(region);
  }

  async deleteRegion(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_ciudades
export class CiudadRepository extends Repository<Ciudad> {
  constructor() {
    super(Ciudad, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Ciudad[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Ciudad | null> {
    return await this.findOneBy({ ciudad_id: id });
  }

  async createCiudad(ciudadData: Partial<Ciudad>): Promise<Ciudad> {
    const ciudad = this.create(ciudadData);
    return await this.save(ciudad);
  }

  async updateCiudad(
    id: number,
    ciudadData: Partial<Ciudad>
  ): Promise<Ciudad | null> {
    const ciudad = await this.findById(id);
    if (!ciudad) {
      return null;
    }
    Object.assign(ciudad, ciudadData);
    return await this.save(ciudad);
  }

  async deleteCiudad(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_grupos_etnicos
export class GrupoEtnicoRepository extends Repository<GrupoEtnico> {
  constructor() {
    super(GrupoEtnico, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<GrupoEtnico[]> {
    return await this.find();
  }

  async findById(id: number): Promise<GrupoEtnico | null> {
    return await this.findOneBy({ etnia_id: id });
  }

  async createGrupoEtnico(
    grupoEtnicoData: Partial<GrupoEtnico>
  ): Promise<GrupoEtnico> {
    const grupoEtnico = this.create(grupoEtnicoData);
    return await this.save(grupoEtnico);
  }

  async updateGrupoEtnico(
    id: number,
    grupoEtnicoData: Partial<GrupoEtnico>
  ): Promise<GrupoEtnico | null> {
    const grupoEtnico = await this.findById(id);
    if (!grupoEtnico) {
      return null;
    }
    Object.assign(grupoEtnico, grupoEtnicoData);
    return await this.save(grupoEtnico);
  }

  async deleteGrupoEtnico(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_identidades_genero
export class IdentidadGeneroRepository extends Repository<IdentidadGenero> {
  constructor() {
    super(IdentidadGenero, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<IdentidadGenero[]> {
    return await this.find();
  }

  async findById(id: number): Promise<IdentidadGenero | null> {
    return await this.findOneBy({ identidad_id: id });
  }

  async createIdentidadGenero(
    identidadGeneroData: Partial<IdentidadGenero>
  ): Promise<IdentidadGenero> {
    const identidadGenero = this.create(identidadGeneroData);
    return await this.save(identidadGenero);
  }

  async updateIdentidadGenero(
    id: number,
    identidadGeneroData: Partial<IdentidadGenero>
  ): Promise<IdentidadGenero | null> {
    const identidadGenero = await this.findById(id);
    if (!identidadGenero) {
      return null;
    }
    Object.assign(identidadGenero, identidadGeneroData);
    return await this.save(identidadGenero);
  }

  async deleteIdentidadGenero(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_estado_civil
export class EstadoCivilRepository extends Repository<EstadoCivil> {
  constructor() {
    super(EstadoCivil, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<EstadoCivil[]> {
    return await this.find();
  }

  async findById(id: number): Promise<EstadoCivil | null> {
    return await this.findOneBy({ estado_civil_id: id });
  }

  async createEstadoCivil(
    estadoCivilData: Partial<EstadoCivil>
  ): Promise<EstadoCivil> {
    const estadoCivil = this.create(estadoCivilData);
    return await this.save(estadoCivil);
  }

  async updateEstadoCivil(
    id: number,
    estadoCivilData: Partial<EstadoCivil>
  ): Promise<EstadoCivil | null> {
    const estadoCivil = await this.findById(id);
    if (!estadoCivil) {
      return null;
    }
    Object.assign(estadoCivil, estadoCivilData);
    return await this.save(estadoCivil);
  }

  async deleteEstadoCivil(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_estados
export class EstadoRepository extends Repository<Estado> {
  constructor() {
    super(Estado, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Estado[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Estado | null> {
    return await this.findOneBy({ estado_id: id });
  }

  async createEstado(estadoData: Partial<Estado>): Promise<Estado> {
    const estado = this.create(estadoData);
    return await this.save(estado);
  }

  async updateEstado(
    id: number,
    estadoData: Partial<Estado>
  ): Promise<Estado | null> {
    const estado = await this.findById(id);
    if (!estado) {
      return null;
    }
    Object.assign(estado, estadoData);
    return await this.save(estado);
  }

  async deleteEstado(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_tipos_documento
export class TipoDocumentoRepository extends Repository<TipoDocumento> {
  constructor() {
    super(TipoDocumento, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<TipoDocumento[]> {
    return await this.find();
  }

  async findById(id: number): Promise<TipoDocumento | null> {
    return await this.findOneBy({ tipo_documento_id: id });
  }

  async createTipoDocumento(
    tipoDocumentoData: Partial<TipoDocumento>
  ): Promise<TipoDocumento> {
    const tipoDocumento = this.create(tipoDocumentoData);
    return await this.save(tipoDocumento);
  }

  async updateTipoDocumento(
    id: number,
    tipoDocumentoData: Partial<TipoDocumento>
  ): Promise<TipoDocumento | null> {
    const tipoDocumento = await this.findById(id);
    if (!tipoDocumento) {
      return null;
    }
    Object.assign(tipoDocumento, tipoDocumentoData);
    return await this.save(tipoDocumento);
  }

  async deleteTipoDocumento(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_niveles_academicos
export class NivelAcademicoRepository extends Repository<NivelAcademico> {
  constructor() {
    super(NivelAcademico, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<NivelAcademico[]> {
    return await this.find();
  }

  async findById(id: number): Promise<NivelAcademico | null> {
    return await this.findOneBy({ nivel_id: id });
  }

  async createNivelAcademico(
    nivelAcademicoData: Partial<NivelAcademico>
  ): Promise<NivelAcademico> {
    const nivelAcademico = this.create(nivelAcademicoData);
    return await this.save(nivelAcademico);
  }

  async updateNivelAcademico(
    id: number,
    nivelAcademicoData: Partial<NivelAcademico>
  ): Promise<NivelAcademico | null> {
    const nivelAcademico = await this.findById(id);
    if (!nivelAcademico) {
      return null;
    }
    Object.assign(nivelAcademico, nivelAcademicoData);
    return await this.save(nivelAcademico);
  }

  async deleteNivelAcademico(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_tipos_contrato
export class TipoContratoRepository extends Repository<TipoContrato> {
  constructor() {
    super(TipoContrato, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<TipoContrato[]> {
    return await this.find();
  }

  async findById(id: number): Promise<TipoContrato | null> {
    return await this.findOneBy({ tipo_contrato_id: id });
  }

  async createTipoContrato(
    tipoContratoData: Partial<TipoContrato>
  ): Promise<TipoContrato> {
    const tipoContrato = this.create(tipoContratoData);
    return await this.save(tipoContrato);
  }

  async updateTipoContrato(
    id: number,
    tipoContratoData: Partial<TipoContrato>
  ): Promise<TipoContrato | null> {
    const tipoContrato = await this.findById(id);
    if (!tipoContrato) {
      return null;
    }
    Object.assign(tipoContrato, tipoContratoData);
    return await this.save(tipoContrato);
  }

  async deleteTipoContrato(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_modalidades
export class ModalidadRepository extends Repository<Modalidad> {
  constructor() {
    super(Modalidad, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Modalidad[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Modalidad | null> {
    return await this.findOneBy({ modalidad_id: id });
  }

  async createModalidad(modalidadData: Partial<Modalidad>): Promise<Modalidad> {
    const modalidad = this.create(modalidadData);
    return await this.save(modalidad);
  }

  async updateModalidad(
    id: number,
    modalidadData: Partial<Modalidad>
  ): Promise<Modalidad | null> {
    const modalidad = await this.findById(id);
    if (!modalidad) {
      return null;
    }
    Object.assign(modalidad, modalidadData);
    return await this.save(modalidad);
  }

  async deleteModalidad(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_sedes
export class SedeRepository extends Repository<Sede> {
  constructor() {
    super(Sede, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Sede[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Sede | null> {
    return await this.findOneBy({ sede_id: id });
  }

  async createSede(sedeData: Partial<Sede>): Promise<Sede> {
    const sede = this.create(sedeData);
    return await this.save(sede);
  }

  async updateSede(id: number, sedeData: Partial<Sede>): Promise<Sede | null> {
    const sede = await this.findById(id);
    if (!sede) {
      return null;
    }
    Object.assign(sede, sedeData);
    return await this.save(sede);
  }

  async deleteSede(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_usuarios
export class UsuarioRepository extends Repository<Usuario> {
  constructor() {
    super(Usuario, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Usuario[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Usuario | null> {
    return await this.findOneBy({ usuario_id: id });
  }

  async createUsuario(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.create(usuarioData);
    return await this.save(usuario);
  }

  async updateUsuario(
    id: number,
    usuarioData: Partial<Usuario>
  ): Promise<Usuario | null> {
    const usuario = await this.findById(id);
    if (!usuario) {
      return null;
    }
    Object.assign(usuario, usuarioData);
    return await this.save(usuario);
  }

  async deleteUsuario(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_cargos_administrativos
export class CargoAdministrativoRepository extends Repository<CargoAdministrativo> {
  constructor() {
    super(CargoAdministrativo, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<CargoAdministrativo[]> {
    return await this.find();
  }

  async findById(id: number): Promise<CargoAdministrativo | null> {
    return await this.findOneBy({ cargo_id: id });
  }

  async createCargoAdministrativo(
    cargoAdministrativoData: Partial<CargoAdministrativo>
  ): Promise<CargoAdministrativo> {
    const cargoAdministrativo = this.create(cargoAdministrativoData);
    return await this.save(cargoAdministrativo);
  }

  async updateCargoAdministrativo(
    id: number,
    cargoAdministrativoData: Partial<CargoAdministrativo>
  ): Promise<CargoAdministrativo | null> {
    const cargoAdministrativo = await this.findById(id);
    if (!cargoAdministrativo) {
      return null;
    }
    Object.assign(cargoAdministrativo, cargoAdministrativoData);
    return await this.save(cargoAdministrativo);
  }

  async deleteCargoAdministrativo(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_niveles_acceso
export class NivelAccesoRepository extends Repository<NivelAcceso> {
  constructor() {
    super(NivelAcceso, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<NivelAcceso[]> {
    return await this.find();
  }

  async findById(id: number): Promise<NivelAcceso | null> {
    return await this.findOneBy({ nivel_acceso_id: id });
  }

  async createNivelAcceso(
    nivelAccesoData: Partial<NivelAcceso>
  ): Promise<NivelAcceso> {
    const nivelAcceso = this.create(nivelAccesoData);
    return await this.save(nivelAcceso);
  }

  async updateNivelAcceso(
    id: number,
    nivelAccesoData: Partial<NivelAcceso>
  ): Promise<NivelAcceso | null> {
    const nivelAcceso = await this.findById(id);
    if (!nivelAcceso) {
      return null;
    }
    Object.assign(nivelAcceso, nivelAccesoData);
    return await this.save(nivelAcceso);
  }

  async deleteNivelAcceso(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_departamentos
export class DepartamentoRepository extends Repository<Departamento> {
  constructor() {
    super(Departamento, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Departamento[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Departamento | null> {
    return await this.findOneBy({ departamento_id: id });
  }

  async createDepartamento(
    departamentoData: Partial<Departamento>
  ): Promise<Departamento> {
    const departamento = this.create(departamentoData);
    return await this.save(departamento);
  }

  async updateDepartamento(
    id: number,
    departamentoData: Partial<Departamento>
  ): Promise<Departamento | null> {
    const departamento = await this.findById(id);
    if (!departamento) {
      return null;
    }
    Object.assign(departamento, departamentoData);
    return await this.save(departamento);
  }

  async deleteDepartamento(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_administrativos
export class AdministrativoRepository extends Repository<Administrativo> {
  constructor() {
    super(Administrativo, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Administrativo[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Administrativo | null> {
    return await this.findOneBy({ administrativo_id: id });
  }

  async createAdministrativo(
    administrativoData: Partial<Administrativo>
  ): Promise<Administrativo> {
    const administrativo = this.create(administrativoData);
    return await this.save(administrativo);
  }

  async updateAdministrativo(
    id: number,
    administrativoData: Partial<Administrativo>
  ): Promise<Administrativo | null> {
    const administrativo = await this.findById(id);
    if (!administrativo) {
      return null;
    }
    Object.assign(administrativo, administrativoData);
    return await this.save(administrativo);
  }

  async deleteAdministrativo(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_escuelas
export class EscuelaRepository extends Repository<Escuela> {
  constructor() {
    super(Escuela, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Escuela[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Escuela | null> {
    return await this.findOneBy({ escuela_id: id });
  }

  async createEscuela(escuelaData: Partial<Escuela>): Promise<Escuela> {
    const escuela = this.create(escuelaData);
    return await this.save(escuela);
  }

  async updateEscuela(
    id: number,
    escuelaData: Partial<Escuela>
  ): Promise<Escuela | null> {
    const escuela = await this.findById(id);
    if (!escuela) {
      return null;
    }
    Object.assign(escuela, escuelaData);
    return await this.save(escuela);
  }

  async deleteEscuela(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_facultades
export class FacultadRepository extends Repository<Facultad> {
  constructor() {
    super(Facultad, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Facultad[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Facultad | null> {
    return await this.findOneBy({ facultad_id: id });
  }

  async createFacultad(facultadData: Partial<Facultad>): Promise<Facultad> {
    const facultad = this.create(facultadData);
    return await this.save(facultad);
  }

  async updateFacultad(
    id: number,
    facultadData: Partial<Facultad>
  ): Promise<Facultad | null> {
    const facultad = await this.findById(id);
    if (!facultad) {
      return null;
    }
    Object.assign(facultad, facultadData);
    return await this.save(facultad);
  }

  async deleteFacultad(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_estados_estudiante
export class EstadoEstudianteRepository extends Repository<EstadoEstudiante> {
  constructor() {
    super(EstadoEstudiante, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<EstadoEstudiante[]> {
    return await this.find();
  }

  async findById(id: number): Promise<EstadoEstudiante | null> {
    return await this.findOneBy({ estado_id: id });
  }

  async createEstadoEstudiante(
    estadoEstudianteData: Partial<EstadoEstudiante>
  ): Promise<EstadoEstudiante> {
    const estadoEstudiante = this.create(estadoEstudianteData);
    return await this.save(estadoEstudiante);
  }

  async updateEstadoEstudiante(
    id: number,
    estadoEstudianteData: Partial<EstadoEstudiante>
  ): Promise<EstadoEstudiante | null> {
    const estadoEstudiante = await this.findById(id);
    if (!estadoEstudiante) {
      return null;
    }
    Object.assign(estadoEstudiante, estadoEstudianteData);
    return await this.save(estadoEstudiante);
  }

  async deleteEstadoEstudiante(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_tipos_admision
export class TipoAdmisionRepository extends Repository<TipoAdmision> {
  constructor() {
    super(TipoAdmision, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<TipoAdmision[]> {
    return await this.find();
  }

  async findById(id: number): Promise<TipoAdmision | null> {
    return await this.findOneBy({ tipo_admision_id: id });
  }

  async createTipoAdmision(
    tipoAdmisionData: Partial<TipoAdmision>
  ): Promise<TipoAdmision> {
    const tipoAdmision = this.create(tipoAdmisionData);
    return await this.save(tipoAdmision);
  }

  async updateTipoAdmision(
    id: number,
    tipoAdmisionData: Partial<TipoAdmision>
  ): Promise<TipoAdmision | null> {
    const tipoAdmision = await this.findById(id);
    if (!tipoAdmision) {
      return null;
    }
    Object.assign(tipoAdmision, tipoAdmisionData);
    return await this.save(tipoAdmision);
  }

  async deleteTipoAdmision(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_periodos_academicos
export class PeriodoAcademicoRepository extends Repository<PeriodoAcademico> {
  constructor() {
    super(PeriodoAcademico, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<PeriodoAcademico[]> {
    return await this.find();
  }

  async findById(id: number): Promise<PeriodoAcademico | null> {
    return await this.findOneBy({ periodo_id: id });
  }

  async createPeriodoAcademico(
    periodoAcademicoData: Partial<PeriodoAcademico>
  ): Promise<PeriodoAcademico> {
    const periodoAcademico = this.create(periodoAcademicoData);
    return await this.save(periodoAcademico);
  }

  async updatePeriodoAcademico(
    id: number,
    periodoAcademicoData: Partial<PeriodoAcademico>
  ): Promise<PeriodoAcademico | null> {
    const periodoAcademico = await this.findById(id);
    if (!periodoAcademico) {
      return null;
    }
    Object.assign(periodoAcademico, periodoAcademicoData);
    return await this.save(periodoAcademico);
  }

  async deletePeriodoAcademico(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_estudiantes
export class EstudianteRepository extends Repository<Estudiante> {
  constructor() {
    super(Estudiante, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Estudiante[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Estudiante | null> {
    return await this.findOneBy({ estudiante_id: id });
  }

  async createEstudiante(
    estudianteData: Partial<Estudiante>
  ): Promise<Estudiante> {
    const estudiante = this.create(estudianteData);
    return await this.save(estudiante);
  }

  async updateEstudiante(
    id: number,
    estudianteData: Partial<Estudiante>
  ): Promise<Estudiante | null> {
    const estudiante = await this.findById(id);
    if (!estudiante) {
      return null;
    }
    Object.assign(estudiante, estudianteData);
    return await this.save(estudiante);
  }

  async deleteEstudiante(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_profesores
export class ProfesorRepository extends Repository<Profesor> {
  constructor() {
    super(Profesor, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Profesor[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Profesor | null> {
    return await this.findOneBy({ profesor_id: id });
  }

  async createProfesor(profesorData: Partial<Profesor>): Promise<Profesor> {
    const profesor = this.create(profesorData);
    return await this.save(profesor);
  }

  async updateProfesor(
    id: number,
    profesorData: Partial<Profesor>
  ): Promise<Profesor | null> {
    const profesor = await this.findById(id);
    if (!profesor) {
      return null;
    }
    Object.assign(profesor, profesorData);
    return await this.save(profesor);
  }

  async deleteProfesor(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_credenciales
export class CredencialRepository extends Repository<Credencial> {
  constructor() {
    super(Credencial, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Credencial[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Credencial | null> {
    return await this.findOneBy({ credencial_id: id });
  }

  async createCredencial(
    credencialData: Partial<Credencial>
  ): Promise<Credencial> {
    const credencial = this.create(credencialData);
    return await this.save(credencial);
  }

  async updateCredencial(
    id: number,
    credencialData: Partial<Credencial>
  ): Promise<Credencial | null> {
    const credencial = await this.findById(id);
    if (!credencial) {
      return null;
    }
    Object.assign(credencial, credencialData);
    return await this.save(credencial);
  }

  async deleteCredencial(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_programas_academicos
export class ProgramaAcademicoRepository extends Repository<ProgramaAcademico> {
  constructor() {
    super(ProgramaAcademico, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<ProgramaAcademico[]> {
    return await this.find();
  }

  async findById(id: number): Promise<ProgramaAcademico | null> {
    return await this.findOneBy({ programa_id: id });
  }

  async createProgramaAcademico(
    programaAcademicoData: Partial<ProgramaAcademico>
  ): Promise<ProgramaAcademico> {
    const programaAcademico = this.create(programaAcademicoData);
    return await this.save(programaAcademico);
  }

  async updateProgramaAcademico(
    id: number,
    programaAcademicoData: Partial<ProgramaAcademico>
  ): Promise<ProgramaAcademico | null> {
    const programaAcademico = await this.findById(id);
    if (!programaAcademico) {
      return null;
    }
    Object.assign(programaAcademico, programaAcademicoData);
    return await this.save(programaAcademico);
  }

  async deleteProgramaAcademico(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_materias
export class MateriaRepository extends Repository<Materia> {
  constructor() {
    super(Materia, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Materia[]> {
    return await this.find();
  }

  async findById(id: string): Promise<Materia | null> {
    return await this.findOneBy({ materia_id: id });
  }

  async createMateria(materiaData: Partial<Materia>): Promise<Materia> {
    const materia = this.create(materiaData);
    return await this.save(materia);
  }

  async updateMateria(
    id: string,
    materiaData: Partial<Materia>
  ): Promise<Materia | null> {
    const materia = await this.findById(id);
    if (!materia) {
      return null;
    }
    Object.assign(materia, materiaData);
    return await this.save(materia);
  }

  async deleteMateria(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_cursos
export class CursoRepository extends Repository<Curso> {
  constructor() {
    super(Curso, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Curso[]> {
    return await this.find();
  }

  async findById(id: string): Promise<Curso | null> {
    return await this.findOneBy({ curso_id: id });
  }

  async createCurso(cursoData: Partial<Curso>): Promise<Curso> {
    const curso = this.create(cursoData);
    return await this.save(curso);
  }

  async updateCurso(
    id: string,
    cursoData: Partial<Curso>
  ): Promise<Curso | null> {
    const curso = await this.findById(id);
    if (!curso) {
      return null;
    }
    Object.assign(curso, cursoData);
    return await this.save(curso);
  }

  async deleteCurso(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_secciones
export class SeccionRepository extends Repository<Seccion> {
  constructor() {
    super(Seccion, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Seccion[]> {
    return await this.find();
  }

  async findById(id: string): Promise<Seccion | null> {
    return await this.findOneBy({ nrc: id });
  }

  async createSeccion(seccionData: Partial<Seccion>): Promise<Seccion> {
    const seccion = this.create(seccionData);
    return await this.save(seccion);
  }

  async updateSeccion(
    id: string,
    seccionData: Partial<Seccion>
  ): Promise<Seccion | null> {
    const seccion = await this.findById(id);
    if (!seccion) {
      return null;
    }
    Object.assign(seccion, seccionData);
    return await this.save(seccion);
  }

  async deleteSeccion(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_inscripciones_curso
export class InscripcionCursoRepository extends Repository<InscripcionCurso> {
  constructor() {
    super(InscripcionCurso, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<InscripcionCurso[]> {
    return await this.find();
  }

  async findById(id: number): Promise<InscripcionCurso | null> {
    return await this.findOneBy({ inscripcion_id: id });
  }

  async createInscripcionCurso(
    inscripcionCursoData: Partial<InscripcionCurso>
  ): Promise<InscripcionCurso> {
    const inscripcionCurso = this.create(inscripcionCursoData);
    return await this.save(inscripcionCurso);
  }

  async updateInscripcionCurso(
    id: number,
    inscripcionCursoData: Partial<InscripcionCurso>
  ): Promise<InscripcionCurso | null> {
    const inscripcionCurso = await this.findById(id);
    if (!inscripcionCurso) {
      return null;
    }
    Object.assign(inscripcionCurso, inscripcionCursoData);
    return await this.save(inscripcionCurso);
  }

  async deleteInscripcionCurso(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_programas_estudiantes
export class ProgramaEstudianteRepository extends Repository<ProgramaEstudiante> {
  constructor() {
    super(ProgramaEstudiante, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<ProgramaEstudiante[]> {
    return await this.find();
  }

  async findById(id: number): Promise<ProgramaEstudiante | null> {
    return await this.findOneBy({ programa_estudiante_id: id });
  }

  async createProgramaEstudiante(
    programaEstudianteData: Partial<ProgramaEstudiante>
  ): Promise<ProgramaEstudiante> {
    const programaEstudiante = this.create(programaEstudianteData);
    return await this.save(programaEstudiante);
  }

  async updateProgramaEstudiante(
    id: number,
    programaEstudianteData: Partial<ProgramaEstudiante>
  ): Promise<ProgramaEstudiante | null> {
    const programaEstudiante = await this.findById(id);
    if (!programaEstudiante) {
      return null;
    }
    Object.assign(programaEstudiante, programaEstudianteData);
    return await this.save(programaEstudiante);
  }

  async deleteProgramaEstudiante(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_detalles_calificaciones
export class DetalleCalificacionRepository extends Repository<DetalleCalificacion> {
  constructor() {
    super(DetalleCalificacion, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<DetalleCalificacion[]> {
    return await this.find();
  }

  async findById(id: number): Promise<DetalleCalificacion | null> {
    return await this.findOneBy({ detalle_calificacion_id: id });
  }

  async createDetalleCalificacion(
    detalleCalificacionData: Partial<DetalleCalificacion>
  ): Promise<DetalleCalificacion> {
    const detalleCalificacion = this.create(detalleCalificacionData);
    return await this.save(detalleCalificacion);
  }

  async updateDetalleCalificacion(
    id: number,
    detalleCalificacionData: Partial<DetalleCalificacion>
  ): Promise<DetalleCalificacion | null> {
    const detalleCalificacion = await this.findById(id);
    if (!detalleCalificacion) {
      return null;
    }
    Object.assign(detalleCalificacion, detalleCalificacionData);
    return await this.save(detalleCalificacion);
  }

  async deleteDetalleCalificacion(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_calificaciones_parciales
export class CalificacionParcialRepository extends Repository<CalificacionParcial> {
  constructor() {
    super(CalificacionParcial, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<CalificacionParcial[]> {
    return await this.find();
  }

  async findById(id: number): Promise<CalificacionParcial | null> {
    return await this.findOneBy({ calificacion_parcial_id: id });
  }

  async createCalificacionParcial(
    calificacionParcialData: Partial<CalificacionParcial>
  ): Promise<CalificacionParcial> {
    const calificacionParcial = this.create(calificacionParcialData);
    return await this.save(calificacionParcial);
  }

  async updateCalificacionParcial(
    id: number,
    calificacionParcialData: Partial<CalificacionParcial>
  ): Promise<CalificacionParcial | null> {
    const calificacionParcial = await this.findById(id);
    if (!calificacionParcial) {
      return null;
    }
    Object.assign(calificacionParcial, calificacionParcialData);
    return await this.save(calificacionParcial);
  }

  async deleteCalificacionParcial(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_calificaciones_finales
export class CalificacionFinalRepository extends Repository<CalificacionFinal> {
  constructor() {
    super(CalificacionFinal, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<CalificacionFinal[]> {
    return await this.find();
  }

  async findById(id: number): Promise<CalificacionFinal | null> {
    return await this.findOneBy({ calificacion_final_id: id });
  }

  async createCalificacionFinal(
    calificacionFinalData: Partial<CalificacionFinal>
  ): Promise<CalificacionFinal> {
    const calificacionFinal = this.create(calificacionFinalData);
    return await this.save(calificacionFinal);
  }

  async updateCalificacionFinal(
    id: number,
    calificacionFinalData: Partial<CalificacionFinal>
  ): Promise<CalificacionFinal | null> {
    const calificacionFinal = await this.findById(id);
    if (!calificacionFinal) {
      return null;
    }
    Object.assign(calificacionFinal, calificacionFinalData);
    return await this.save(calificacionFinal);
  }

  async deleteCalificacionFinal(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}

// Repositorio para tbl_prerrequisitos
export class PrerrequisitoRepository extends Repository<Prerrequisito> {
  constructor() {
    super(Prerrequisito, AppDataSource.createEntityManager());
  }

  async findAll(): Promise<Prerrequisito[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Prerrequisito | null> {
    return await this.findOneBy({ prerrequisito_id: id });
  }

  async createPrerrequisito(
    prerrequisitoData: Partial<Prerrequisito>
  ): Promise<Prerrequisito> {
    const prerrequisito = this.create(prerrequisitoData);
    return await this.save(prerrequisito);
  }

  async updatePrerrequisito(
    id: number,
    prerrequisitoData: Partial<Prerrequisito>
  ): Promise<Prerrequisito | null> {
    const prerrequisito = await this.findById(id);
    if (!prerrequisito) {
      return null;
    }
    Object.assign(prerrequisito, prerrequisitoData);
    return await this.save(prerrequisito);
  }

  async deletePrerrequisito(id: number): Promise<boolean> {
    const result = await this.delete(id);
    return result.affected !== 0;
  }
}
