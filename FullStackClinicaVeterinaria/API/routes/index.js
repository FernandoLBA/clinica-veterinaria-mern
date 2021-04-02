// Importamos express
const express = require('express');
// Asignamos express a router
const router = express.Router()
// Importar controllador
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {
     // Agrega nuevos pacientes via post
     router.post('/pacientes', pacienteController.nuevoCliente);

     // Obtiene todos los registros de pacientes en la base de datos
     router.get('/pacientes', pacienteController.obtenerPacientes);

     // Obtiene un solo paciente por su ID
     router.get('/pacientes/:id', pacienteController.obtenerPaciente);

     // Actualizar un registro
     router.put('/pacientes/:id', pacienteController.actualizarPaciente);

     // Eliminar registro por su id
     router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

     return router;
};