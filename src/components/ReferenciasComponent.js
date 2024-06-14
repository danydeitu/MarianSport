import React from 'react';
import styled from 'styled-components';

// Estilos con Styled Components
const ReferencesContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ReferencesTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const ReferencesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ReferenceCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  flex: 1 0 300px; /* Fuerza las tarjetas a tener un ancho máximo de 300px */
`;

const ReferenciaTitle = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;

const ReferenciaDescription = styled.p`
  color: #666;
`;

const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%; /* Hace que la imagen sea circular */
  margin-bottom: 10px;
`;

const ReferenciasComponent = ({ references }) => {
  return (
    <ReferencesContainer>
      <ReferencesTitle>Referencias</ReferencesTitle>
      <ReferencesList>
        {references.map((reference, index) => (
          <ReferenceCard key={index}>
            <AvatarImage src={reference.avatarUrl} />
            <ReferenciaTitle>{reference.title}</ReferenciaTitle>
            <ReferenciaDescription>{reference.description}</ReferenciaDescription>
          </ReferenceCard>
        ))}
      </ReferencesList>
    </ReferencesContainer>
  );
};

export default ReferenciasComponent;
