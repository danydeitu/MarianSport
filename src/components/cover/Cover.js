import React from "react";
import "./Cover.css";
import coverVideo from "../../media/VideoCover4.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <title>AGENCIA DE DISEÑO WEB</title>
      <title>DISEÑO Y DESARROLLO DE SOFTWARE</title> 
      <h3>Web Simple | Landing Page | Profesional | E-commerce | Presencia en Internet a Empresa o Negocio </h3>
    </div>
  );
};

export default Cover;