import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ApiCrud from './componentes/ApiCrud'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
          <div>
              <button className="boton">Registrar</button> <br /> <br />
          <table>
    <thead>
    <tr>
    <th scope="col">Id</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Tipo de documento</th>
    <th scope="col">Numero de documento</th>
    <th scope="col">Telefono</th>
    <th scope="col">Correo</th>
    <th scope="col"></th>
    <th scope="col"></th>

    </tr>
    </thead>
    <tbody>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button className="boton">Editar</button></td>
    <td><button className="boton">Eliminar</button></td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button className="boton">Editar</button></td>
    <td><button className="boton">Eliminar</button></td>
    </tr>

    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button className="boton">Editar</button></td>
    <td><button className="boton">Eliminar</button></td>
    </tr>
    </tbody>
    </table>
</div>
  );
  
}

export default App
