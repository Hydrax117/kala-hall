import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "../navBar/navBar";
import { Footer } from "../navBar/footer";
import { useState, useEffect } from "react";

export const About = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    AOS.init();
    document.title = "About us";
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
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
          <div className="ovh bg">
            <div className="container vh-100 " data-aos="fade-up">
              <center>
                {" "}
                <h2 className="mt-5">About Kala Hall Ltd</h2>
              </center>
              <p>
                Founded on a vision of redefining excellence, [Company Name] has
                grown to be a leading figure in the diverse sectors we operate
                in. Our multi-faceted approach to problem-solving and project
                execution stems from our belief in integration, innovation, and
                ingenuity.
              </p>
              <p>
                <strong>Rooted in Construction:</strong> Our journey began in
                the construction sector, where we combined traditional
                methodologies with innovative techniques, setting the benchmark
                for quality and excellence. Today, we stand as a testimony to
                numerous infrastructural masterpieces that bear our signature
                touch.
              </p>
              <p>
                <strong>Harnessing Natural Resources: </strong>
                With our expertise in borehole drilling, we tap into nature's
                reservoirs, bringing forth the essential elixir of life to
                countless communities. Our foray into the oil and gas import and
                export segment further establishes our commitment to harnessing
                and distributing natural resources responsibly and efficiently.
              </p>
              <p>
                <strong>Electrifying Horizons: </strong>
                Our endeavors in electrification have been instrumental in
                illuminating lives and landscapes. Coupled with our electric and
                electronic supply chain, we ensure that our clientele always has
                access to the best in class, powering their ambitions and
                aspirations.
              </p>
              <p>
                <strong>Bridging the Digital Divide: </strong>
                As the world transitioned to the digital era, we saw the immense
                potential of networking and ICT. We committed ourselves not just
                to provide seamless networking solutions but also to foster
                education, offering comprehensive ICT training to budding
                professionals.
              </p>
              <p>
                <strong>Empowering the Digital Age: </strong>
                Recognizing the power of the digital toolset, our CT Gadget
                supply and web design and maintenance services were born.
                Through these, we ensure businesses and individuals stay
                relevant, functional, and impactful in an increasingly digital
                world.
              </p>
              <p>
                <strong>Shaping Skylines and Stories: </strong>
                Our estate development arm is more than just about brick and
                mortar; it's about building communities, homes, and futures.
                Every estate we develop is a canvas of dreams, aspirations, and
                stories waiting to unfold.
              </p>
              <p>
                At KALA HALL LTD, we don't just offer services; we forge
                partnerships, build legacies, and shape futures. Our rich
                tapestry of projects, services, and solutions stands testament
                to our unwavering commitment to excellence and our relentless
                pursuit of perfection.
              </p>
              Join us, as we continue to sculpt the landscapes of tomorrow,
              driven by passion, precision, and promise. Welcome to KALA HALL
              LTD - where dreams are built.
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};
