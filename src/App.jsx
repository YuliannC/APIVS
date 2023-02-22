import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ApiCrud from './componentes/ApiCrud'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  

  const [url, SetUrl] = useState('https://localhost:7210/api/t_usuarios');

 
  const cargardatos = async()=>{
    await axios.get('https://localhost:7210/api/t_usuarios').then(Response=>{
      console.log(Response.data);
    });
  }
  useEffect(()=>{
    cargardatos();
  },[]);



  return (
          <div>
              <button className="boton" >Registrar</button> <br /> <br />
      </div>
  );
  
}

export default App
