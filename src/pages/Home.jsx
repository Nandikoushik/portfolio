import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/me.jpeg'
import Particle from '../components/Particle';
import Type from '../components/Home/Type';

const Home = (val) => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name" style={{fontFamily:'monospace',color:'yellow'}}> Koushik Nandi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" ,color:'yellow' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                id="img-fluid"
                style={{ height: "375px",width:"300px" ,border:'2.5px solid black',borderRadius:"1500px",'margin-left':"75px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home