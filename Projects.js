import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Real Estate Management System"
              description="A website which enables hassle free online searching of properties that are listed for sale or rent in a selected area that is developed using ReactJS,NextJS,NodeJS and Redux which resulted the client in 25% increase in Profit."
              ghLink=""
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online E-Commerce Website"
              description="This project leverages Java for its core logic, Spring and Spring Boot for efficient application development,JSP for dynamic web pages, and MySQL for robust data storage and this combination results in a responsive and feature-rich E-Commerce site capable of handling product listings, shopping carts, user authentication etc"
              ghLink="https://github.com/co-de-er123/Real-Estate-Website"
              // demoLink="https://github.com/co-de-er123/Real-Estate-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Railway Management Platform"
              description="Developed and implemented a web-based railway management system, streamlining ticket booking, train scheduling, route management, and customer data handling processes, resulting in a 40% reduction in operational costs and a 25% in revenue that is developed using HTML,CSS,JavaScript,PHP and JQuery"
              ghLink="https://github.com/co-de-er123/Railway_Reservation_System"
              // demoLink="https://github.com/co-de-er123/Railway_Reservation_System"            
            />
          </Col>

          <Col md={4} className="Weather App Using API">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App using API"
              description="A Simple and Easy to use WeatherApp done using OpenWeatherMap API . This App Provides Accurate and upto date Weather by using the API Functionality.Provides Correct Weather info of Each and Every Place built using simple HTML,CSS and JavaScript where the Place name is Given as Input and it will fetch the Weather of that Place ."
              ghLink="https://github.com/co-de-er123/Weather-App-using-API"
              // demoLink="https://github.com/co-de-er123/Weather-App-using-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Android Food Delivery App"
              description="Using Java for Backend and XML for UI design,developed a full functional food delivery android app where the users can place orders across a wide variety of stores available."
              ghLink="https://github.com/co-de-er123/Android-Ecommerce-App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
