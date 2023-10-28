import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/HTML5_Badge.svg-removebg-preview.png";
import meter2 from "../assets/img/css-3.svg";
import meter3 from "../assets/img/bootstrap-logo-removebg-preview.png";
import meter4 from "../assets/img/javascript-logo-1-removebg-preview.png";
import meter5 from "../assets/img/nodejs-logo-removebg-preview.png";
import meter6 from "../assets/img/Git_icon-removebg-preview.png";
import meter7 from "../assets/img/Icon-github-removebg-preview.png";
import meter8 from "../assets/img/icon-php-removebg-preview.png";
import meter9 from "../assets/img/icon_symfony-removebg-preview.png";
import meter10 from "../assets/img/logo_react-removebg-preview.png";
import meter11 from "../assets/img/icon_npm-removebg-preview.png";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Compétences</h2>
              <p>
                Je suis compétent dans différentes technologies web.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={meter1} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter2} alt="Img" /> 
                </div>
                <div className="item">
                    <img src={meter3} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter4} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter5} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter6} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter7} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter8} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter9} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter10} alt="Img" />
                </div>
                <div className="item">
                    <img src={meter11} alt="Img" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
