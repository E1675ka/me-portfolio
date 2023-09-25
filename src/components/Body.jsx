import Cards from "./cards";
import CardData from "./CardData";
import Img from "./imgData";
import Image from "./img";
import Hero from "./Hero";
/* Importing styles */
import "./styles/body.css";
import "./styles/hero.css";
/* Importing styles ending*/
import { Projects } from "./Projects";
export default function Body(props) {
  const cardElement = CardData.map((cards) => {
    return (
      <Cards key={cards.id} title={cards.title} sentence={cards.sentence} />
    );
  });
  const imgElement = Img.map((images) => {
    return <Image img={images.img} />;
  });
  return (
    <>
      {/* Hero section */}
      <div className="hero-container">
        <div className="hero-logo">
          <Hero />
        </div>
        <div className="dp-img">
          <img src="../../images/dp.png" alt="" />
        </div>
      </div>
      {/* Hero section ending*/}
      <div className="services-section">
        <h1 className="logo-title">Proficient Skills in:</h1>
      </div>
      <div className="cards">{cardElement}</div>
      <div className="card logos">
        <div className="card-img">{imgElement}</div>
      </div>
      <div className="card-figma  "></div>
      <Projects />
      <div className="about">
        <h1 className="logo-title about-title">About</h1>
        <p id="about" className="about-p ">
          My name Is Jacob Angel I'm a Front end developer I live in Kenya I'm
          have 0 degrees but 100% skillfull, Talented and passionate in
          designing and creating and a mind full of creativity and i'm also open
          to learn new things .
        </p>
      </div>
    </>
  );
}
