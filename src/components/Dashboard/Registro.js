import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Registro() {
  const [usuario, setUsuario] = useState({
    nombre_usuario: '',
    correo_electronico: '',
    contrasena: ''
  });

  const handleInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/Registro', usuario);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Registro</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormInput type="text" name="nombre_usuario" placeholder="Nombre de Usuario" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <FormInput type="email" name="correo_electronico" placeholder="Correo Electrónico" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <FormInput type="password" name="contrasena" placeholder="Contraseña" onChange={handleInputChange} />
        </FormGroup>
        <FormButton type="submit">Registrar</FormButton>
      </form>
    </FormContainer>
  );
}

export default Registro;
