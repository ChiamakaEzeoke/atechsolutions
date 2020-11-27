import React, { useState } from "react";
import styled from "styled-components";

const Signin = () => {
  const [isSignedin, setisSignedin] = useState(false);
  return (
    <Signinsection>
      <h2>WELCOME</h2>
      <hr/>
      <p>fill your data to enter</p>
      {isSignedin ? (
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <label htmlFor="user">
            USER <br />
            <input type="text" placeholder="username" id='user' required/>
          </label>{" "}
          <br />
          <label htmlFor="password">
            PASSWORD <br />
            <input type="password" placeholder="username" />
          </label>{" "}
          <br />
          <input type="submit" value="Submit" id="submit" />
        </form>
      ) : (
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <label htmlFor="user">
            set username <br />
            <input type="text" placeholder="username" id="user" />
          </label>{" "}
          <br />
          <label htmlFor="email">
            Email: <br />
            <input type="email" placeholder="email" id="email" />
          </label>
          <br />
          <label htmlFor="password">
            set password: <br />
            <input type="password" placeholder="password" id="password" />
          </label>{" "}
          <br />
          <label htmlFor="user">
            set bio: <br />
            <textarea id="bio"></textarea>
          </label> <br></br>
          <input type="submit" value="SUBMIT" id="submit" />
        </form>
      )}
    </Signinsection>
  );
};

const Signinsection = styled.section`
padding:2em;
font-size:large;
h2{
    text-align:center;
    color:#13274f;
    
}
p{
    margin: 0.5em;
    text-align:center;
}
form{
margin:0em auto;
background-color:#13274f;
color:white;
padding:2em;
}
input{padding:0.5em;
margin-top:0.5em;
margin-bottom:0.5em;}
#submit{
    background-color:yellow;
}
`;
export default Signin;
