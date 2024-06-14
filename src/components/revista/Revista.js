import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4; /* Color de fondo */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const StyledParagraph = styled.p`
  color: #333;
  line-height: 1.5;

`;


const Revista = () => {
  return (
    <StyledContainer>
    <StyledParagraph>
    <div>
     
        <h4>Descubre por qué tu negocio necesita tener presencia en línea</h4>  <p>En la era
        de la conectividad digital, el mundo se ha vuelto más accesible que
        nunca. Toda la información que necesitas está al alcance de tu mano
        gracias a Internet, un espacio asombroso que ha transformado la forma
        en que vivimos, nos comunicamos y compartimos experiencias.
      </p>

      <p>
        Razones para tener una página web: Oportunidades de Negocio y Clientes
        Potenciales: Sin una presencia en línea, tu empresa está perdiendo
        valiosas oportunidades de negocio. La web es un vasto mercado donde los
        clientes potenciales pueden descubrirte y conectarse contigo.
      </p>

      <p>
        Transforma tu Marketing Digital: Una página web no solo es una
        herramienta, es una estrategia. Con la publicidad web, puedes llegar a
        una audiencia amplia de manera efectiva. Es una clave para el crecimiento
        empresarial.
      </p>

      <p>
        Genera Confianza y Credibilidad: Tu presencia en línea no solo es una
        vitrina, también es una herramienta para construir confianza. Una página
        web bien diseñada transmite profesionalismo y credibilidad, elementos
        esenciales para atraer clientes.
      </p>

      <p>
        Costo ecónomico: Contrario a la creencia común, tener una página web no
        tiene que ser costoso. Construir una presencia en línea efectiva puede
        ser alcanzable para cualquier tipo de negocio, incluso con un presupuesto
        limitado.
      </p>

      <p>
        Internet es Tu Puerta de Entrada al Éxito: En un mundo donde más de 2
        millones de personas están conectadas, la internet se presenta como el
        lugar ideal para buscar audiencia, atraer clientes y ejercer influencia.
        No necesitas un sitio web gigante , simplemente uno que informe a las
        personas sobre tu empresa, productos, servicios y detalles de contacto.
      </p>

      <p>
        El mundo digital está en constante expansión, y si buscas audiencia, más
        clientes o simplemente influir, la Internet es el lugar donde deberías
        estar. ¡Haz que tu negocio forme parte de esta revolución digital ahora
        mismo!
      </p>
    </div>
    </StyledParagraph>
    </StyledContainer>
   
  );
};

export default Revista;
