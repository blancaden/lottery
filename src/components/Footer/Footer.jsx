import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
      <footer className="footer_home">
    <div className="comment1">
        <p> &copy;2024 G3 Tecnologys</p>
    </div>

        <div id="comment2">

                <img  src="img/telefono.png" />
                <p>Teléfono 900234353</p>  
        </div>
    
        <div id="comment3">
            <img src="img/maps.png" />
            <p> Dirección Avda Ramon y Cajal 20 </p>

        </div>
    </footer>
    </>
  )
}

export default Footer