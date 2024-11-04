import { UsuariosService } from "../services/UsuariosService.js";

class UsuariosController {

  // Usuarios
  async getUsuarios(req, res) {
    const service = new UsuariosService();
    try {
      const usuarios = await service.getUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUsuarioById(req, res) {
    const service = new UsuariosService();
    try {
      const usuario = await service.getUsuarioById(Number(req.params.id));
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUsuario(req, res) {
    const service = new UsuariosService();
    try {
      const nuevoUsuario = await service.createUsuario(req.body);
      res.json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUsuario(req, res) {
    const service = new UsuariosService();
    try {
      const usuario = await service.updateUsuario(Number(req.params.id), req.body);
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUsuario(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteUsuario(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Tipos de documento
  async getTiposDocumento(req, res) {
    const service = new UsuariosService();
    try {
      const tiposDocumento = await service.getTiposDocumento();
      res.json(tiposDocumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTipoDocumentoById(req, res) {
    const service = new UsuariosService();
    try {
      const tipoDocumento = await service.getTipoDocumentoById(Number(req.params.id));
      res.json(tipoDocumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTipoDocumento(req, res) {
    const service = new UsuariosService();
    try {
      const nuevoTipoDocumento = await service.createTipoDocumento(req.body);
      res.json(nuevoTipoDocumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTipoDocumento(req, res) {
    const service = new UsuariosService();
    try {
      const tipoDocumento = await service.updateTipoDocumento(Number(req.params.id), req.body);
      res.json(tipoDocumento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTipoDocumento(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteTipoDocumento(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Identidades de género
  async getIdentidadesGenero(req, res) {
    const service = new UsuariosService();
    try {
      const identidadesGenero = await service.getIdentidadesGenero();
      res.json(identidadesGenero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getIdentidadGeneroById(req, res) {
    const service = new UsuariosService();
    try {
      const identidadGenero = await service.getIdentidadGeneroById(Number(req.params.id));
      res.json(identidadGenero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createIdentidadGenero(req, res) {
    const service = new UsuariosService();
    try {
      const nuevaIdentidadGenero = await service.createIdentidadGenero(req.body);
      res.json(nuevaIdentidadGenero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateIdentidadGenero(req, res) {
    const service = new UsuariosService();
    try {
      const identidadGenero = await service.updateIdentidadGenero(Number(req.params.id), req.body);
      res.json(identidadGenero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteIdentidadGenero(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteIdentidadGenero(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Grupos étnicos
  async getGruposEtnicos(req, res) {
    const service = new UsuariosService();
    try {
      const gruposEtnico = await service.getGruposEtnico();
      res.json(gruposEtnico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getGrupoEtnicoById(req, res) {
    const service = new UsuariosService();
    try {
      const grupoEtnico = await service.getGrupoEtnicoById(Number(req.params.id));
      res.json(grupoEtnico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createGrupoEtnico(req, res) {
    const service = new UsuariosService();
    try {
      const nuevoGrupoEtnico = await service.createGrupoEtnico(req.body);
      res.json(nuevoGrupoEtnico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateGrupoEtnico(req, res) {
    const service = new UsuariosService();
    try {
      const grupoEtnico = await service.updateGrupoEtnico(Number(req.params.id), req.body);
      res.json(grupoEtnico);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteGrupoEtnico(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteGrupoEtnico(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Estados civiles
  async getEstadosCivil(req, res) {
    const service = new UsuariosService();
    try {
      const estadosCivil = await service.getEstadosCivil();
      res.json(estadosCivil);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEstadoCivilById(req, res) {
    const service = new UsuariosService();
    try {
      const estadoCivil = await service.getEstadoCivilById(Number(req.params.id));
      res.json(estadoCivil);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEstadoCivil(req, res) {
    const service = new UsuariosService();
    try {
      const nuevoEstadoCivil = await service.createEstadoCivil(req.body);
      res.json(nuevoEstadoCivil);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEstadoCivil(req, res) {
    const service = new UsuariosService();
    try {
      const estadoCivil = await service.updateEstadoCivil(Number(req.params.id), req.body);
      res.json(estadoCivil);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEstadoCivil(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteEstadoCivil(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Estados
  async getEstados(req, res) {
    const service = new UsuariosService();
    try {
      const estados = await service.getEstados();
      res.json(estados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEstadoById(req, res) {
    const service = new UsuariosService();
    try {
      const estado = await service.getEstadoById(Number(req.params.id));
      res.json(estado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEstado(req, res) {
    const service = new UsuariosService();
    try {
      const nuevoEstado = await service.createEstado(req.body);
      res.json(nuevoEstado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEstado(req, res) {
    const service = new UsuariosService();
    try {
      const estado = await service.updateEstado(Number(req.params.id), req.body);
      res.json(estado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEstado(req, res) {
    const service = new UsuariosService();
    try {
      const success = await service.deleteEstado(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export { UsuariosController };