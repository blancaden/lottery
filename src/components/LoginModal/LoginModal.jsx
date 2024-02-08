import React, { useState } from 'react';
import { Button, Modal,ModalHeader, ModalBody,ModalFooter,FormGroup, Input,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

    const LoginModal = () => {
    const [abierto, setAbierto] = useState(false);

    const abrirModal = () => {
        setAbierto(!abierto);
    }


    return (
        <>
            <div className='principal'>
                <div className='secundario'>
                <Button variant="primary" size="lg" onClick={abrirModal}>Mostrar Modal</Button>{' '}
                </div>
            </div>

            <Modal isOpen={abierto} toggle={abrirModal}>

                <ModalHeader> 
                    Iniciar Sesión
                </ModalHeader>

                <ModalBody> 
                    <FormGroup>
                        <Label for="usuario"> Usuario </Label>
                        <Input type="text" id="usuario"/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Contraseña </Label>
                        <Input type="text" id="password"/> 
                    </FormGroup>
                </ModalBody>

                <ModalFooter> 

                </ModalFooter>


           </Modal>

        </>
    )
}

export default LoginModal