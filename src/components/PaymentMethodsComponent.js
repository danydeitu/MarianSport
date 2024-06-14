import React from 'react';
import styled from 'styled-components';

// Creamos un componente con Styled Components
const PaymentMethodsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const PaymentMethodsTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const PaymentMethodsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PaymentMethodCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  flex: 1 0 300px; /* Fuerza las tarjetas a tener un ancho máximo de 300px */
`;

const PaymentMethodName = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;

const PaymentMethodDescription = styled.p`
  color: #666;
`;

const PaymentMethodsComponent = ({ paymentMethods }) => {
  return (
    <PaymentMethodsContainer>
      <PaymentMethodsTitle>Métodos de Pago</PaymentMethodsTitle>
      <PaymentMethodsList>
        {paymentMethods.map((method, index) => (
          <PaymentMethodCard key={index}>
            <PaymentMethodName>{method.name}</PaymentMethodName>
            <PaymentMethodDescription>{method.description}</PaymentMethodDescription>
          </PaymentMethodCard>
        ))}
      </PaymentMethodsList>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethodsComponent;
