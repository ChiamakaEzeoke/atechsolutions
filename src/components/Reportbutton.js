import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Reportbutton = () => {
  return (
    <Link to="/report">
    <Styledbutton>
      {" "}
     
        {" "}
        Report a case of sexual harrassment today and save another
    
    </Styledbutton>
    </Link>
  );
};
const Styledbutton = styled.button`
  width: 95vw;
  padding: 0.5em;
  background-color: rgb(185, 7, 7);
  font-size: large;
  margin: -1.5em 0.5em 0.5em 0em;
  border: none;
  cursor:pointer;
  color:white;
  a{
    color:white;
  }
`;

export default Reportbutton;
