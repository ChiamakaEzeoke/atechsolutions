import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Volunteers = () => {
  return (
    <VolunteerSection>
      <h3>Meet Our Volunteers</h3>
      <hr/>
      <div>
      <article>
        <h5>Name :</h5>
        <p>profession :</p>
        <p>duties :</p>
      </article>

      <article>
        <h5>Name :</h5>
        <p>profession :</p>
        <p>duties :</p>
      </article>

      <article>
        <h5>Name :</h5>
        <p>profession :</p>
        <p>duties :</p>
      </article>

      <article>
        <h5>Name :</h5>
        <p>profession :</p>
        <p>duties :</p>
      </article>
      </div>
      <section>
          <p>Are you a lawyer ?</p> 
         <p> a human rights activist ? </p>
         <p>a clinical psychologist</p>
         <p>then what are you waiting for <button><Link to='/signin'>SIGN UP</Link></button> </p>
      </section>
    </VolunteerSection>
  );
};

const VolunteerSection = styled.section`
  padding: 2em;
  background-color: WHITE;
  
margin-right:-2em;

  h3 {
    text-align: center;
    color: #13274f;
    letter-spacing: 2;
    font-size: x-large;
  }
  div{
      font-size:large;
      margin-top:2em;
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      flex-wrap:wrap;

  }
  article{
      width:50%;
      padding:1em;
  }
  section{
      padding:2em;
      font-size:large;
      width:100%;
      text-align:center;
      background-color:yellow;
      margin:0em auto;
  }
`;

export default Volunteers;
