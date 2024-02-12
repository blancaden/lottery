import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom';




const LoginModal = () => {
    const [abierto, setAbierto] = useState(false);
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();


    const abrirModal = () => {
        setAbierto(true);
    };

    const cerrarModal = () => {
        setAbierto(false);
    };

    const toggleMostrarPassword = () => {
        setMostrarPassword(!mostrarPassword);
    };


    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value);

    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };

    const iniciarSesion = () => {
        if (usuario.trim() !== '' && password.trim() !== '') {

            navigate('/Menu');
           
            cerrarModal();
        } else {

            alert('Por favor, completa todos los campos antes de iniciar sesión.');
        }
    };


    return (
        <>
            <div className='principal'>
                <div className='col-md-1 mx-auto '>
                    <Button style={{ backgroundColor: '#22577E', color: 'white'  }} size="lg" onClick={abrirModal}>ACCESS</Button>
                </div>
            </div>

            <Modal isOpen={abierto} toggle={cerrarModal}>

                <ModalHeader>
                    Iniciar Sesión
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for="usuario"> Usuario </Label>
                        <Input type="text" id="usuario" value={usuario} onChange={handleUsuarioChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Contraseña </Label>
                        <Input type={mostrarPassword ? 'text' : 'password'} id="password" value={password} onChange={handlePasswordChange} />
                    </FormGroup>

                    <Button color="info" onClick={toggleMostrarPassword}>
                        Check
                    </Button>

                </ModalBody>


                <ModalFooter>

                    <Button color="primary" onClick={iniciarSesion}>Iniciar Sesión</Button>
                    <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>

                </ModalFooter>


            </Modal>

        </>
    )
}

export default LoginModal