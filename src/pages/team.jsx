import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { TeamCard } from "../components/team-card";

export const Team = () => {
  const kamil = require("../images/kamil1.jpg");
  const blank = require("../images/bank_male.jpg");
  const blank_female = require("../images/blank_female.jpg");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "Our Team";
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading === true ? (
        <>
          <div class="spinner-wrapper" style={{ background: "black" }}>
            <div class="spinner">
              <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavBar klass={"navigation"} />
          <div
            className="
          "
            style={{ padding: "20px" }}
          >
            <section id="team" className="team mt-5">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <center>
                    <h2>Board of Directors</h2>
                  </center>
                </div>
                <div className="row gy-5 mt-5">
                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Abubakar Yunusa."}
                    role={"Director"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Muhammad Rilwan                    "}
                    role={"Director"}
                  />
                  {/* end of team member */}
                </div>
              </div>
            </section>

            <section id="team" className="team mt-5">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <center>
                    <h2>Management Team</h2>
                  </center>
                </div>

                <div className="row gy-5 mt-5">
                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Abubakar Yunusa"}
                    role={"Managing Director/CEO"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Barrister M. K. B. Musa"}
                    role={"Company Secretary/Legal Adviser"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Muhammad Rilwan"}
                    role={"Director Administration"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={blank}
                    name={"Haruna Daddau"}
                    role={"Director Finance and supply"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={kamil}
                    name={"Buhari Kamil"}
                    role={"Director ICT"}
                  />
                  {/* end of team member */}

                  {/* start of team member */}
                  <TeamCard
                    image={blank_female}
                    name={"Babaita Abdulazeez Taiwo"}
                    role={"Director Projects and Engineering Services"}
                  />
                  {/* end of team member */}
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};
