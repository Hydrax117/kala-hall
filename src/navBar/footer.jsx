// import {
//   BiCheck,
//   BiLocationPlus,
//   BiLogoGmail,
//   BiPhone,
//   BiRightArrowAlt,
//   BiTime,
// } from "react-icons/bi";
// import { Link } from "react-router-dom";

import { BiUpArrowAlt } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="footer">
      <h6> @2023 KALA HALL LTD. RC RC 934940</h6>
      <h4 style={{ float: "right", marginTop: "0px" }}>
        back to top{" "}
        <a href="#navigation">
          <BiUpArrowAlt fontSize={40} color="white" />
        </a>
      </h4>
    </div>
  );
};
