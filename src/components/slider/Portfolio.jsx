import React from "react";
import "./Portfolio.css";

const Secciones = () => {
  
  return (
    <div className="text">
      <h2>Nuestros clientes</h2>

     
      <div className="secciones">
        <section>
          <div className="box">

          <article>
              <a href="https://bazar-tech.vercel.app/"
               target="_blank"
               rel="noreferrer">
              <img src="../../img/bazar.png" />
              <p>Bazar Tech e-commerce</p>
              </a>
            </article>

          <article>
              <a href="https://sol-and-luna-casa-de-campo.vercel.app/"
             target="_blank"
             rel="noreferrer">
              <img src="../../img/SOLY.jpg" />
          <p>Sol y Luna Alquiler</p>
          </a>
          </article>

            <article>
              <a href="https://gourmet-resto.vercel.app/"
                target="_blank"
                rel="noreferrer">
              <img src="../../img/menumar.png" />
              <p>Resto-Mar</p>
              </a>
            </article>

            <article>
             <a href="https://c4-g17-m.vercel.app/"
                target="_blank"
                rel="noreferrer">
              <img src="../../img/noCountryCinenema.jpg" />
             <p>NC Cinema</p>
              </a>

            </article>

            <article>
              <a href="https://"
                target="_blank"
                rel="noreferrer">
              <img src="../../img/petfood.png" />
              <p>Pet Food</p>
              </a>
            </article>

            <article>
            <a href="https://www.eventostheplanner.website/"
                target="_blank"
                rel="noreferrer">
              <img src="../../img/planner.png" />
              <p>Eventos The Planner</p>
              </a>
            </article>

           
            
          </div>
        </section>
      </div>
    </div>
  );
};
export default Secciones;