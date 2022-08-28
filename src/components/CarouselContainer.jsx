import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function ControlledCarousel() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <Carousel className="carrousel" activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
            <img style={{ height: "100vh" }} className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
               <h2>First title example</h2>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img style={{ height: "100vh" }} className="d-block w-100" src={image2} alt="Second slide" />

            <Carousel.Caption>
               <h2>Second title example</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img style={{ height: "100vh" }} className="d-block w-100" src={image3} alt="Third slide" />

            <Carousel.Caption>
               <h2>Third title example</h2>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

export default ControlledCarousel;
