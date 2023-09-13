import Cards from "./cards";
import CardData from "./CardData";
import Img from "./imgData";
import Image from "./img";
import Hero from "./Hero";
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
      <div className="main-container">
        <div className="hero-logo">
          <Hero />
        </div>
        <img src="../../images/cd-image.jpg" alt="" />
      </div>
      <h1>Proficient in:</h1>
      <div className="cards">{cardElement}</div>
      <h1>Skills:</h1>
      <h3>For coding:</h3>
      <div className="card">
        <div className="card-img">{imgElement}</div>
      </div>
      <h3>For Logo design Ang designing </h3>
      <div className="card-img card">
        <img
          className="logo-img figma"
          src="../../images/figma-light.svg"
          alt=""
        />
      </div>
      <h1>About</h1>
      <p id="#about" className="about-p card">
        My name Is Jacob Angel I'm a Front end developer I live in Kenya I'm
        have 0 degrees but 100% skillfull and Talented in designing and a mind
        full creativity and i'm also open to learn new things .
      </p>
    </>
  );
}
