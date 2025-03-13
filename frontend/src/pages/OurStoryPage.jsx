import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Image, Button } from 'react-bootstrap';

function OurStoryPage() {
  const styles = {
    body: {
      fontFamily: 'Futura, sans-serif',
      margin: 0,
      paddingTop: '100px',
      backgroundColor: 'rgb(245, 245, 245)',
      color: 'rgb(18, 45, 18)',
      textAlign: 'center',
    },
    header: {
      padding: '20px',
      backgroundColor: 'rgba(232, 221, 211, 1)',
      color: 'rgb(18, 45, 18)',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    surface: {
      fontSize: '2.5rem',
    },
    tops: {
      paddingRight: '50px',
      fontSize: '20px',
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
    },
    container: {
      maxWidth: '900px',
      margin: '50px auto',
      padding: '20px',
    },
    storyText: {
      fontSize: '1.2rem',
      lineHeight: 1.8,
      textAlign: 'justify',
      marginBottom: '50px',
    },
    circularImages: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: '20px',
      marginTop: '120px',
      marginBottom: '20px',
    },
    image: {
      width: '160px',
      height: '160px',
      objectFit: 'cover',
      borderRadius: '50%',
      transition: 'transform 0.3s ease-in-out',
    },
    commitmentContainer: {
      textAlign: 'center',
      padding: '50px 20px',
    },
    commitmentTitle: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    commitmentText: {
      fontSize: '1.2rem',
      maxWidth: '800px',
      margin: '0 auto 15px auto',
      lineHeight: 1.6,
    },
    commitmentImages: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      marginTop: '100px',
    },
    commitmentImage: {
      width: '50%',
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '50%',
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: 'rgba(232, 221, 211, 1)',
      color: 'rgb(18, 45, 18)',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    link: {
      color: 'rgb(18, 45, 18)',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#">NOIR</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={RouterLink} to="/" style={styles.link}>Home</Nav.Link>
            <Nav.Link as={RouterLink} to="/shop" style={styles.link}>Shop</Nav.Link>
            <Nav.Link as={RouterLink} to="/our-story" style={styles.link}>Our Story</Nav.Link>
            <Nav.Link as={RouterLink} to="/menu" style={styles.link}>Menu</Nav.Link>
            <Nav.Link as={RouterLink} to="/events" style={styles.link}>Happenings</Nav.Link>
          </Nav>
        </Navbar>
      </header>

      <Container style={styles.container}>
        <h1 className="surface" style={styles.surface}>Beneath The Surface</h1>
        <p className="story-text" style={styles.storyText}>
          Noir Brew was born from a lifelong love affair with coffee—its depth, its complexity, and the way it brings people together. Growing up in Italy, coffee wasn't just a drink; it was a ritual, a moment of connection, and a reflection of craftsmanship passed down through generations. Mornings were filled with the rich aroma of fresh espresso, afternoons with the warmth of a slow-sipped cappuccino, and evenings with the hum of conversation over a well-brewed cup.
        </p>
        <p className="story-text" style={styles.storyText}>
          Beyond the café culture, we became fascinated with the journey of coffee—from the sun-drenched fields where beans are carefully cultivated to the intricate roasting process that unlocks their bold and delicate flavors. This passion led us to create Noir Brew, a brand dedicated to honoring the artistry behind every cup.
        </p>
        <p className="story-text" style={styles.storyText}>
          We source the finest beans, curate exceptional blends, and ensure that each sip embodies quality, tradition, and sophistication. Every step, from the hands of the farmers to the final pour, is treated with care and respect—so that what reaches your cup isn't just coffee, but a story of heritage, craftsmanship, and pure indulgence.
        </p>
        <p className="story-text" style={styles.storyText}>Welcome to Noir Brew—where every cup is a journey.</p>

        <div className="circular-images" style={styles.circularImages}>
          <Image src="/images/pisca.jpg" alt="Coffee Beans" style={styles.image} roundedCircle />
          <Image src="/images/muchobeans.jpg" alt="Barista Pouring Coffee" style={styles.image} roundedCircle />
          <Image src="/images/roasting.jpg" alt="Espresso Shot" style={styles.image} roundedCircle />
          <Image src="/images/grinding.jpg" alt="Coffee Farm" style={styles.image} roundedCircle />
          <Image src="/images/hotdrink.jpg" alt="Cup of Cappuccino" style={styles.image} roundedCircle />
        </div>
      </Container>

      <section id="commitment" className="commitment-container" style={styles.commitmentContainer}>
        <h2 className="commitment-title" style={styles.commitmentTitle}>Our Commitment</h2>
        <p className="commitment-text" style={styles.commitmentText}>
          At Noir Brew, we believe that exceptional coffee begins long before it reaches your cup. It starts in the lush, high-altitude regions of Costa Rica, where some of the world's finest coffee is grown—cultivated by generations of farmers who have perfected their craft with patience, skill, and care.
        </p>
        <p className="commitment-text" style={styles.commitmentText}>
          We are deeply committed to supporting the communities that make our handcrafted coffee possible. Through direct partnerships with local farmers in Costa Rica's renowned coffee regions, we ensure fair wages, sustainable farming practices, and investment in the well-being of their families. By working closely with these communities, we help provide access to better education, healthcare, and resources that empower future generations.
        </p>
        <p className="commitment-text" style={styles.commitmentText}>
          Beyond ethical sourcing, we celebrate the art of coffee by preserving traditional harvesting and processing methods—ensuring that every bean is handpicked at peak ripeness and carefully roasted to perfection. This dedication to craftsmanship not only honors the rich heritage of coffee cultivation but also delivers an unparalleled experience in every sip.
        </p>
        <p className="commitment-text" style={styles.commitmentText}>
          When you choose Noir Brew, you're not just enjoying premium coffee—you're supporting the people, traditions, and lands that make it possible.
        </p>
        <div className="commitment-images" style={styles.commitmentImages}>
          <Image src="/images/senor2.jpg" alt="Coffee Farmer" className="commitment-image" style={styles.commitmentImage} roundedCircle />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Noir Brew. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OurStoryPage;
