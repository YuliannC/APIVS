import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalExample(props) {
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
  return (
    <div>
      <Button color="danger" onClick={togglea}>
        Adicionar
      </Button>
      <Modal isOpen={modala} toggle={togglea} external={externalCloseBtna}>
        <ModalHeader>Adicionar Usuario</ModalHeader>
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
          <Button color="primary" onClick={togglea}>
            Adicionar
          </Button>{' '}
          <Button color="secondary" onClick={togglea}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;