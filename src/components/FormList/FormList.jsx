import React, { useState } from 'react';
import Select from 'react-select';
import '../FormList/FormList.css';
import axios from 'axios';
import { datosForm } from '../../datosForm';
import TableList from '../TableList/TableList';

const options = [
  { value: '', label: 'Rol de usuario' },
  { value: 'Administrativo', label: 'Administrativo' },
  { value: 'Estudiante', label: 'Estudiante' },
  { value: 'Docente', label: 'Docente' },
];

const FormList = () => {

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // Puedes realizar otras acciones según sea necesario
    setUser({ ...user, rol: selectedOption.value });
  };

  const [user, setUser] = useState(
    {
      name: ' ',
      surname1: ' ',
      surname2: ' ',
      rol: '',
      curso: ' ',
      clase: ' ',
      email: ' '
    }
  );

  const [userList, setUserList] = useState([]); //lista donde se carga los datos  del form

  async function getData() {

    let users = await datosForm.getAllUsers(); //se pide datos del archivo json
    users = users.map((user, index) => ({ ...user, id: user.id || index + 1 }));
    setUserList(users)
  }
  getData();

  async function handleAddUserToList(e) {
    e.preventDefault()

    if (!user.name || !user.surname1 || !user.surname2 || !user.rol || !user.curso || !user.clase || !user.email) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    await datosForm.submitUser(user); //
    getData();
    setUser({
      name: '',
      surname1: '',
      surname2: '',
      rol: '',
      curso: '',
      clase: '',
      email: '',
    });
  }

  async function handleDeleteUser(userId) {
    try {
      await datosForm.deleteUser(userId);
      getData(); // Actualiza la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
     
    }
  }

  
  function handleNameChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  

  return (
    <>
      <section className="form_content">
        <form id="registro_datos">
          <div>
            <label htmlFor="txt_Name" className="label_name">Nombre</label>
            <input
              type="text"
              name="name"
              id="txt_Name"
              className="inputForm"
              placeholder="Nombre"
              required
              maxLength="12"
              value={user.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="txt_Surname">Apellido 1</label>
            <input
              type="text"
              name="surname1"
              id="txt_Surname"
              className="inputForm"
              placeholder="Apellido"
              required
              maxLength="12"
              value={user.surname1}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="txt_Surname">Apellido 2</label>
            <input
              type="text"
              name="surname2"
              id="txt_Surname"
              className="inputForm"
              placeholder="Apellido"
              required
              maxLength="12"
              value={user.surname2}
              onChange={handleNameChange}
            />
          </div>
          <div className='rol_content'>
            <label htmlFor="txt_rol" >Rol</label>
            <Select
              name="rol"
              className="rol_option"
              options={options}
              placeholder="Selecciona un rol"
              defaultValue={options[0]}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </div>
          <div>
            <label htmlFor="txt_Name" className="label_curso">Curso</label>
            <input
              type="text"
              name="curso"
              id="txt_Curso"
              className="inputForm"
              placeholder="Curso"
              required
              maxLength="12"
              value={user.curso}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="txt_Name" className="label_curso">Clase</label>
            <input
              type="text"
              name="clase"
              id="txt_Curso"
              className="inputForm"
              placeholder="Curso"
              required
              maxLength="12"
              value={user.clase}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="txt_email" className='label_email'>E-mail</label>
            <input
              type="email"
              id="txt_email"
              name="email"
              className="inputForm"
              placeholder="E-mail"
              value={user.email}
              onChange={handleNameChange}
            />
          </div>

          <span className="btn_add">
            <button
              className="btn_form"
              type="button"
              id="btnEnviara"
              onClick={handleAddUserToList}
            >
              Añadir
            </button>
          </span>
        </form>
      </section>

      <section>
      <TableList userList={userList} />
        {
          userList.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname1}</td>
              <td>{user.surname2}</td>
              <td>{user.rol}</td>
              <td>{user.curso}</td>
              <td>{user.clase}</td>
              <td>{user.email}</td>
              <td>
              <button className='btnDelete' onClick={() => handleDeleteUser(user.id)}>Delete</button>
              
            </td>
            </tr>
          )
          )
        }
      </section>
    </>
  );
};

export default FormList;