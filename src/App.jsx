import { Fragment, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ApiCrud from './componentes/ApiCrud'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AdicionarUsuario from './componentes/adicionar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function App() {
  const [modal, setModal] = useState(false);
  const [url, SetUrl] = useState('https://localhost:7210/api/t_usuarios');
  const toggle = () => setModal(!modal);
  const [data, SetData]=useState([]);
  const [gestorSeleccionado, setGestorSeleccionado]=useState({
    id: '',
    nombres: '',
    apellidos: '',
    tipodocumentoid: '',
    numdocumento: '',
    telefono: ''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setGestorSeleccionado(
      {
        ...gestorSeleccionado,
        [name]: value
      }
    )
  }
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

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
      {/* LISTADO DE USUARIOS */}
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Tipo de Documento</th>
      <th scope="col">Documento</th>
      <th scope="col">Telefono</th>
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
      <td><button><Button color="danger" onClick={toggle}>
        Editar
      </Button></button></td>
      <td><button>Eliminar</button></td>
    </tr>
  </tbody>
</table>
{/* FIN LISTADO DE USUARIOS */}

{/* FORMULARIO DE MODIFICACION */}
    <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
            <ModalHeader>Modificar Usuario</ModalHeader>
            <ModalBody>
                <form action="" >
                    <label htmlFor="">Nombre</label>
                    <input type="text" className='form-control' />
                    <label htmlFor="">Apellido</label>
                    <input type="text" className='form-control' />
                    <label htmlFor="">Tipo de documento</label>
                    <select name="" id="" className='form-control'>
                        <option value="">TI</option>
                        <option value="">CC</option>
                        <option value="">CE</option>
                    </select>
                    <label htmlFor="">Numero de documento</label>
                    <input type="number" className='form-control' />
                    <label htmlFor="">Telefono</label>
                    <input type="number" className='form-control'/>
                    <label htmlFor="">Correo</label>
                    <input type="email" className='form-control'/>
                </form>
                
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Modificar
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
      {/* FIN DE FORMULARIO DE MODIFICACION */}
    </div>
    
  );
}

export default App;
