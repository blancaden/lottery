

import React from 'react'
import '../TableList/TableList.css'

const TableList = () => {
  return (
    
      <section className="seccion_datos">
      <table id="tablaDatos" className="tablaDatos">
        <thead className="tablaHead">
          <tr>
            <th name="celdaName" id="celdaName">Nombre</th>
            <th name="celdaApellido1" id="celdaApellido1">Apellido 1</th>
            <th name="celdaApellido2" id="celdaApellido2">Apellido 2</th>
            <th name="celdaRol" id="celdaRol">Rol</th>
            <th name="celdaClase" id="celdaCurso">Curso</th>
            <th name="celdaClase" id="celdaClase">Clase</th>
            <th name="celdaEmail" id="celdaEmail">Email</th>
            <th name="celdaAcciones" id="celdaEmail">Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Aquí puedes agregar datos específicos si es necesario */}
          </tr>
        </tbody>
      </table>
    </section>


   
  )
}

export default TableList