import React from "react";
import "./About.css";

const About: React.FC  = () => {
  return (
     <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de Nosotros </h3>
        <p>Somos un taller Mecanico Integral que nos especializamos en</p>
        <p>
       Distribución</p>
         <p> Tren delantero</p>
         <p> Aire acondicionado</p>
         <p>Calefacción</p>
         <p>Embragues
        </p>
      
        <p>Frenos</p> 
      
        <p>Trabajos con garantia!</p>
      </div>
      <div className="about-img">
        <img
          src="\img\banner.jpg"  width="800" height="650" 
          alt="about"/>
      </div>
    </div>
  );
};

export default About;