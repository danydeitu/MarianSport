import React from "react";
import "./About.css";

const About = () => {
  return (
     <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de Nosotros </h3>
        <p>Somos una agencia Digital de Diseño y Desarrollo Web que nos dedicamos a</p>
        <p>
        Crear Paginas web Responsives  que son adaptables a Smartphone Tablets Notebooks y Pc de escritorio</p>
         <p>Trabajos de diseños y creacion de Paginas Web desde inicio</p>
         <p> Modificamos o escalamos su pagina existente</p>
         <p>Diseño de logo</p>
         <p>Posicionamiento en buscadores 
        </p>
      
        <p>Landing Page </p> 
        <p>Paginas Web simple</p>
          <p>E-commerce </p>
          <p>Paginas Autoadministrables</p>
          <p>Dominio incluido el 1er año</p>
          <p>Hosting Gratis 1er año </p>
          <p>Seguridad gratis SSL HTTPS 1er año</p>
        
        <p>PROMO AÑO NUEVO!</p>
      </div>
      <div className="about-img">
        <img
          src="\img\responsive.webp"  width="750" height="550" 
          alt="about"/>
      </div>
    </div>
  );
};

export default About;