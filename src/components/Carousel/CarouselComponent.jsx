import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
import Image1 from "../../media/bazar.png";
import Image2 from "../../media/SOLY.jpg";
import Image3 from "../../media/menumar.png";
import Image4 from "../../media/petfoot.png";
import Image5 from "../../media/planner.png";
import Image6 from "../../media/noCountryCinenema.jpg";



const images = [Image1, Image2, Image3 ,Image4,Image5,Image6];

const CarouselComponent = () => {
  return (
    <div className="carousel">
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`image-${index}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
