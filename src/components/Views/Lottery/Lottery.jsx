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
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const fetchUser = async () => {
    const users = await getUsers();
    // Set the initial selected state for each user
    const updatedUsers = users.map(user => ({ ...user, selected: false }));
    setUserList(updatedUsers);
  };

  const handleDeleteUser = async (userId) => {
    const userToDelete = userList.find(user => user.id === userId);
    if (userToDelete) {
      setDeletedUsers(prevDeleted => [...prevDeleted, userToDelete]);
      setUserList(prevList => prevList.filter(user => user.id !== userId));
      setSelectedUsers(prevSelected => prevSelected.filter(user => user.id !== userId));
    }
  };

  const handleAddUserToSelection = (userId) => {
    const userToAdd = userList.find(user => user.id === userId);
    if (userToAdd && !userToAdd.selected) {
      setSelectedUsers(prevSelected => [...prevSelected, userToAdd]);
      setUserList(prevList => prevList.map(user => user.id === userId ? { ...user, selected: true } : user));
    }
  };

  const handleSpinClick = () => {
    if (selectedUsers.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * selectedUsers.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    } else {
      Swal.fire('Error', 'No hay usuarios seleccionados para el sorteo', 'error');
    }
  };

  const wheelData = selectedUsers.map((user) => {
    return {
      option: `${user.userName} ${user.userSurname1}`
    }
  });

  return (
    <div className='contentLottery'>

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
          {[...userList, ...deletedUsers].map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.userSurname1}</td>
              <td>{user.userSurname2}</td>
              <td>{user.userEmail}</td>
              <td>{user.userPhone}</td>
              <td>
                {!deletedUsers.includes(user) && (
                  <Button variant="outline-danger" size="sm" onClick={() => handleDeleteUser(user.id)}>Eliminar</Button>
                )}
              </td>
              <td>
                {!deletedUsers.includes(user) && !user.selected && (
                  <Button variant="outline-info" size="sm" onClick={() => handleAddUserToSelection(user.id)}>Añadir</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

   <section className="listButtons">
        <Button style={{ backgroundColor: '#22577E', color: 'white', marginBottom: '10vh', marginLeft: '10vh'}} onClick={() => fetchUser()}>Cargar lista</Button>{' '}
        <Link to="/PageAdmin" className="btn-edit-list">
          <Button style={{ backgroundColor: '#22577E', color: 'white', marginBottom: '10vh', marginLeft: '3vh'}}>Editar lista</Button>{' '}
        </Link>
      </section>

      {selectedUsers.length > 0 &&
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