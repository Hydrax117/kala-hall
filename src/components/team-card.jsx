import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

export const TeamCard = ({ image, name, role }) => {
  return (
    <div
      className="col-xl-4 col-md-6 d-flex"
      data-aos="zoom-in"
      data-aos-delay={600}
    >
      <div className="team-member">
        <div className="member-img">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="member-info">
          <div className="social">
            <span className="s-icons">
              <BiLogoTwitter />
            </span>
            <span className="s-icons">
              <BiLogoFacebook />
            </span>
            <span className="s-icons">
              <BiLogoInstagram />
            </span>
            <span className="s-icons">
              <BiLogoLinkedin />
            </span>
          </div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};
