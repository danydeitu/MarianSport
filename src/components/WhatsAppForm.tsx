import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
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

const FormTextarea = styled.textarea`
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
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const WhatsAppForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const phoneNumber = '5491137684577'; // Número de teléfono de WhatsApp (sin el '+' y con el código de país)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Nombre: ${formData.name}\nMensaje: ${formData.message}`)}`;
    window.open(url, '_blank');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Envianos un mensaje por WhatsApp</FormTitle>
      <FormGroup>
        <FormInput
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <FormTextarea
          name="message"
          placeholder="Tu consulta"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormButton type="submit">Enviar</FormButton>
    </FormContainer>
  );
};

export default WhatsAppForm;
