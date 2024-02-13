import React from 'react'
import '../Menu/Menu.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
     
    <div className='groupButtons'>
      <Button style={{ backgroundColor: '#22577E', color: 'white', marginRight: '20px' }} size="lg">Nuestra escuela</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white', marginRight: '20px' }} size="lg">Noticias</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white', marginRight: '20px' }} size="lg">Oferta académica</Button>{' '}
      <Button style={{ backgroundColor: '#22577E', color: 'white', marginRight: '20px' }} size="lg">Matrícula</Button>{' '}
      <Link to="/Lottery" className="btn-lottery">
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Sorteos</Button>{' '}
      </Link>
      <Link to="/PageAdmin" className="btn-add-user">
      <Button style={{ backgroundColor: '#22577E', color: 'white'}} size="lg">Registrar usuario</Button>{' '}
      </Link>
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} size="lg">Contacto</Button>
      </div>

      <section className='menuImg'>
          <img src="img/insti-menuView.png" alt="santa-tecla" />
      </section>
    </>
  )
}

export default Menu