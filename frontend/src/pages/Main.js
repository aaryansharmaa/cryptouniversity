import SectionHero from "../components/layout/SectionHero";
import SectionMint from "../components/layout/SectionMint";
import SectionAbout from "../components/layout/SectionAbout";
import SectionFAQ from "../components/layout/SectionFAQ";
import Footer from "../components/layout/Footer";
import "../App.css";

function Main() {
  return (
    <div className="App">
      <SectionHero />
      <SectionMint />
      <SectionAbout />
      <SectionFAQ />
      <Footer />
    </div>
  );
}

export default Main;
