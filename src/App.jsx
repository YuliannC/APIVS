import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ApiCrud from './componentes/ApiCrud'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [url, SetUrl] = useState('https://localhost:7210/api/t_usuarios');
  const Mostrar = () =>{
    axios.get(url).then(Response=>{
      console.log(Response.Data);
    })
  }

  const CargarDatos = async()=>{
    await axios.get('https://localhost:7210/api/t_usuarios').then(Response=>{
      console.log(Response.data);
    });
  }
  useEffect(()=>{
    CargarDatos();
  },[])

  return (
          <div>
              <button className="boton" onClick={ Mostrar }>Registrar</button> <br /> <br />
          <table>
    <thead>
    <tr>
    <th scope="col">Id</th>
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Tipo de documento</th>
    <th scope="col">Numero de documento</th>
    <th scope="col">Telefono</th>
    <th scope="col"></th>
    <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    {data.map(CargarDatos=>(
          <tr key={CargarDatos.id}>
            <td>{CargarDatos.id}</td>
            <td>{CargarDatos.nombres}</td>
            <td>{CargarDatos.apellidos}</td>
            <td>{CargarDatos.tipodocumentoid}</td>
            <td>{CargarDatos.numdocumento}</td>
            <td>{CargarDatos.telefono}</td>
            <td>
              <button className="btn btn-primary" onClick={()=>seleccionarGestor(gestor, "Editar")}>Editar</button> {"  "}
              <button className="btn btn-danger" onClick={()=>seleccionarGestor(gestor, "Eliminar")}>Eliminar</button>
            </td>
            </tr>
        ))}
        </tbody>

      </table>

   
</div>
  );
  
}

export default App
