import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaHome, FaBookReader, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const toggleVisibility = () => {
    if (document.getElementById("menudropdown").style.display === "none") {
      document.getElementById("menudropdown").style.display = "block";
    } else if (
      document.getElementById("menudropdown").style.display === "block"
    ) {
      document.getElementById("menudropdown").style.display = "none";
    } else {
      document.getElementById("menudropdown").style.display = "none";
    }
  };
  return (
    <NavMenu>
      <ul>
        <Link to="/">
          <li>
            <h3>
              {" "}
              <span className="icon homeicon">
                <FaHome />
              </span>{" "}
              SSH
            </h3>
          </li>
        </Link>
        <li className="HideM">
          <Link>
            {" "}
            <span>
              <FaBookReader />
            </span>{" "}
            Blog
          </Link>
        </li>
        <li className="HideM">
          {" "}
          <Link>Get therapy</Link>{" "}
        </li>
        <li className="HideM">
          <Link to="/report">Report a case</Link>
        </li>
        <li className="HideM " id="Vdropdown">
          Vounteer{" "}
          <span>
            <FaCaretDown />
          </span>
          <ul id="Vdropdownitem">
            <li>
              <Link to='/signin'>sign in</Link>
            </li>
            <li>
              <Link to='/signin'>sign up</Link>
            </li>
          </ul>
        </li>
        <li className="icon menudropdown" onClick={toggleVisibility}>
          <FaBars />
        </li>
      </ul>
      <hr />

      <ul id="menudropdown" className="ShowM ">
        <li className="">
          {" "}
          <Link>
            <span>
              <FaBookReader />
            </span>{" "}
            Blog
          </Link>
        </li>
        <Link> <li className=""> Get therapy </li></Link>
        <Link to='/report'><li className="">Report a case</li></Link>
        <li className=" " id="Vdropdown">
          Vounteer{" "}
          <span>
            <FaCaretDown />
          </span>
          <ul id="Vdropdownitem">
          <Link to='/signin'> <li>sign in</li></Link>
          <Link to='/signin'> <li>sign up</li></Link>
          </ul>
        </li>
      </ul>
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  position: sticky;
  top: 0;
  background-color: #13274f;
  z-index: 20;
  margin-right:-2em;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline-flex;
    padding: 1em 2.4em 1em 0.5em;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }
  li h3 {
    margin-right: 3em;
    font-size: xx-large;  
  }
  li h3 >span{
    color: yellow;
  }
  li.menudropdown {
    color: yellow;
    font-size: x-large;

    display: none;
  }
  #Vdropdown:hover #Vdropdownitem {
    display: block;
  }
  li #Vdropdownitem {
    display: none;
  }
  li #Vdropdownitem li {
    padding: 0.1em;
    display: block;
  }
  #menudropdown {
    display: none;
  }
  .ShowM li {
    display: none;
  }

  @media screen and (max-width: 550px) and (min-width: 270px) {
    li.HideM {
      display: none;
    }
    li.menudropdown {
      margin-left: -4em;
      float: right;
      font-weight: bolder;
      display: block;
    }
    #menudropdown {
      display: none;
      background-color: black;
      opacity: 0.6;
    }

    .ShowM li {
      display: block;
    }
  }
`;

export default Navbar;
