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
import { BiLogoGmail, BiPhone, BiTime } from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <div className="row sub-header">
        <div className="col-md-4">
          <p style={{ lineHeight: "25px" }} className="ms-5">
            <BiTime /> Mon - Fri 9:00 Am to 5:00 Pm
          </p>
        </div>
        <div className="col-md-4">
          <p style={{ lineHeight: "25px" }} className="ms-5">
            <BiLogoGmail /> halahallltd@gmail.com
          </p>
        </div>
        <div className="col-md-4">
          <p style={{ lineHeight: "25px" }} className="ms-5">
            <BiPhone /> 08030805200, +2348023582727
          </p>
        </div>
      </div>
      <div className="footer">
        <h6> @2023 KALA HALL LTD. RC RC 934940</h6>
        <h4 style={{ float: "right", marginTop: "0px" }}>
          back to top{" "}
          <a href="#navigation">
            <BiUpArrowAlt fontSize={40} color="white" />
          </a>
        </h4>
      </div>
    </>
  );
};
