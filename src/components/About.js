import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import '../css/About.css';

const About = () => {
  return (
    <>
      <MyNavbar />
      <Container className="about-us">
        <h1>About DIGITAL LIBRARY HUB</h1>
        <Row>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>
              Digital Libary Hub  was founded with a mission to bring the best selection of books to readers around the world.
              We believe in the power of literature to inspire, educate, and entertain. Our curated selection of books spans various genres,
              catering to all kinds of readers.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </Col>
          <Col md={6}>
            <img src="https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D/500x200" alt="Our Story" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D/500x200" alt="Our Mission" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              At our Libary, our mission is to create a vibrant community of book lovers. We are dedicated to providing
              excellent customer service, a wide variety of books, and a seamless shopping experience. Whether you're
              looking for the latest bestsellers or timeless classics, BOOKSoLD is your one-stop shop for all your
              literary needs.
              t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;