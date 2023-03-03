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
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);

  const [gestorSeleccionado, setGestorSeleccionado]=useState({
    id: '',
    nombres: '',
    apellidos: '',
    tipodocumentoid: '',
    numdocumento: '',
    telefono: '',
    rolid:''
  })
  const [modala, setModala] = useState(false);

  const togglea = () => setModala(!modala);

  const externalCloseBtna = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={togglea}
    >
      &times;
    </button>
  );

  // const datos =
  // String.map((dato));
  // console.log(dato);

  const handleChange=e=>{
    const {name, value}=e.target;
    setGestorSeleccionado(
      {
        ...gestorSeleccionado,
        [name]: value
      });
      console.log(gestorSeleccionado);
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
    await axios.get('https://localhost:7210/api/t_usuarios')
    .then(Response=>{
      console.log(Response.data);
      SetData(Response.data);
    });
  }
  useEffect(()=>{
    cargardatos();
  },[]);

  const Registrar=async()=>{
    delete gestorSeleccionado.id;
    gestorSeleccionado.nombres=parseInt(gestorSeleccionado.nombres);
    await axios.post('https://localhost:7210/api/t_usuarios', gestorSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalRegistrar();
    }).catch(error=>{
      console.log(error);
    })
  }
  const abrirCerrarModalRegistrar=()=>{
    setModalInsertar(!modalInsertar);
  }
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const Editar=async()=>{
    gestorSeleccionado.apellidos=parseInt(gestorSeleccionado.apellidos);
    await axios.put(url+"/"+gestorSeleccionado.id, gestorSeleccionado)
    .then(response=>{
      var respuesta=response.data;
      var dataAuxiliar=data;
      dataAuxiliar.map(gestor=>{
        if(gestor.id===gestorSeleccionado.id){
          gestor.nombres=respuesta.nombres;
          gestor.apellidos=respuesta.apellidos;
          gestor.tipodocumentoid=respuesta.tipodocumentoid;
          gestor.numdocumento=respuesta.numdocumento;
          gestor.telefono=respuesta.telefono;
          gestor.rolid=respuesta.rolid;
        }
      });
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }
  const seleccionarGestor=(gestor, caso)=>{
    setGestorSeleccionado(gestor);
    (caso==="Editar")?
    abrirCerrarModalEditar(): abrirCerrarModalEliminar();
  }


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
      <th scope="col">Rol</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  
    {data.map(gestor =>(
    <tr key={gestor.id}>
      <td>{gestor.nombres}</td>
      <td>{gestor.apellidos}</td>
      <td>{gestor.tipodocumentoid}</td>
      <td>{gestor.numdocumento}</td>
      <td>{gestor.telefono}</td>
      <td>{gestor.rolid}</td>
      <td><button><Button color="danger" onClick={()=>seleccionarGestor(gestor, "Editar")}>
        Editar
      </Button></button></td>
      <td><button>Eliminar</button></td>
    </tr>
        ))}
  </tbody>
</table>
<div></div>

{/* FIN LISTADO DE USUARIOS */}

<Button color="danger" onClick={abrirCerrarModalRegistrar}>
        Adicionar
      </Button>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>Adicionar Usuario</ModalHeader>
        <ModalBody>
                <label htmlFor="">Nombre</label>
                <input type="text" className='form-control' name='nombres'  onChange={handleChange}/>
                <label htmlFor="">Apellido</label>
                <input type="text" className='form-control' name='apellidos'  onChange={handleChange} />
                <label htmlFor="">Rol</label>
                <input type="number" className='form-control' name='rolid'  onChange={handleChange}/>
                <label htmlFor="">Tipo de documento</label>
                <input type="number" className='form-control' name='tipodocumentoid'  onChange={handleChange}/>
                {/* <select name="" id="" className='form-control'  onChange={handleChange}>
                    <option value="1">TI</option>
                    <option value="2">CC</option>
                    <option value="3">CE</option>
                </select> */}
                <label htmlFor="">Numero de documento</label>
                <input type="number" className='form-control' name='numdocumento'  onChange={handleChange}/>
                <label htmlFor="">Telefono</label>
                <input type="number" className='form-control' name='telefono' onChange={handleChange}/>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Registrar}>
            Adicionar
          </Button>{' '}
          <Button color="secondary" onClick={abrirCerrarModalRegistrar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

{/* FORMULARIO DE MODIFICACION */}
    <Modal isOpen={modalEditar} toggle={toggle} external={externalCloseBtn}>
            <ModalHeader>Modificar Usuario</ModalHeader>
            <ModalBody>
                   <input type="text" className="form-control" readOnly value={gestorSeleccionado && gestorSeleccionado.id}/>
                   <label htmlFor="">Nombre</label>
                <input type="text" className='form-control' name='nombres'  onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.nombres}/>
                <label htmlFor="">Apellido</label>
                <input type="text" className='form-control' name='apellidos'  onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.apellidos}/>
                <label htmlFor="">Rol</label>
                <input type="number" className='form-control' name='rolid'  onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.rolid}/>
                <label htmlFor="">Tipo de documento</label>
                <input type="number" className='form-control' name='tipodocumentoid'  onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.tipodocumentoid}/>
                {/* <select name="" id="" className='form-control'  onChange={handleChange}>
                    <option value="1">TI</option>
                    <option value="2">CC</option>
                    <option value="3">CE</option>
                </select> */}
                <label htmlFor="">Numero de documento</label>
                <input type="number" className='form-control' name='numdocumento'  onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.numdocumento}/>
                <label htmlFor="">Telefono</label>
                <input type="number" className='form-control' name='telefono' onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.telefono}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={Editar}>
                Modificar
              </Button>{' '}
              <Button color="secondary" onClick={abrirCerrarModalEditar}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
      {/* FIN DE FORMULARIO DE MODIFICACION */}
      
    </div>
    
  );
}

export default App;
