import React, { useState, ChangeEvent, FormEvent } from "react";
import { sendEmail } from "./email";
import styled from 'styled-components';
import './Mailer.css';

const MailerContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactoContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ContactoTitle = styled.h3`
  margin-bottom: 10px;
`;

const ContactoInfo = styled.h4`
  margin-bottom: 10px;
`;

const ContactoLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
}

const Mailer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(formData);
    setFormData({ name: "", number: "", email: "", message: "" });
  };

  return (
    <MailerContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>CONTACTANOS</FormTitle>
        <FormGroup>
          <FormInput
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type="tel"
            name="number"
            placeholder="Teléfono"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormTextarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormButton type="submit">Enviar</FormButton>
      </FormContainer>

      <ContactoContainer>
        <ContactoTitle>Dejanos tu consulta</ContactoTitle>
        <ContactoInfo>Llamanos o escribinos</ContactoInfo>
        <ContactoInfo>Trabajos en el día</ContactoInfo>
        <p><ContactoLink href="tel:+5401137684577"><i className="fa fa-phone fa-rotate-90"></i> +5401137684577</ContactoLink></p>
        <p><ContactoLink href="mailto:danydeitu18@gmail.com"><i className="fa fa-envelope"></i> mariansport@gmail.com</ContactoLink></p>
      </ContactoContainer>
    </MailerContainer>
  );
}

export default Mailer;
