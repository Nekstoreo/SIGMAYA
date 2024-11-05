const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;

// Función auxiliar para hacer peticiones POST
const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error inserting data into ${endpoint}:`, error.response.data);
        throw error;
    }
};

describe('Data Insertion', () => {
    // Tablas sin dependencias
    test('Insert data into tables without dependencies', async () => {
        const tablesWithoutDependencies = [
            { endpoint: 'paises', data: [{ nombre: 'Colombia' }, { nombre: 'Estados Unidos' }] },
            { endpoint: 'estados', data: [{ nombre: 'Activo' }, { nombre: 'Inactivo' }] },
            { endpoint: 'tipos-documento', data: [{ nombre: 'Cédula' }, { nombre: 'Pasaporte' }] },
            { endpoint: 'niveles-academicos', data: [{ nombre: 'Pregrado' }, { nombre: 'Maestría' }] },
            { endpoint: 'tipos-contrato', data: [{ nombre: 'Tiempo completo' }, { nombre: 'Medio tiempo' }] },
            { endpoint: 'modalidades', data: [{ nombre: 'Presencial' }, { nombre: 'Virtual' }] },
            { endpoint: 'estado-civil', data: [{ nombre: 'Soltero' }, { nombre: 'Casado' }] },
            { endpoint: 'identidades-genero', data: [{ nombre: 'Masculino' }, { nombre: 'Femenino' }] },
            { endpoint: 'grupos-etnicos', data: [{ nombre: 'Mestizo' }, { nombre: 'Afrodescendiente' }] },
        ];

        for (const table of tablesWithoutDependencies) {
            for (const item of table.data) {
                await postData(table.endpoint, item);
            }
        }
    });

    // Tablas con dependencias de primer nivel
    test('Insert data into tables with first-level dependencies', async () => {
        const tablesWithFirstLevelDependencies = [
            { endpoint: 'departamentos', data: [{ nombre: 'Antioquia', pais_id: 1 }, { nombre: 'California', pais_id: 2 }] },
            { endpoint: 'sedes', data: [{ nombre: 'Sede Central', ubicacion: 'Calle Principal' }, { nombre: 'Sede Norte', ubicacion: 'Avenida Norte' }] },
            { endpoint: 'areas-administrativas', data: [{ nombre: 'Ingeniería', area_id: 1 }, { nombre: 'Ciencias', area_id: 2 }] },
            { endpoint: 'escuelas', data: [{ nombre: 'Escuela de Ingeniería', sede_id: 1, area_conocimiento: 'Ingeniería' }, { nombre: 'Escuela de Ciencias', sede_id: 2, area_conocimiento: 'Ciencias' }] },
            { endpoint: 'facultades', data: [{ nombre: 'Facultad de Ingeniería', escuela_id: 1 }, { nombre: 'Facultad de Ciencias', escuela_id: 2 }] },
            { endpoint: 'periodos-academicos', data: [{ anio: 2023, semestre: '1', fecha_inicio: '2023-01-15', fecha_fin: '2023-06-15' }, { anio: 2023, semestre: '2', fecha_inicio: '2023-07-15', fecha_fin: '2023-12-15' }] },
        ];

        for (const table of tablesWithFirstLevelDependencies) {
            for (const item of table.data) {
                await postData(table.endpoint, item);
            }
        }
    });

    // Continúa con las demás tablas siguiendo el mismo patrón...

});