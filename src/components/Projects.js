import { Container, Row, Col, TabContainer, TabContent, TabPane, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Webagency img.png";
import projImg2 from "../assets/img/coffeeProject.png";

export const Projects = () => {

    const projects = [
        {
            title : "WebAngency",
            description: "Design & Développement",
            imgUrl: projImg1,
        },

        {
            title: "Café Des Délices",
            description: "Design & Développement",
            imgUrl: projImg2,
        }, 
    ];

    return (
        <section className="project" id="projects">
           <Container>
            <Row>
                <Col>
                    <h2>Projets</h2>
                    <p>Vous trouverez ici la liste de mes projets</p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tableau n° 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tableau n° 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tableau n° 3</Nav.Link>
                        </Nav.Item>
                  </Nav>
                  <TabContent>
                    <TabPane eventKey="first">
                        <Row>
                           {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                           } 
                        </Row>
                    </TabPane>
                    <TabPane eventKey="second">Prochainement...</TabPane>
                    <TabPane eventKey="third">Prochainement...</TabPane>
                  </TabContent>
                  </TabContainer>
                </Col>
            </Row>
           </Container>
           <img className="background-image-right" src={colorSharp2} alt="bg"></img>
        </section>
    )
}