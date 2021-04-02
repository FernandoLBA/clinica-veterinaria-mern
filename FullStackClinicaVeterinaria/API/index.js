// Importar express
const express = require('express');
//  Importar mongoose
const mongoose = require('mongoose');
// Importamos el routing
const routes = require('./routes');// Cuando la carpeta tiene un index, javascript automáticamente buscará el index, no es necesario colocar ./routes/index.
// Importar body parser para leer formularios
const bodyParser = require('body-parser');
// Importar cors
const cors = require('cors');

// Crear el server
const app = express();

// Bloquear el cors a solo un dominio
const whitelist = ['http://localhost:3000'];
const corsOptions = {
     origin: (origin, callback) => {
          const existe = whitelist.some(dominio => dominio === origin);
          if (existe) {
               callback(null, true);
          } else {
               callback(new Error('No permitido por CORS'));
          }
     }
}

// Si quieres que nadie vea la información de la API
// app.use(cors(corsOptions));

// Habilitar CORS
app.use(cors())

// Conectar a MongoDB
mongoose.Promise = global.Promise;
// Si trabajo el mongo en local, uso esta url
// mongodb://localhost/veterinariaLocal
// Si la uso con un server atlas, uso esta:
// mongodb+srv://fernandolba:admin@fernandolbacluster.e7tdn.mongodb.net/veterinaria
mongoose.connect('mongodb+srv://fernandolba:admin@fernandolbacluster.e7tdn.mongodb.net/veterinaria', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

// Habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilita el routing
app.use('/', routes());

// Puerto y arrancar el server
app.listen(4000, () => {
     console.log('Servidor funcionando');    
});