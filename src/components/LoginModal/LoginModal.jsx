import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

const LoginModal = () => {
    const [abierto, setAbierto] = useState(false);
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const abrirModal = () => {
        setAbierto(!abierto);
    }

    const toggleMostrarPassword = () => {
        setMostrarPassword(!mostrarPassword);
    };

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
                        <Input type="text" id="usuario" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Contraseña </Label>
                        <Input type={mostrarPassword ? 'text' : 'password'} id="password" />
                    </FormGroup>

                    <Button color="info" onClick={toggleMostrarPassword}>
                        ver
                    </Button>

                </ModalBody>

                <ModalFooter>
                    <Link to="/Menu" className="Go">
                        <Button color="primary"> Iniciar Sesión </Button>
                    </Link>
                    <Button color="secondary" onClick={abrirModal}> Cerrar </Button>{' '}
                </ModalFooter>


            </Modal>

        </>
    )
}

export default LoginModal