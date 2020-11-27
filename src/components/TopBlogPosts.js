import React from "react";

import styled from "styled-components";
import Reportbutton from "./Reportbutton";

const TopBlogPosts = () => {
  return (
    <BlogSection>
      <div className="blogsubsection">
        <h2 className="blogsubsection__header">Survivor Stories</h2>
        <hr />
        <div className="blogsubsection__posts">
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">
              data and information <br />
              <span className="blogsubsection__postFooter">read more</span>
            </p>
          </article>
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">
              data and information <br />
              <span className="blogsubsection__postFooter">read more</span>
            </p>
          </article>
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">
              data and information
              <br />
              <span className="blogsubsection__postFooter">read more</span>
            </p>
          </article>
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">
              data and information <br />
              <span className="blogsubsection__postFooter">read more</span>
            </p>
          </article>
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">data and information</p>
            <span className="blogsubsection__postFooter">read more</span>
          </article>
          <article className="blogsubsection__post">
            <h4 className="blogsubsection__postHeader">header</h4>
            <p className="blogsubsection__postBody">
              data and information
              <br />
              <span className="blogsubsection__postFooter">read more</span>
            </p>
          </article>
        </div>
      </div>

      <div className="blogsubsection__posts"></div>

      <Reportbutton />
    </BlogSection>
  );
};

const BlogSection = styled.section`
  background-color: #a3c1ad;
  padding: 1em 0.5em 0em 0.5em;
  margin: 0em 0em 0em 0em;
  color: black;
  font-size: large;

  .blogsubsection {
    margin: 2em;
  }
  .blogsubsection__posts {
    background-color: #a3c1ad;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding:1em;
    margin:1.5em;
   
  }
  .blogsubsection__header {
    text-align: center;
    margin-top: 3em;
    color: #13274f;
  }
  .blogsubsection__post {
    padding: 1em;
    font-size: medium;
    margin: 1em;
    width:30%;
    background-color:yellow;
  }
  .blogsubsection__postHeader {
    font-size: x-large;
    color: #13274f;

  }
  .blogsubsection__postFooter {
    font-size: small;
    color: #13274f;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .blogsubsection__header {
      text-align: center;
      margin-top: 7em;
    }
  }
  @media only screen and (max-width: 450px) {
    .blogsubsection {
      margin: 2em -1em;
    }
    .blogsubsection__posts {
     
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .blogsubsection__post {
      padding: 1em;
      font-size: medium;
      margin: 0.5em;
      width:100%;
    }
  }
`;
export default TopBlogPosts;
