import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import LaptopImg from "../../assets/home-main.svg";
import LaptopImg from "../../assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import store from '../../Store/store';
import {DiFsharp} from "react-icons/di";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body"><DiFsharp/ >{' '}
                Hi, my name is <span className="" style={{color:'yellow'}} >KOUSHIK NANDI </span>
                 and I'm from <span className="yellow" > Kolkata,India</span>
                <br />
                <br />
                <p style={{color:'white'}}><DiFsharp/> {' '}I AM A B.Tech Graduate Student In<span className="" style={{color:'yellow'}}> Computer Science Engineering (CSE)</span> </p> in 2023 from FIEM,Kolkata.
                <br />
                <br />
                <DiFsharp/> {' '}As a
                  <b className="" style={{color:'yellow'}}> Back-End </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br /><DiFsharp/> {' '}I am proficient in
                    <b className="" style={{color:'yellow'}}> Javascript.. </b>
                    as well as have knowledge in programming languages such as Java
                  <b className="" style={{color:'yellow'}}>  React Js , PHP.</b>
                  <br />
                  <br />
                  <DiFsharp/> {' '}
                  I have a passion for working
                  with <b className="" style={{color:'yellow'}}> MongoDB, Java, Postgre Sql</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript,Java libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="" style={{color:'yellow'}}> Node . js etc.</b>
                  </i>
                  <br />
                  <br />
                  <DiFsharp/> {' '}
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Development, </b>
                    as well as exploring areas related to
                    <b className="" style={{color:'yellow'}}> Artificial Intelligence.</b>
                  </i>
                  <br />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="about.png" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 style={{color:'black'}}><DiFsharp/> {' '}FIND ME ON{' '}<DiFsharp/> </h1>
                <p>
                Please don't hesitate to reach out to me and <span className=""  style={{color:'blue'}}>connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href={store.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href={store.facebook_link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href={store.linkdin_link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href={store.insta_link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About