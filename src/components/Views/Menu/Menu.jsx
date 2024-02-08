import React from 'react'
import '../Menu/Menu.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  return (
    <>
    <div className='groupButtons'>
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Nuestra escuela</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Noticias</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Oferta académica</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Docentes</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Inscripciones</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Sorteos</Button>{' '}
      <Link to="/PageAdmin" className="btn-add-user">
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Registrar Usuario</Button>{' '}
      </Link>
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">CONTACTO</Button>
      </div>


      <img  className='menuImg' src="img/img-homeView.png" alt="santa-tecla" />

    </>
  )
}

export default Menu