import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
    const formInitialDetails = {
        Prénom: '',
        Nom: '',
        Email: '',
        Téléphone: '',
        Message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Envoyer');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
           ...formDetails,
           [category]: value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Envoi...');
        let response = await fetch("http://localhost/portfolio/server.php", {
            method:"POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Envoyer");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message envoyé avec succès'});
        } else {
            setStatus({ success: false, message: "Quelque chose ne vas pas, réessayer plus tard s'il vous plait"})
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact" />
                    </Col>
                    <Col md={6}>
                        <h2>Envoyez Moi Un Message</h2>
                        <form action="http://localhost/portofolio/server.php" onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.Prénom} placeholder="Prénom" onChange={(e) => onFormUpdate('Prénom', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.Nom} placeholder="Nom" onChange={(e) => onFormUpdate('Nom', e.target.value)} />  
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.Email} placeholder="Email" onChange={(e) => onFormUpdate('Email', e.target.value)} />  
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.Téléphone} placeholder="Téléphone" onChange={(e) => onFormUpdate('Téléphone', e.target.value)} />  
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.Message} placeholder="Message" onChange={(e) => onFormUpdate('Message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                  status.message &&
                                  <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                  </Col> 
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 