import React from "react";

import styled from "styled-components";

import Carousel from "./Carousel";

const Header = () => {
  return (
    <Mainheader>
      <div>
       
        <div><Carousel/></div>
      </div>
    </Mainheader>
  );
};

const Mainheader = styled.header`
height:70vh;

 
`;

export default Header;
