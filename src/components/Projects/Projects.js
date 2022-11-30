import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import earth from "../../Assets/Projects/earth.png"
import weather from "../../Assets/Projects/weather.png"
import ultimability from "../../Assets/Projects/ultimability.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earth}
              title="Earth"
              description="helpfull in learning area and may be usefull for Geographer.It is made by mapbox gl js api.It also shows recently came earthquack."
              ghLink="https://github.com/dharmandmarmik/earth"
              demoLink="https://dharmpatel.w3spaces.com/earth.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ultimability}
              title="Ultimability"
              description="static website helps to people who are unable to speak. It is made by html,css,js."
              ghLink="https://github.com/dharmandmarmik/ultimability"
              demoLink="https://dharmpatel.w3spaces.com/ultimability/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather"
              description="made by node js,express js,html,css,js and bootstrap.It is a weather app which gives weather of any city in the world.It also shows all parameter of weather in detail."
              ghLink="https://github.com/dharmandmarmik/weather"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
