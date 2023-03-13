import "./css/section-hero.css";

import wavyImg4 from "../../assets/layers/hero-wavy4.png";
import MainNavigation from "./MainNavigation";

const SectionHero = () => {
  return (
    <section className="hero" id="mint">
      <MainNavigation />
      <br />
      <div className="heading-container">
        <h2 className="heading-secondary text-color">Crypto University</h2>
      </div>
      <br />
      <br />
      <div className="heading-container ">
        <p className="text-sizing">
          Welcome to Crypto University! Let's mint some NFTs 🚀
        </p>
      </div>
      <div className="wavy wavy-4">
        <img
          className="img-fluid"
          src={wavyImg4}
          // alt="pattern"
          width="100%"
          object-fit="cover"
        />
      </div>
    </section>
  );
};

export default SectionHero;
