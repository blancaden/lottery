import React from 'react'
import '../Menu/Menu.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  return (
    <>
    <div className='groupButtons'>
      <Button variant="primary" size="lg">Nuestra escuela</Button>{' '}
      <Button variant="outline-info" size="lg">Noticias</Button>{' '}
      <Button variant="outline-info" size="lg">Oferta académica</Button>{' '}
      <Button variant="outline-info" size="lg">Docentes</Button>{' '}
      <Button variant="outline-info" size="lg">Inscripciones</Button>{' '}
      <Button variant="outline-info" size="lg">Sorteos</Button>{' '}
      <Link to="/PageAdmin" className="btn-add-user">
      <Button variant="outline-info" size="lg">Registrar Usuario</Button>{' '}
      </Link>
      <Button variant="outline-dark" size="lg">CONTACTO</Button>
      </div>


      <img  className='menuImg' src="img/img-homeView.png" alt="santa-tecla" />

    </>
  )
}

export default Menu