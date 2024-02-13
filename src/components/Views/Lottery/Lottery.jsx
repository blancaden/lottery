import React, { useState } from 'react';
import { userService } from '../../../config';
import Swal from 'sweetalert2';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Wheel } from "react-custom-roulette";

const { getUsers, deleteUser, updateUser } = userService;

  const bgs = [
    "#4166E9",
    "#27B1DD",
    "#DD5570",
    "#028C84",
    "#1DC25F",
    "#C96014",
    "#E3C216",
    "#BB83F4",
    "#6A32CB"
  ];

const UserList = () => {
  const [userList, setUserList] = useState([]);
  // const [tasks, setTasks] = useState(["organizar fecha de exámenes", "definir libros de texto", "coordinar actividades de orientación", "coordinar actividades de tutoría", "cuidado de pasillos", "limpieza de las aulas"]); // Define tus opciones de tareas

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  

  const fetchUser = async () => {
    const users = await getUsers();
    setUserList(users);
  };

  
  const handleDeleteUser = async (userId) => {
    const status = await deleteUser(userId);
    if (status === 200) {
    Swal.fire('Éxito', 'El usuario se ha eliminado con éxito', 'success');
      fetchUser();
    } else {
    Swal.fire('Error', 'Hubo un problema al eliminar el usuario', 'error');
    }
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * userList.length);
    const winner = userList[newPrizeNumber];
    
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  
  const wheelData = userList.map((user)=>{
    return {
      option: `${user.userName} ${user.userSurname1}`
    }

  })

  
  return (
    <div>
      <Table striped bordered hover size="sm" responsive="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.userSurname1}</td>
              <td>{user.userSurname2}</td>
              <td>{user.userEmail}</td>
              <td>{user.userPhone}</td>
              <td>
                <Button variant="outline-danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
              </td>
              <td>
                <Button variant="outline-info" size="sm" onClick={() => handleUser(user.id)}>Añadir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <section className="listButtons">
      <Button style={{ backgroundColor: '#22577E', color: 'white' }} onClick={() => fetchUser()}>Cargar lista</Button>{' '}
      <Link to="/PageAdmin" className="btn-edit-list">
      <Button style={{ backgroundColor: '#22577E', color: 'white' }}>Editar lista</Button>{' '}
      </Link>
      {/* <Button style={{ backgroundColor: '#22577E', color: 'white' }} onClick={handleSorteo}>Realizar Sorteo</Button> */}
      </section>

     {
      userList.length > 0 &&  
      <section className="roulette-list">
         <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={wheelData}
          outerBorderWidth={1}
          outerBorderColor="black"
          pointerProps={{
            src: "https://m3tkbw.csb.app/blazzio-sign.png",
            style: { transform: "rotate(-100deg)" }
          }}
          textColors={["white"]}
          backgroundColors={bgs}
          onStopSpinning={() => {
            setMustSpin(false);
            Swal.fire('Sorteo exitoso', `El ganador ${wheelData[prizeNumber].option} ha sido asignado para la tarea`, 'info');
          }}
        />
         <Button style={{ backgroundColor: '#22577E', color: 'white' }} onClick={handleSpinClick}>SPIN</Button>
         
      </section>

     }
    </div>
  );
};

export default UserList;

// return >>>>>>>>>>>> HTML 
// react lee e interpreta { } como codigo JS
// condicion           &&    ||           resultado

// condicion 1 && condicion 2 && condicion 3 && HTML 
// condicion 1 || condicion 2 || condicion 3 && HTML 