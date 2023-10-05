import { BiCurrentLocation, BiLogoGmail, BiPhone } from "react-icons/bi";
import { NavBar } from "../navBar/navBar";
import { useEffect } from "react";
export const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    // <div className="footer">
    //   <div className="row">
    //     {/* start of site map */}
    //     <div className="col-md-4 mt-5">
    //       <span className="title-text"> SITE MAP</span>
    //       <div class="map">
    //         <iframe
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6304666763085!2d7.477044474934913!3d9.097387290966688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a899107f5f3%3A0x76665f909042afad!2s11%20Thames%20Street%2C%20Maitama%20900001%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1694829723429!5m2!1sen!2sng"
    //           frameborder="0"
    //           allowfullscreen
    //           title="title"
    //         ></iframe>
    //       </div>
    //     </div>
    //     {/* end of site map */}

    //     {/* start of information */}
    //     <div className="col-md-4 mt-5">
    //       <span className="title-text">INFORMATION</span>
    //       <div className="mt-5 d-flex flex-row">
    //         <div className="">
    //           <span>
    //             <BiRightArrowAlt fontSize={20} />
    //             <span className="ms-2">Home</span>
    //           </span>
    //         </div>
    //         <div
    //           style={{
    //             marginLeft: "150px",
    //             display: "flex",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <span>
    //             <BiRightArrowAlt fontSize={20} />
    //             <span className="ms-2">About</span>
    //           </span>

    //           <span className="mt-2">
    //             <BiRightArrowAlt fontSize={20} />
    //             <span className="ms-2 ">
    //               <Link
    //                 style={{ textDecoration: "none", color: "white" }}
    //                 to="/our-team"
    //               >
    //                 OUR TEAM
    //               </Link>
    //             </span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     {/* end of information  */}

    //     {/* start of contact info */}
    //     <div className="col-md-4 mt-5">
    //       <span className="title-text">CONTACT INFO</span>
    //       <div className="d-flex flex-column mt-5">
    //         <span>
    //           <BiLocationPlus fontSize={20} />
    //           <span className="ms-2">
    //             11 Thames Street Maitama Abuja Nigeria
    //           </span>
    //         </span>
    //         <span className="mt-2">
    //           <BiPhone fontSize={20} />
    //           <span className="ms-2 ">(+234) 08030805200</span>
    //         </span>
    //         <span className="mt-2">
    //           <BiLogoGmail fontSize={20} />
    //           <span className="ms-2 ">
    //             <Link
    //               style={{ textDecoration: "none", color: "white" }}
    //               to="mailto:yuninconceptltd@gmail.com"
    //             >
    //               yuninconceptltd@gmail.com
    //             </Link>
    //           </span>
    //         </span>

    //         <span className="mt-2">
    //           <BiTime fontSize={20} />
    //           <span className="ms-2 ">Mon-Fri: 9:00am-5:00pm</span>
    //         </span>

    //         <span className="mt-2">
    //           <BiCheck fontSize={20} />
    //           <span className="ms-2 ">RC 934236</span>
    //         </span>
    //       </div>
    //     </div>
    //     {/* end of contact info  */}
    //   </div>
    // </div>

    <div className="">
      <NavBar klass={"navigation"} />
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <center>
              <h2>Contact Us</h2>
            </center>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4919140054594!2d7.649720378762069!3d11.15116776071344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2842b20cedfad%3A0xce18622ae8135eb0!2sAhmadu%20Bello%20University!5e0!3m2!1sen!2sng!4v1696511728133!5m2!1sen!2sng"
            frameborder="0"
            allowfullscreen
            title="t"
          ></iframe>
        </div>
        {/* <!-- End Google Maps --> */}

        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>get in touch with our team of highly trained professionls</p>

                <div className="info-item d-flex">
                  <i className="">
                    <BiCurrentLocation />
                  </i>
                  <div>
                    <h4>Location:</h4>
                    <p>
                      SUITE 8 HARUNA DANJA MOSQUE SHOPPING CENTRE OPP. 1st GATE
                      A.B.U ZARIA
                    </p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiLogoGmail />
                  </i>
                  <div>
                    <h4>Email:</h4>
                    <p> halahallltd@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="">
                    <BiPhone />
                  </i>
                  <div>
                    <h4>Call:</h4>
                    <p>(+234) 08030805200,+2348023582727</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>
            </div>

            <div className="col-lg-8">
              <form className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};
