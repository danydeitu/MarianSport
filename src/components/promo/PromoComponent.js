import React from "react";
import styled from "styled-components";

// Estilo del contenedor principal
const PromoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 26px 0;
 

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

// Estilo del título
const Title = styled.div`
  margin-bottom: 20px;
  text-align: center; /* Centrar el texto del título */

  h1 {
    font-size: 22px;
    color: #0c57fb;
  }
`;

// Estilo de promoción
const PromoCard = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 300px;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #0c57fb;
  }

  p {
    color: #555;
  }

  .precio {
    margin-top: 20px;
    h2 {
      font-size: 20px;
      color: #0c57fb;
    }
    p {
      color: #555;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    width: calc(33.33% - 20px); /* Ajuste para que tres cuadros entren en una fila */
    max-width: 300px; /* Añadir un ancho máximo para asegurar que no se vuelvan demasiado grandes */
  }
`;

const PromoComponent = () => {
  return (
    <PromoContainer>
      <Title>
        <h1>Promo</h1>
      </Title>
      <PromoCard>
        <h2>Web simple o Single Page</h2>
        <p>
          Ideal para quienes están empezando y necesitan una página web para
          presentarse, mostrar sus servicios o productos en internet
        </p>
        <div className="precio">
          <h2>Alojamiento incluido por 1 año</h2>
          <h2>Dominio incluido por 1 año</h2>
          <h2>Seguridad SSL incluido por 1 año</h2>
          <p>Desde $ 65.000</p>
          <p>Latam USD 80</p>
          <h2>Unico pago</h2>
        </div>
      </PromoCard>
      <PromoCard>
        <h2>DISEÑO WEB </h2>
        <p>
          Para proyectos más grandes o rediseños. Muestra más detalles sobre tu
          formación, experiencia laboral, marca y detalle servicios en tu sitio
          web
        </p>
        <div className="precio">
          <h2>Alojamiento incluido por 1 año</h2>
          <h2>Dominio incluido por 1 año</h2>
          <h2>Seguridad SSL incluido por 1 año</h2>
          <p>Desde $ 100.000</p>
          <p>Latam USD 130</p>
          <h2>Unico pago</h2>
        </div>
      </PromoCard>
      <PromoCard>
        <h2>DISEÑO WEB AUTOGESTIONABLE</h2>
        <p>
          Para tiendas online y/o marcas que producen contenido y servicios y
          quieren dar a conocer aún más sus servicios.incluye carrito de compras
        </p>
        <div className="precio">
          <h2>Alojamiento incluido por 1 año</h2>
          <h2>Dominio incluido por 1 año</h2>
          <h2>Seguridad SSL incluido por 1 año</h2>
          <p>Desde $ 180.000</p>
          <p>Latam USD 200</p>
          <h2>Unico pago</h2>
        </div>
      </PromoCard>
    </PromoContainer>
  );
};

export default PromoComponent;
