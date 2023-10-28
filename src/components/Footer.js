import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo_gorille-removebg-preview.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon github.svg';
import navIcon3 from '../assets/img/discord-svgrepo-com.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://fr.linkedin.com/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon1" /></a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon 2" /></a>
                            <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon 3" /></a>
                        </div>
                        <p>CopyRight 2023. Tout Droit Réservé</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}