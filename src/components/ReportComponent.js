import React from "react";

import styled from "styled-components";

const ReportComp = () => {
  return (
    <ReportDiv>
      <form onSubmit={(e)=>{e.preventDefault()}}>
       
        <label htmlFor='email'>Email :
        <input type="email" placeholder="email" required/>
        </label> <br/>
        <label htmlFor="nameOfOffender">
          Name of assailant : <input type="text" placeholder="name Of Offender" id="name" required/>{" "}
        </label> <br/>
        
        <label htmlFor='details'>Details of assault : <br/>
         <textarea id='details' required></textarea></label> <br/>
         <label htmlFor='evidence'> Evidence :
           <input type ='file'/>
         </label> <br/>
         <input type='submit' value='SUBMIT' id='submit'/>
      </form>
    </ReportDiv>
  );
};

const ReportDiv = styled.div`
margin:2em;
form{
  width:100%;
  margin:0em auto;
  padding: 2em;
  background-color: #13274f;
  color:white;
}
input{
  padding:0.5em;
  margin:0.5em;
}
textarea{
  height:15vh;
  width:50vw;
  
}
#submit{
  background-color:yellow;
  color:#13274f;
}
`;

export default ReportComp;
