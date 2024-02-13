import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Header.css';

const Header = ({ isLogoutVisible }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Muestra Sweet Alert antes de redirigir
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Cerrarás la sesión!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonColor: '#d33',
     
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la redirección a la página HomeView
        navigate('/');

        // Puedes agregar lógica adicional aquí antes de redirigir, si es necesario

        // Sweet Alert de éxito
        Swal.fire('¡Hasta luego!', 'Te has desconectado correctamente', 'success');
      }
    });
  };

  return (
    <>
      <header>
        <section className="nav-bar">
          <figure className="img-content">
            <img src="img/logo-ico.ico" alt="" />
          </figure>

          <nav className="nav-content">
            {isLogoutVisible && (
              <button className="btn-log" id="logoutButton" type="button" onClick={handleLogout}>
                Logout
              </button>
            )}
            
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;