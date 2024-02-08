import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom';




const LoginModal = () => {
    const [abierto, setAbierto] = useState(false);
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const [redirectToModal, setRedirectToModal] = useState(false);

    const navigate = useNavigate();
  


    const abrirModal = () => {
        setAbierto(!abierto);
    }

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
            // Cambia esta línea para redireccionar a /Menu solo si los campos están completados
            navigate('/Menu');
        } else {
            alert('Por favor, completa todos los campos antes de iniciar sesión.');
            // Puedes quitar esta línea si no deseas redirigir cuando los campos están vacíos
            // setRedirectToModal(true);
        }
    };

    // if (redirectToModal) {
    //     navigate('/Menu');
    // }

    return (
        <>
            <div className='principal'>
                <div className='col-md-1 mx-auto'>
                    <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg" onClick={abrirModal}>ACCESS</Button>{' '}
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
                        check
                    </Button>

                </ModalBody>

                <ModalFooter>
                         <Link to= "/Menu" className="btn-go" >
                             <Button color="primary" onClick={iniciarSesion} > Iniciar Sesión </Button>
                        </Link>
                    <Button color="secondary" onClick={abrirModal}> Cerrar </Button>{' '}
                </ModalFooter>


            </Modal>

        </>
    )
}

export default LoginModal