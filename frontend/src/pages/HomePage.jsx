import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Container, Row, Col, Navbar, Nav, Card, Button, Image } from 'react-bootstrap';

const Divider = () => (
  <hr style={{ borderTop: '1px solid #e1e1e1', margin: '20px 0' }} />
);

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'rgba(202, 179, 155, 0.527)', color: 'rgb(54, 43, 42)', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <Navbar bg="light" expand="lg" fixed="top" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Container>
          <Navbar.Brand href="#">NOIR</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={RouterLink} to="/" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Home</Nav.Link>
            <Nav.Link as={RouterLink} to="/shop" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Shop</Nav.Link>
            <Nav.Link as={RouterLink} to="/our-story" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Our Story</Nav.Link>
            <Nav.Link as={RouterLink} to="/menu" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Menu</Nav.Link>
            <Nav.Link as={RouterLink} to="/events" style={{ fontWeight: 'bold', color: 'rgb(18, 45, 18)' }}>Happenings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('/images/employees.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '80px',
          borderRadius: '7px'
        }}
      >
        <div style={{ backgroundColor: 'rgba(25, 74, 29, 0.223)', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{ color: 'white', fontSize: '3rem' }}>NOIR BREWING COMPANY</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: '1.2rem', fontWeight: '400', lineHeight: '1.6', color: 'rgb(18, 45, 18)' }}>
              <strong>The Noir Brewing Company</strong>, a Camacho Hospitality Group original concept in Texas Tower, offers an upscale Italian-European dining experience in the heart of Downtown Houston.
              With a refined menu of expertly crafted dishes, an extensive wine selection, and a sophisticated ambiance, Noir Brew blends timeless elegance with modern charm for an unforgettable culinary experience.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Our Story Banner */}
      <RouterLink to="/our-story" style={{ textDecoration: 'none' }}>
        <div
          style={{
            backgroundImage: "url('/images/ourstory.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'light', color: 'white' }}>Our Story</h2>
        </div>
      </RouterLink>

      {/* Visit Us Section */}
      <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Row className="text-center">
          <Col md={6}>
            <p style={{ fontSize: '1.1rem' }}><strong>U.S. Location:</strong><br /> 390 Milam Ave, Houston, TX 77002</p>
          </Col>
          <Col md={6}>
            <p style={{ fontSize: '1.1rem' }}>
              <strong>Hours of Operation:</strong><br />
              Mon - Fri: 7:00 AM - 12:00 AM<br />
              Sat: 8:00 AM - 6:00 PM<br />
              Sun: Closed
            </p>
          </Col>
        </Row>
      </Container>

      {/* Image Gallery */}
      <Container style={{ paddingBottom: '50px' }}>
        <Row>
          {[
            "blackfront.jpg", "greencro.jpg", "coffeeinside.jpg",
            "coffeecake.jpg", "coffie.jpg", "salad.jpg"
          ].map((image) => (
            <Col key={image} xs={12} md={4} className="mb-4">
              <Image src={`/images/${image}`} alt={image} style={{ borderRadius: '5px', width: '100%' }} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Social Media Icons */}
      <Container style={{ paddingBottom: '50px' }}>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(18, 45, 18)' }}>
              <FaInstagram size={45} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(18, 45, 18)' }}>
              <FaFacebookF size={45} />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(232, 221, 211, 1)', textAlign: 'center', padding: '30px 20px' }}>
        <Divider />
        <p>&copy; 2025 Noir Brew. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
