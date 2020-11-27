import React from "react";

import styled from "styled-components";

import Carousel from "./Carousel";
import img from "../images/1014891-cool-morbid-wallpaper-1920x1200.jpg";

const Header = () => {
  return (
    <Mainheader>
      <div>
        <img src={img} alt="" />
        <div><Carousel/></div>
      </div>
    </Mainheader>
  );
};

const Mainheader = styled.header`
margin-right:-2em;

  img {
    height: 70vh;
    width: 100%;
    margin-right:-2em;
  }
`;

export default Header;
