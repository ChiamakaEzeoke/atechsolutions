import React, { useEffect } from "react";
import styled from "styled-components";

import image1 from "../images/carousel imgs/image1.jpeg";
import image2 from "../images/carousel imgs/image2.jpg";
import image3 from "../images/carousel imgs/image3.jpeg";

const Carousel = () => {
  var slideIndex = 0;
  const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    if (slides[slideIndex - 1] !== undefined) {
      slides[slideIndex - 1].style.display = "block";
    } else {
      return;
    }
    setTimeout(showSlides, 10000);
  };
  useEffect(showSlides);
  return (
    <CarouselSection>
      <div className="slideshow-container" onLoad={showSlides}>
        <div className="mySlides fade">
          <img src={image1} alt="" />
          <div className="text">
            <h4> WE STAND WITH YOU</h4>
          </div>
        </div>

        <div className="mySlides fade">
          <img src={image2} alt="" />
          <div className="text">
            <h4> WE STAND WITH YOU</h4>
          </div>
        </div>

        <div className="mySlides fade">
          <img src={image3} alt="" />
          <div className="text">
            {" "}
            <h4> WE STAND WITH YOU</h4>
          </div>
        </div>
      </div>
      <br />
    </CarouselSection>
  );
};

const CarouselSection = styled.section`
  margin: 0em;
  z-index: 9;

  .mySlides {
    display: none;
  }
  img {
    margin-top: 0em;
    vertical-align: middle;
    height: 70vh;
    border: 2px dotted white;
    width: 100%;
  }
  color: grey;
  /* Slideshow container */
  .slideshow-container {
    height: 60vh;
    width: 100%;
    position: relative;
    margin: 0em;
  }

  /* Caption text */
  .text {
    color: rgb(207, 0, 0);
    background-color: white;
    font-size: 2em;
    text-spacing: 1.5;
    line-height: 1.5;
    padding: 0.2em 1em;
    position: absolute;
    margin: 0em auto;

    bottom: 10;
    width: 100%;

    text-align: center;
    z-index: 9;
  }
  .text h4 {
    color: white;
    background-color: #13274f;
  }
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 3s;
    animation-name: fade;
    animation-duration: 3s;
  }

  @-webkit-keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 0em;
  }

  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 550px) {
    .text {
      font-size: 1em;
    }
    img {
      max-width: 100%;
    }
  }
`;

export default Carousel;
