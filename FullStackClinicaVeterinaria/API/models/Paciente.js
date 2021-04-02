// Importamos mongoose
const mongoose = require('mongoose');

// Importar el Schema de mongoose
const Schema = mongoose.Schema;

// Definir nueva schema, con tablas y campos
const pacientesSchema = new Schema({
     nombre: {
          type: String,
          trim: true
     },
     propietario: {
          type: String,
          trim: true
     },
     fecha: {
          type: String,
          trim: true
     },
     telefono: {
          type: String,
          trim: true
     },
     hora: {
          type: String,
          trim: true
     },
     sintomas: {
          type: String,
          trim: true
     }
});

// Exportamos este modelo, lo requerimos en los controllers, y el schema
module.exports = mongoose.model('Paciente', pacientesSchema);