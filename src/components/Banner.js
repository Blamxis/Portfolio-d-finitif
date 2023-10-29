import { useMemo } from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ["Maxime GAVINET", "Développeur Web", "Développeur Full Stack"], []);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum => loopNum + 1); // Utilisation d'une mise à jour fonctionnelle
            setDelta(500);
        }
    }

    let ticker = setInterval(() => {
        tick();
    }, delta)

    return () => { clearInterval(ticker)};
}, [text, delta, isDeleting, loopNum, toRotate, setLoopNum, setIsDeleting, setDelta, setText, period])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Bienvenue sur mon Portfolio</span>
                                <h1><span className="wrap">{text}</span></h1>
                                <p>Bonjour, Je suis Maxime, ravis de vous rencontrer.
                                Depuis déja bien longtemps l'informatique me passionne et 
                                aujourd'hui, j'ai décidé de franchir un cap. Je suis en formation 
                                avec STUDI pour passer mon titre de <b>Graduate Developper Web et Web Mobile</b>.
                                Je suis quelqu'un de <b>Curieux</b>, <b>Ambitieux</b> et surtout <b>Perfectioniste</b> alors les projets sont pour moi un cadeau afin de m'améliorer dans ce que j'aime <b>Coder</b>.</p>
                                <button onClick={() => console.log("connect")}>En savoir plus <ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}