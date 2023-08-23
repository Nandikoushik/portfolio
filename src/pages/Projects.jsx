import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import portfolio from "../assets/projects/portfolio.png";
import myn from "../assets/projects/myn-cart.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myn}
              isBlog={false}
              title="Take A Service"
              description="This is a Service Based Online Platform manage by ourself After Succesfully Registration . The whole Project is developed on M-E-R-N technology................"
              demoLink="https://take-a-service.onrender.com/"
              ghLink='https://github.com/Nandikoushik/mernstack'
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A personal portfolio is a curated collection of our best work, accomplishments, and experiences that showcases our skills, and creativity.It is made fully on React JS."
              demoLink="https://port-folio-koushik.vercel.app/"
              ghLink='https://github.com/Nandikoushik/portfolio'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
