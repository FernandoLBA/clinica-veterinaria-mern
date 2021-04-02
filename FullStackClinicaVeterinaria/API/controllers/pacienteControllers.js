// Importamos el model Paciente
const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
     // crear objeto de paciente con datos de re.body
     const paciente = new Paciente(req.body);

     try {
          // Método de mongoose para guardar
          await paciente.save();
          res.json({
               mensaje: 'El cliente se agregó correctamente'
          });
     } catch (error) {
          console.log(error);
          next();
     };
};

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
     // Crear objeto paciente
     try {
          const pacientes = await Paciente.find({});
          res.json(pacientes);
     } catch (error) {
          console.log(error);
          next();
     };
};

// Obtiene un paciente por su id
exports.obtenerPaciente = async (req, res, next) => {
     // 
     try {
          const paciente = await Paciente.findById(req.params.id);
          res.json(paciente);
     } catch (error) {
          console.log(error);
          next();
     };
};

// Actualizar un paciente por su id
exports.actualizarPaciente = async (req, res, next) => {
     try {
          const paciente = await Paciente.findOneAndUpdate({
               _id: req.params.id
          }, req.body, {
               new: true
          });
          res.json(paciente);
     } catch (error) {
          console.log(error);
          next();
     };
};

// Eliminar paciente por su id
exports.eliminarPaciente = async (req, res, next) => {
     try {
          await Paciente.findByIdAndDelete({
               _id: req.params.id
          });
          res.json('El paciente ha sido eliminado.');
     } catch (error) {
          console.log(error);
          next();
     };
};
