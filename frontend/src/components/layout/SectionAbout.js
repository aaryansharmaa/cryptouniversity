import "./css/section-about.css";

import layer from "../../assets/layers/about.png";

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <img
        className="img-fluid about-layer"
        width="100%"
        object-fit="cover"
        src={layer}
        alt=""
      />
      <div className="about-container">
        <div className="heading-container">
          <h3 className="heading-secondary text-gradient">About us</h3>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            magnam vitae in, sint at reiciendis officia possimus sapiente quae
            quas velit nostrum architecto amet autem adipisci expedita
            exercitationem voluptas quo.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
