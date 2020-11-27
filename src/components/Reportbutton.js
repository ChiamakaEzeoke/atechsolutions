import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Reportbutton = () => {
  return (
    <Styledbutton>
      {" "}
      <Link to="/report">
        {" "}
        Report a case of sexual harrassment today and save another
      </Link>
    </Styledbutton>
  );
};
const Styledbutton = styled.button`
  width: 95vw;
  padding: 0.5em;
  background-color: whitesmoke;
  font-size: large;
  margin: -1.5em 0.5em 0.5em 0em;
  border: none;
`;

export default Reportbutton;
