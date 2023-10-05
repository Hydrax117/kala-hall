import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export const Linkk = styled(Link)`
  text-decoration: none;
  color: white;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid white;
  padding: 6px;
  &:hover {
    color: red;
    border-bottom-color: red;
  }
`;
export const NavBar = ({ klass }) => {
  const logo = require("../images/logo.png");
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // const selectHeader = document.getElementById("navigation");
  // if (selectHeader) {
  //   document.addEventListener("scroll", () => {
  //     window.scrollY > 100
  //       ? selectHeader.classList.add("sticked")
  //       : selectHeader.classList.remove("sticked");
  //   });
  // }

  return (
    <>
      <nav className={klass} id="navigation">
        <div className="logo">
          {/* <h1>KALA HALL NIG LTD</h1> */}
          <img src={logo} alt="" srcset="" className="logoo" />
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Linkk to="/"> HOME</Linkk>
            </li>
            <li>
              <Linkk to="/our-services">OUR SERVICES</Linkk>
            </li>
            <li>
              <Linkk to="/about">ABOUT US</Linkk>
            </li>

            <li>
              <Linkk to="/contact-us">CONTACT US</Linkk>
            </li>

            <li>
              <Linkk to="/our-team">OUR TEAM</Linkk>
            </li>

            <li>
              <Linkk style={{ color: "white" }}>RC 934940</Linkk>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
  // return (
  //   <>
  //     {/* <div className="opening">
  //       <p>
  //         <BiCheckDouble className="ms-5" /> RC: 934940
  //       </p>
  //       <p>
  //         <BiTime className="ms-5" /> Mon - Fri 9:00 Am to 5:00 Pm{" "}
  //       </p>
  //       <p>
  //         <BiMailSend className="ms-5" /> Abc@gmail.com{" "}
  //       </p>
  //       <p>
  //         <BiPhone className="ms-5" /> (+234) 8035770272
  //       </p>
  //     </div> */}
  //     {/* <div className="nav navbar-transparent position-absolute w-100" id="nav"> */}
  //     <div className="nav" id="nav">
  //       <div className="logo">
  //         {/* <h1>KALA HALL NIG LTD</h1> */}
  //         <img src={logo} alt="" srcset="" className="logoo" />
  //       </div>
  //       <div
  //         className="m-bar"
  //         onClick={() => {
  //           document.getElementById("nav").classList.add("ht");
  //         }}
  //       >
  //         <div className="av">
  //           <BiMenu fontSize={50} id="av" />
  //         </div>
  //       </div>

  //       <div className="navItems">
  //         <ul className="ulist" id="ulist">
  //           <li>
  //             <Linkk to="/">HOME</Linkk>
  //           </li>
  //           <li>
  //             <Linkk to="/">ABOUT THE CENTRE</Linkk>
  //           </li>
  //           <li>
  //             <Linkk to="/">CONTACT US</Linkk>
  //           </li>
  //           <li>
  //             <Linkk to="/our-team">OUR TEAM</Linkk>
  //           </li>
  //           <li style={{ color: "green" }}>RC 934236</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </>
  // );
};
