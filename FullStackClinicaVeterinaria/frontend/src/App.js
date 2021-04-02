import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Cliente axios
import clienteAxios from './config/axios';
// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // Para visualizar la variable en la consola del navegador
  // console.log(process.env.REACT_APP_BACKEND_URL);

  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  // useEffect
  useEffect( () => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // colocar la respuesta dentro del state 
            guardarCitas(respuesta.data);

            // Deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
  
      consultarAPI();
    }
  }, [consultar] );

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/"
          component={() => <Pacientes citas={citas} />}
        />
        <Route 
          exact 
          path="/nueva"
          component={() => <NuevaCita guardarConsultar={guardarConsultar}/>}
        />
        <Route 
          exact 
          path="/cita/:id"
          render={(props) => {
            const cita = citas.filter(cita => cita._id === props.match.params.id);

            return (
              <Cita 
                cita={cita[0]}
                guardarConsultar={guardarConsultar}
              />
            )
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
