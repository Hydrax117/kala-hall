import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiBadge,
  BiBriefcase,
  BiBuildings,
  BiBulb,
  //   BiExport,
  BiFoodMenu,
  BiGasPump,
  BiLaptop,
} from "react-icons/bi";

import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { ServiceCard } from "../components/service-card";

export const Services = () => {
  const catering = require("../images/catering.jpg");
  const pic2 = require("../images/img2.jpg");
  const pic3 = require("../images/img3.jpg");
  const constructionImg = require("../images/construction.png");
  const skill = require("../images/skill.jpg");
  const oil = require("../images/Oil-and-Gas.jpg");
  const printing = require("../images/printing.png");
  const repairs = require("../images/maintenance-technician.jpeg");
  const ict_traing = require("../images/ict-trainning.jpg");

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "Our Services";
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
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <center>
                  <h2 className="mt-5">Our Services</h2>
                </center>
              </div>
              <div className="row gy-5 mt-5">
                <ServiceCard
                  serviceName={"Solar Installation"}
                  serviceDesc={` We provide premier Solar Panel Installation Services,
          dedicated to harnessing the sun's power to fuel your energy
          needs. Our expert team manages every step, from consultation
          to installation, ensuring optimal positioning and performance.`}
                  image={pic2}
                  serviceIcon={<BiBulb />}
                />

                <ServiceCard
                  image={constructionImg}
                  serviceIcon={<BiBuildings />}
                  serviceName={"Construction & Estate Delelopment"}
                  serviceDesc={` Our company offers premier Construction & Estate Development
                services, tailored to transform visions into tangible
                realities. With an expert blend of innovative design and
                engineering precision, we undertake construction projects
                ranging from individual homes to expansive estates.`}
                />

                {/* end of service item */}
                <ServiceCard
                  image={ict_traing}
                  serviceIcon={<BiLaptop />}
                  serviceName={"ICT Training & Networking"}
                  serviceDesc={` Our company delivers cutting-edge ICT & Networking Services,
                designed to empower businesses in the digital age. We
                specialize in setting up, maintaining, and optimizing
                information and communication technology infrastructures`}
                />

                {/* end of service item */}
                <ServiceCard
                  image={pic3}
                  serviceIcon={<BiLaptop />}
                  serviceName={"Web Design and Maintainance"}
                  serviceDesc={` We offer premier Web Design & Maintenance Services tailored to
                your digital presence needs. Our skilled designers craft
                visually captivating websites that resonate with your target
                audience, while our maintenance team ensures optimal
                performance and uptime.`}
                />

                {/* end of service item */}
                <ServiceCard
                  image={printing}
                  serviceIcon={<BiBulb />}
                  serviceName={"Printing Services"}
                  serviceDesc={` Our company excels in providing top-tier Publishing Services & General Printing solutions. From bringing manuscripts to life with expert editorial and design guidance to delivering crisp, high-quality prints for diverse needs, we are your one-stop destination. Whether you're an author aiming for bestseller status or a business in need of standout printed materials, our dedicated team ensures precision, quality, and a touch of creativity in every project. `}
                />
                {/* end of service item */}
                <ServiceCard
                  image={oil}
                  serviceIcon={<BiGasPump />}
                  serviceName={`Oil and Gas import and export services`}
                  serviceDesc={` Our company stands at the forefront of the energy sector,
                offering specialized Oil & Gas Importation and Exportation
                Services. With a global network and industry expertise, we
                facilitate the seamless transfer of energy resources across
                borders.`}
                />
                {/* end of service item */}

                <ServiceCard
                  image={catering}
                  serviceIcon={<BiFoodMenu />}
                  serviceName={`Catering Training`}
                  serviceDesc={`We offer an elite Catering Training Service,
                   designed to cultivate culinary excellence and professional acumen. 
                   Under the guidance of seasoned chefs and industry professionals,
                    our programs cover both the art and business of catering`}
                />
                {/* end of service item */}
                <ServiceCard
                  image={repairs}
                  serviceIcon={<BiBriefcase />}
                  serviceName={`Repairs and maintenance and ICT Consultancy services`}
                  serviceDesc={`
                  Our company provides a holistic suite of Repairs, Maintenance, and ICT Consultancy Services, ensuring your technology infrastructure performs at its peak. With a team of certified technicians, we address hardware and software issues swiftly, ensuring minimal downtime.
                        `}
                />
                {/* end of service item */}

                <ServiceCard
                  image={skill}
                  serviceIcon={<BiBadge />}
                  serviceName={`Skill aquisition`}
                  serviceDesc={`
                    We provide hands-on training in a wide range of disciplines,
                     ensuring participants gain practical knowledge and real-world expertise.
                      Whether you're looking to enhance your current skill set or embark on a new career path,
                       our seasoned trainers guide you every step of the way, transforming potential into proficiency.
                        `}
                />
                {/* end of service item */}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
