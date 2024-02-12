import React, { useState } from 'react';
import { userService } from '../../../config';
import Swal from 'sweetalert2';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const { getUsers, deleteUser, updateUser } = userService;

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [tasks, setTasks] = useState(["Organizar fecha de exámenes", "Definir libros de texto", "Coordinar actividades de orientación", "Coordinar actividades de tutoría"]); // Define tus opciones de tareas


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


   //SORTEO//
   const assignTaskToWinner = (ganador) => {
    const tareaAsignada = tasks[Math.floor(Math.random() * tasks.length)];
    Swal.fire('Tarea Asignada', `El ganador ${ganador.userName} ha sido asignado a la tarea: ${tareaAsignada}`, 'info');
  };

  const handleSorteo = () => {
    if (userList.length === 0) {
      Swal.fire('Advertencia', 'La lista de usuarios está vacía', 'warning');
      return;
    }

    const ganadorIndex = Math.floor(Math.random() * userList.length);
    const ganador = userList[ganadorIndex];

    // Asigna una tarea al ganador
    assignTaskToWinner(ganador);
   
    // Elimina al ganador de la lista
    const nuevaLista = userList.filter((user) => user.id !== ganador.id);
    setUserList(nuevaLista);
  };
    //SORTEO//



  
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
        {/* Button for saving list removed */}
        <Button variant="success" onClick={handleSorteo}>
          Realizar Sorteo
        </Button>
      </section>
    </div>
  );
};

export default UserList;